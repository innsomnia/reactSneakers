import { useState } from 'react'
import styles from './styles.module.scss'

interface itemProp {
  item: { id: number; title: string; price: number; imageUrl: string }
}

export const Item = ({ item }: itemProp) => {
  const [isAdded, setIsAdded] = useState(false)
  const [isFav, setIsFav] = useState(false)

  const addToCart = () => {
    setIsAdded(!isAdded)
  }

  const addToFav = () => {
    setIsFav(!isFav)
  }

  return (
    <div className={styles.itemCont}>
      <button onClick={addToFav} className={isFav ? styles.addedToFav : styles.addToFav}>
        {isFav ? '♥' : '♡'}
      </button>
      <img src={item.imageUrl} alt='img' />
      <h3>{item.title}</h3>

      <div className={styles.priceCont}>
        <div className={styles.priceLabel}>
          <span>ЦЕНА:</span>
          <p>{item.price} руб.</p>
        </div>

        <button onClick={addToCart} className={isAdded ? styles.addedBtn : styles.addBtn}>
          {isAdded ? '✓' : '+'}
        </button>
      </div>
    </div>
  )
}
