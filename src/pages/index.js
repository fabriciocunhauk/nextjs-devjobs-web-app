import HeaderBg from '../assets/desktop/bg-pattern-header.svg';
import Logo from '../assets/desktop/logo.svg';
import Moon from '../assets/desktop/icon-moon.svg';
import Sun from '../assets/desktop/icon-sun.svg';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <HeaderBg className={styles.headerBackground} />
        <Logo />
        <div className={styles.bgSwitchContainer}>
          <Sun />
          <label className={styles.switch}>
            <input type="checkbox" />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <Moon />
        </div>
      </header>
      <main>

      </main>
    </div>
  )
}
