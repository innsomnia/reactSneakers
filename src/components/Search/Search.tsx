import styles from './styles.module.scss'
import searchIcon from '/public/searchIcon.svg'

export const Search = () => {
  return (
    <div className={styles.search}>
      <img src={searchIcon} alt='' />
      <input type='text' placeholder='Поиск...' />
    </div>
  )
}
