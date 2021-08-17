import cardsData from '../../data.json';
import { createContext, useContext, useEffect, useState } from 'react';
import SearchImage from '../../public/assets/desktop/icon-search.svg';
import SearchLocationImage from '../../public/assets/desktop/icon-location.svg';
import styles from '../styles/components/SearchFilter.module.css';

const CardsContextProvider = createContext();

export const CardsContext = ({ children }) => {
    const [company, setCompany] = useState("");
    const [location, setLocation] = useState("");
    const [fullTime, setFullTime] = useState(false);
    const [filteredData, setFilteredData] = useState([]);

    const handleFilter1 = (e) => {
        setCompany(e);
    }

    const handleFilter2 = (e) => {
        setLocation(e);
    }

    const handleFilter3 = () => {
        if (!fullTime) {
            setFullTime(true);
        } else {
            setFullTime(false);
        }
    }

    const handleFilter = () => {
        let data = cardsData;

        if (company !== "") {
            data = cardsData.filter(card => card.company.toLowerCase() === company);
            return setFilteredData(data)
        }

        return setFilteredData(data);
    }

    console.log(filteredData);

    useEffect(() => {
        handleFilter();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <CardsContextProvider.Provider value={{ filteredData }}>
            <div className={styles.formContainer}>
                <form
                    onSubmit={e => handleSubmit(e)}
                >
                    <SearchImage className={styles.filterImage} />
                    <input
                        className={styles.filter1}
                        type="text"
                        name="search by title"
                        placeholder="Filter by title, companies, expertise..."
                        onChange={(e) => handleFilter1(e.target.value)}
                    />
                    <SearchLocationImage className={styles.filterImage} />
                    <input
                        className={styles.filter2}
                        type="text"
                        name="search by location"
                        placeholder="Filter by location..."

                        onChange={(e) => handleFilter2(e.target.value)}
                    />
                    <div className={styles.checkboxSearch}>
                        <input
                            type="checkbox"
                            name="full-time-part-time"
                            onClick={handleFilter3}
                        />
                        <span></span>
                        <label htmlFor="fulltime"><strong>Full Time Only</strong></label>
                        <button onClick={handleFilter}>Search</button>
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