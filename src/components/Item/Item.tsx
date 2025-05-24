import styles from './styles.module.scss'
import greenSneaker from '/public/Sneakers/green.jpg'
import favBtn from '/public/favBtn.svg'

export const Item = () => {
  return (
    <div className={styles.itemCont}>
      <button className={styles.favBtn}>
        <img src={favBtn} alt='img' />
      </button>
      <img src={greenSneaker} alt='img' />
      <h3>Мужские Кроссовки Nike Blazer Mid Suede</h3>

      <div className={styles.priceCont}>
        <div className={styles.priceLabel}>
          <span>ЦЕНА:</span>
          <p>12 999 руб.</p>
        </div>

        <button className={styles.addBtn}>+</button>
      </div>
    </div>
  )
}
