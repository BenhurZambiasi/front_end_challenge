import React from 'react';
import styles from './HeaderCart.module.scss';

interface IProps {
  itens: string | false;
}
export const HeaderCart: React.FC<IProps> = ({ itens }) => (
  <div className={styles.header_car}>
    <span>Carrinho</span>
    <span className={styles.qtd_itens}>{itens}</span>
  </div>
);
