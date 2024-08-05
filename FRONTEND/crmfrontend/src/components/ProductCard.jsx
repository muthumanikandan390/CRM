/* eslint-disable react/prop-types */
import styles from './ProductCard.module.css';
const name = "playstation"
const price = "20$"
const imgs  = "https://media.istockphoto.com/id/1451456915/photo/female-freelance-developer-coding-and-programming-coding-on-two-with-screens-with-code.webp?b=1&s=170667a&w=0&k=20&c=7QL_-R6HTGHCYt37C8NyjuW6mIiJeQhDVgW8i_6l4Vk="

function ProductCard() {
  return (
    <div className={styles.card}>
       <img src={imgs} alt={name} className={styles.image} />
      <div className={styles.details}>
        <span className={styles.name}>{name}</span>
        <span className={styles.price}>{price}</span>
      </div>
    </div>
  )
}

export default ProductCard
