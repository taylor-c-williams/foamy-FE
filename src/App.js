import { useEffect, useState } from 'react'
import { getAll } from './services'
import './App.css'

function App() {
  const [images, setImages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    getAll()
      .then((res) => {
        setImages(res)
      })
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className='App'>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <img src={image.url} alt={image.foamy} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
