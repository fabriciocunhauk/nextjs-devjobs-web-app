import HeaderBg from '../assets/desktop/bg-pattern-header.svg';
import Logo from '../assets/desktop/logo.svg';
import Moon from '../assets/desktop/icon-moon.svg';
import Sun from '../assets/desktop/icon-sun.svg';

import styles from '../styles/pages/Home.module.css';
import SearchbarFilter from '../components/SearchbarFilter';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <HeaderBg className={styles.headerBackground} />
        <Logo className={styles.logo} />
        <div className={styles.bgSwitchContainer}>
          <Sun className={styles.sun} />
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <Moon className={styles.moon} />
        </div>
      </header>
      <main>
        <div className={styles.searchBoxContainer}>
          <SearchbarFilter />
        </div>
      </main>
    </div>
  )
}
