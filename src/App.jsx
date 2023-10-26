import { useEffect, useState } from "react"
import { getRandomFact } from "./services/fact";
import "./App.css"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact';
//const CAT_ENDPOINT_IMAGE_URL   = `https://cataas.com/cat/says/${input}?fontSize=50&fontColor=red&json=true`

export function App() {
  const [fact, setFact] = useState()
  const [urlImage, setUrlImage] = useState();

  //no se puede usar react Jquery, SWR, axios, apollo
  // [] => dependencias que pueden cambiar
  //useEffect(() => {
  //  fetch(CAT_ENDPOINT_RANDOM_FACT)
  //    .then(res => res.json())
  //    .then(data => {
  //      const { fact } = data
  //      setFact(fact)
  //      const threeFirtsWord = fact.split(' ', 3) //obtiene los primeros 3 palabras de la cadena
  //      console.log(threeFirtsWord)
//
  //      fetch(`https://cataas.com/cat/says/${threeFirtsWord}?fontSize=50&fontColor=red&json=true`)
  //        .then(res => res.json())
  //        .then(response => {
  //          console.log(response)
  //          const { url } = response
  //          setUrlImage(`https://cataas.com/${url}`)
  //          //console.log(ur)
  //        })
  //    })
  //}, [])

  //para recuperar el texto random
  //useEffect(() => {
  //  fetch(CAT_ENDPOINT_RANDOM_FACT)
  //    .then(res => res.json())
  //    .then(data => {
  //      const { fact } = data
  //      setFact(fact)
  //    })
  //}, [])

  useEffect(() => {
    getRandomFact().then(setFact)
  }, [])

  //para recuperar la imagen del gato
  useEffect(() => {
    if (!fact) return
    const threeFirtsWord = fact.split(' ', 3) //obtiene los primeros 3 palabras de la cadena
    fetch('https://api.thecatapi.com/v1/images/search')
    //fetch(`https://cataas.com/cat/says/${threeFirtsWord}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(res => {
        //console.log()
        const { url } = res[0]
        setUrlImage(url)
        //console.log(ur)
      })
  }, [fact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setFact(newFact)
  }

  //{fact && <p>{fact}</p>} => renderizado condicional
  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Click</button>
      {fact && <p>{fact}</p>}
      {urlImage && <img src={urlImage} className='cat-image' alt='Imagen extracted using the firts three word for {fact}' />}
    </main>
  )
}
