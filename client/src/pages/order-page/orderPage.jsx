import React from "react";
import {useNavigate} from 'react-router-dom';
import ContentWrapper from "../../components/content-wrapper/content-wrapper";
import Button from "../../components/button/button";
import styles from './styles.module.css';

const OrderPage = () => {
  const navigate = useNavigate();
  return (
    <ContentWrapper className={styles.order}>
      <h1>Ваш заказ будет в ближайшее время!</h1>
      <Button
        containerClassName={styles.button}
        onClick={() => navigate('/')}
      >
        На главную
      </Button>
    </ContentWrapper>
  )
};

export default OrderPage;