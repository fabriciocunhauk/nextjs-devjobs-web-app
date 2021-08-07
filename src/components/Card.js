import React from 'react';
// import CompanyLogo from '../assets/logos/scoot.svg';

import styles from '../styles/components/Card.module.css';

const Card = ({ logo, bgColor, postedAt, contract, position, company, location }) => {
    return (
        <div>
            <div style={{ background: bgColor }} className={styles.logoContainer}>
                <img src={logo} alt="company logo" />
            </div>
            <div className={styles.cardContainer}>
                <p>{postedAt} • {contract}</p>
                <h4>{position}</h4>
                <p>{company}</p>
                <p>{location}</p>
            </div>
        </div>
    );
};

export default Card;
