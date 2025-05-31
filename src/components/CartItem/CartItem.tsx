import styles from './styles.module.scss'

export const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <img src='/public/Sneakers/black.jpg' alt='img' />
      <div className={styles.itemTitle}>
        <h2>Мужские Кроссовки Nike Air Max 270</h2>
        <p>12 000 руб.</p>
      </div>
      <button className={styles.deleteItem}>х</button>
    </div>
  )
}
