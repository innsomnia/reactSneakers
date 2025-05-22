import { Header } from '../components/Header/Header'
import styles from './styles.module.scss'

import mainImg from '/public/mainImg.png'

export const App = () => {
  return (
    <div className={styles.main}>
      <Header />
      <div className={styles.mainBanner}>
        <img src={mainImg} alt='' />
      </div>
    </div>
  )
}
