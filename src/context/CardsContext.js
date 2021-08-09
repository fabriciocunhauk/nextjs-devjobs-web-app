import cardsData from '../../data.json';
import { createContext, useContext } from 'react';
import styles from '../styles/components/SearchFilter.module.css';

const CardsContextProvider = createContext();

export const CardsContext = ({ children }) => {
    return (
        <CardsContextProvider.Provider value={cardsData}>
            <div className={styles.formContainer}>
                <form type="search" >
                    <input className={styles.filter1} type="search" name="search by title" id="search-title" />
                    <input className={styles.filter2} type="search" name="search by location" id="search-location" />
                    <div className={styles.checkboxSearch}>
                        <input type="checkbox" name="full-time-part-time" id="checkbox search" />
                        <span></span>
                        <label htmlFor="fulltime"><strong>Full Time Only</strong></label>
                        <button>Search</button>
                    </div>
                </form>
            </div>
            {children}
        </CardsContextProvider.Provider>
    );
}

export function useCards() {
    return useContext(CardsContextProvider);
};