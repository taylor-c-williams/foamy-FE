import { useEffect, useState } from 'react'
import { getAll } from './services'
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

  const handleClick = () => {
    setPageNumber(pageNumber + 1)
  }
  
  return (
    <div className='App'>
      hello
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            {image.id}
            <img src={image.url} alt={image.foamy} />
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Next Page!</button>
    </div>
  )
}

export default App
