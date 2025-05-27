import styles from './styles.module.scss'
import favBtn from '/public/favBtn.svg'

interface itemProp {
  item: { id: number; title: string; price: number; imageUrl: string }
}

export const Item = ({ item }: itemProp) => {
  return (
    <div className={styles.itemCont}>
      <button className={styles.favBtn}>
        <img src={favBtn} alt='img' />
      </button>
      <img src={item.imageUrl} alt='img' />
      <h3>{item.title}</h3>

      <div className={styles.priceCont}>
        <div className={styles.priceLabel}>
          <span>ЦЕНА:</span>
          <p>{item.price} руб.</p>
        </div>

        <button className={styles.addBtn}>+</button>
      </div>
    </div>
  )
}
