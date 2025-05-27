import styles from './styles.module.scss'
import cart from '/public/Cart.svg'
import fav from '/public/Fav.svg'
import prof from '/public/Prof.svg'

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <img src='/image 4.svg' alt='img' />
        <div className={styles.text}>
          <h1>REACT SNEAKERS</h1>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <div className={styles.contNavigation}>
        <div className={styles.cart}>
          <img src={cart} alt='img' />
          <p>1200 руб.</p>
        </div>
        <div className={styles.fav}>
          <img src={fav} alt='img' />
          <p>Избранное</p>
        </div>
        <div className={styles.profile}>
          <img src={prof} alt='img' />
          <p>Профиль</p>
        </div>
      </div>
    </div>
  )
}
