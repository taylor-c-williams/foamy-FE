import { useEffect, useState } from 'react'
import { getAll } from './services'
import ImageItem from './components/ImageItem'
import './App.css'

function App() {
  const [images, setImages] = useState([])
  const [pageNumber, setPageNumber] = useState(1)

  useEffect(() => {
    getAll(pageNumber)
      .then((res) => {
        setImages(res)
      })
  }, [pageNumber])
  
  return (
    <div className='App'>
      hello
      <ImageItem images={images} /> 
      {pageNumber > 1 && <button onClick={() => setPageNumber(pageNumber - 1)}>Previous Page!</button>}
      {pageNumber < 350 && <button onClick={() => setPageNumber(pageNumber + 1)}>Next Page!</button> }
    </div>
  )
}

export default App
