import { Header } from '../components/Header/Header'
import { Search } from '../components/Search/Search'
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
    </div>
  )
}
