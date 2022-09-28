import React from "react";
import ContentWrapper from "../content-wrapper/content-wrapper";
import styles from './styles.module.css';
import WaveImage from './wave.svg';

const Header = () => {
  return (
    <div className={styles.header}>
      <ContentWrapper className={styles.content}>
        <h1 className={styles.title}>{`Путешествуйте с\n комфортом`}</h1>
        <p
          className={styles.description}>{`С нашей компанией вы забудете обо всем, кроме\n высокого уровня путешествий`}</p>
      </ContentWrapper>
      <img src={WaveImage} alt='' className={styles.wave}/>
    </div>
  )
};

export default Header;