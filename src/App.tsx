
import './App.css'
import {useEffect, useState} from "react";



function App() {

    const [number, setNumber] = useState(0)
    const  [isLoading, setIsLoading] = useState(true);
    const [refreshtoken, setRefreshtoken] = useState(0)
    const [error, setError] = useState(0)


    useEffect(() => {

        setIsLoading(true)

        fetch('https://www.random.org/integers/?num=1&min=1&max=500&col=1&base=10&format=plain&rnd=new')

            .then((resp) => resp.json())
            .then((data) => setNumber(data))
            .catch((error) => setError(error))
            .finally(() => setIsLoading(false))
    }, [refreshtoken])
  return (
    <>
        {
            isLoading
            ? (
                <h2>Cargando...</h2>
            ) : (
                <h2>Número aleatorio: {number}</h2>
            )
        }
        <div>{error}</div>
        <button
            disabled={isLoading}
            onClick={() => setRefreshtoken(refreshtoken + 1)}>
            Nuevo número
        </button>
    </>
  )
}

export default App
