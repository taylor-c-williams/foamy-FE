import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getById, updateStatus } from '../../services'
import styles from './imageItem.module.css'

export default function ImageItem() {
  const [image, setImage] = useState({})
  const [loading, setLoading] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  // const pageNumber = Math.floor(id / 6)

  // Grab Image by ID asynchronously, save image obj in state, fetch & rerender on image state change (Foamy toggle), Display 'Loading' while data is being fetched
  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      const data = await getById(id)
      setImage({ ...data })
      console.log(data)
    }
    fetchData()
    setLoading(false)
  }, [id, image.foamy])

  const toggleFoamy = () => {
    const res = updateStatus(image.id, !image.foamy)
    setImage(res)
    console.log(image)
  }

  const handleNextImg = () => {
    navigate(`/${Number(id) + 1}`)
  }

  const handlePrevImg = () => {
    navigate(`/${Number(id) - 1}`)
  }

  const handleHomeNav = () => {
    navigate(`/`)
  }

  return (
    <div className={styles.itemWrapper}>
      {loading && 'Loading!'}
      <section className={styles.imageItem}>
        <img src={image.url} alt={`Item Number: ${image.id}`} />
        <h1>
          Status:
          {image.foamy && ' Foamy 🍺'}
          {image.foamy === false && ' Not Foamy 🚫'}
          {image.foamy === null && ' Unclassified'}
        </h1>
        Image ID: {image.id}
        <button onClick={toggleFoamy}>Toggle Status!</button>
        <button onClick={handlePrevImg}>Previous Image</button>
        <button onClick={handleNextImg}>Next Image</button>
        <button onClick={handleHomeNav}>Home</button>
      </section>
    </div>
  )
}
