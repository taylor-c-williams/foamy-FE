import styles from './imageItem.module.css'
export default function ImageItem({images}) {

  function handleClick() {

  }

  return (
    <section className={styles.imageCard}>      
      <ul className={styles.imageUL}>
        {images.map((image) => (
          <li key={image.id}>
            {image.id}
            <img src={image.url} alt={image.foamy} />
            <button onClick={handleClick}>Foamy?</button>
          </li>
        ))}
      </ul></section>
  )
}
