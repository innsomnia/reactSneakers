import { Drawer } from '../components/Drawer/Drawer'
import { Header } from '../components/Header/Header'
import { Item } from '../components/Item/Item'
import { Search } from '../components/Search/Search'
import { items } from '../data/items'
import styles from './styles.module.scss'

import mainImg from '/public/mainImg.png'

export const App = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.mainBanner}>
        <img src={mainImg} alt='' />
      </div>
      <div className={styles.searchCont}>
        <h2>Все кроссовки</h2>
        <Search />
      </div>
      <div className={styles.itemsList}>
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
      <Drawer />
    </div>
  )
}
