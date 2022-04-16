import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getById } from '../../services'

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
}, [id])

  return (

    <div>
      {loading && 'Loading!'}
      {image.url}
    {image.id}</div>
  )
}
