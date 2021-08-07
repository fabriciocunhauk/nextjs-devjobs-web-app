import data from '../../data.json';
import HeaderBg from '../../public/assets/desktop/bg-pattern-header.svg';
import Logo from '../../public/assets/desktop/logo.svg';
import Moon from '../../public/assets/desktop/icon-moon.svg';
import Sun from '../../public/assets/desktop/icon-sun.svg';

import styles from '../styles/pages/Home.module.css';
import SearchbarFilter from '../components/SearchbarFilter';
import Card from '../components/Card';

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
        <div className={styles.resultCardsContainer}>
          {data.map(detail => {
            return (
              <Card
                key={detail.id}
                logo={detail.logo}
                bgColor={detail.logoBackground}
                postedAt={detail.postedAt}
                contract={detail.contract}
                position={detail.position}
                company={detail.company}
                location={detail.location}
              />
            )
          })}
        </div>
      </main>
    </div>
  )
}
