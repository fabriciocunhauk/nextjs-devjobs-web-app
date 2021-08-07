import React from 'react';

import styles from '../styles/components/SearchFilter.module.css';


const SearchbarFilter = () => {
    return (
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
    );
};

export default SearchbarFilter;
