import Button from '../Button/Button'
import { CartItem } from '../CartItem/CartItem'
import styles from './styles.module.scss'

export const Drawer = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <div className={styles.headerOfDrawer}>
          <h1>Корзина</h1>
          <button className={styles.drawerBtn}>х</button>
        </div>
        <div className={styles.itemsArea}>
          <CartItem />
          <CartItem />
        </div>
        <div className={styles.footerOfDrawer}>
          <div className={styles.cartSum}>
            <p>Итог:</p>
            <span>25 000 руб.</span>
          </div>
          <div className={styles.cartTax}>
            <p>Налог:</p>
            <span>5 000 руб.</span>
          </div>
          <Button />
        </div>
      </div>
    </div>
  )
}
