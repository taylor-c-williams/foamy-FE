import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { updateStatus, getById } from '../../services'
import useKeypress from 'react-use-keypress'
import leftArrow from '../../assets/left-arrow.png'
import rightArrow from '../../assets/right-arrow.png'
import styles from './imageItem.module.css'

export default function ImageItem() {
  const [image, setImage] = useState({})
  const [loading, setLoading] = useState(false)

  const { id } = useParams()
  const navigate = useNavigate()

  // Set images in state, display loading message, rerender on state change
  useEffect(() => {
    setLoading(true)
    getById(id).then((res) => {
      setImage(res)
    })
    setLoading(false)
  }, [id, image.foamy])

  // Toggle Foamy/Not Foamy
  const handleFoamy = () => {
    const res = updateStatus(image.id, true)
    setImage(res)
    console.log(image)
  }

  const handleNotFoamy = () => {
    const res = updateStatus(image.id, false)
    setImage(res)
  }

  // Keydown Listener
  useKeypress(['ArrowLeft', 'ArrowRight'], (e) => {
    if (e.key === 'ArrowLeft') {
      handlePrevImg()
    } else {
      handleNextImg()
    }
  })

  // To refactor: coming up with some interesting errs re: useNavigate/react router v6
  // Would prefer to use a single handler & pass 'prev', 'next', 'home' as params
  const handleNextImg = () => {
    id < 2100 && navigate(`/${Number(id) + 1}`)
  }

  const handlePrevImg = () => {
    id > 1 && navigate(`/${Number(id) - 1}`)
  }

  const handleHomeNav = () => {
    navigate(`/`)
  }

  return (
    <div className={styles.itemWrapper}>
      <h1>{loading && 'Loading!'}</h1>

      {/* Navigation */}
      <nav className={styles.buttonWrapper}>
        <img src={leftArrow} alt={'Use Arrow Buttons to Navigate'} />
        <button onClick={handlePrevImg}>Previous Image</button>
        <button onClick={handleFoamy}>Foamy!</button>
        <button onClick={handleNotFoamy}>Not Foamy!</button>
        <button onClick={handleHomeNav}>Home</button>
        <button onClick={handleNextImg}>Next Image</button>
        <img src={rightArrow} alt={'Use Arrow Buttons to Navigate'} />
      </nav>

      {/* Content */}
      <div className={styles.imageItem}>
        <img src={image.url} alt={`Item Number: ${image.id}`} />
        <h1>
          Status:
          {image.foamy && ' Foamy 🍺'}
          {image.foamy === false && ' Not Foamy 🚫'}
          {image.foamy === null && ' Uncategorized ❓'}
        </h1>
        Image ID: {image.id}
      </div>

      {/* Navigation */}
      <nav className={styles.buttonWrapper}>
        <img src={leftArrow} alt={'Use Arrow Buttons to Navigate'} />
        <button onClick={handlePrevImg}>Previous Image</button>
        <button onClick={handleFoamy}>Foamy!</button>
        <button onClick={handleNotFoamy}>Not Foamy!</button>
        <button onClick={handleHomeNav}>Home</button>
        <button onClick={handleNextImg}>Next Image</button>
        <img src={rightArrow} alt={'Use Arrow Buttons to Navigate'} />
      </nav>
    </div>
  )
}
