import { useEffect, useState } from 'react'
import { getAll } from './services'
import ImageItem from './components/ImageItem'
import './App.css'

function App() {
  const [images, setImages] = useState([])
  const [pageNumber, setPageNumber] = useState(1)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    getAll(pageNumber)
      .then((res) => {
        setImages(res)
      })
      .then( ()=> {
        setLoading(false)
      });
  }, [pageNumber])

  console.log(loading)
  console.log(images)
  return (
    <div className='App'>
      hello
      { loading && 'Loading!'}
      <ImageItem images={images} /> 
      {pageNumber > 1 && <button onClick={() => setPageNumber(pageNumber - 1)}>Previous Page!</button>}
      {pageNumber < 350 && <button onClick={() => setPageNumber(pageNumber + 1)}>Next Page!</button> }
    </div>
  )
}

export default App
