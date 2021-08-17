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

    const handleFilter = () => {
        let data = cardsData;

        if (company === "" && location === "" && !fullTime) {
            setFilteredData(cardsData);
        }

        if (company !== "") {
            data = cardsData.filter(card => card.company.toLowerCase() === company);
        }

        if (location !== "") {
            data = cardsData.filter(card => card.location.toLowerCase() === location.toLowerCase());
        }

        if (fullTime) {
            data = cardsData.filter(card => card.contract.toLowerCase() === "full time");
            setFullTime(false);
        }

        return setFilteredData(data);
    }

    console.log(filteredData);

    useEffect(() => {
        handleFilter();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        e.target.reset();
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
                        onChange={(e) => setCompany(e.target.value)}
                    />
                    <SearchLocationImage className={styles.filterImage} />
                    <input
                        className={styles.filter2}
                        type="text"
                        name="search by location"
                        placeholder="Filter by location..."
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <div className={styles.checkboxSearch}>
                        <input
                            type="checkbox"
                            name="full-time-part-time"
                            onChange={(e) => setFullTime(e.target.checked)}
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