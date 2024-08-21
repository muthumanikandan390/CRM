/* eslint-disable react/prop-types */
import styles from './ProductCard.module.css';
const name = "playstation"


function ProductCard({ description , count , price , img }) {
  return (
    <div className={styles.card}>
       <img src={img} alt={name} className={styles.image} />
       <p className={styles.description}>{description}</p>
      <div className={styles.details}>
        <span className={styles.name}><em>{count} nos</em></span>
        <span className={styles.price}>${price}</span>
      </div>
    </div>
  )
}

export default ProductCard
