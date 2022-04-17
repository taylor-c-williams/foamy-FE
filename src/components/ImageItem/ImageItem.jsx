import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getById, updateStatus } from '../../services'
import styles from './imageItem.module.css'

export default function ImageItem() {
  const [image, setImage] = useState({})
  const [loading, setLoading] = useState(false)

  const { id } = useParams()
useEffect(() => {
  setLoading(true)
  getById(id)
    .then((res) => {
      setImage(res)
    })
    .then(() => {
      setLoading(false)
    })
}, [id, image.foamy])

const toggleFoamy = () => {
  updateStatus(image.id)
}
  return (
    <div className={styles.ImageItem}>
      {loading && 'Loading!'}

      <img src={image.url} alt={`Item Number: ${image.id}`}/>
      <h1>Foam Status: { image.foamy ? image.foamy : 'Undefined'}</h1>
      <button onClick={toggleFoamy}>Foam!</button>
    </div>
  )
}
