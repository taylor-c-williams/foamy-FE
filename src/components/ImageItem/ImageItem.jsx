import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getById, updateStatus } from '../../services'
import styles from './imageItem.module.css'

export default function ImageItem() {
  const [image, setImage] = useState({})
  const [loading, setLoading] = useState(false)


  const { id } = useParams()
// useEffect(() => {
//   setLoading(true)
//   async function fetchData() { await getById(id)}
//   fetchData()
//     .then((res) => {
//       setImage(res)
//     })
//     .then(() => {
//       setLoading(false)
//     })
// }, [id, image.foamy])

useEffect(() => {
  setLoading(true)
  const fetchData = async () => {
     const data = await getById(id);
     setImage({...data});
     console.log(data)
  }
  fetchData();
  setLoading(false);
}, [id, image.foamy]);

const toggleFoamy = () => {
  const res = updateStatus(image.id, !image.foamy)
  setImage(res)
  console.log(image)
}


  return (
    <div className={styles.ImageItem}>
      {loading && 'Loading!'}

      <img src={image.url} alt={`Item Number: ${image.id}`}/>
      <h1>Foam Status: </h1>
      <h1>{image.foamy && 'foamy'} </h1>
      <button onClick={toggleFoamy}>Foam!</button>
    </div>
  )
}
