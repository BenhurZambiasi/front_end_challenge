import React from 'react';
import { parsePrice } from 'src/utils/parsePrice';
import styles from './FullCartPayment.module.scss';

interface IProps {
  subTotal: number;
  frete: number;
}

export const FullCartPayment: React.FC<IProps> = ({ subTotal, frete }) => (
  <div className={styles.info_payment}>
    <span>
      subtotal<b>{parsePrice(subTotal)}</b>
    </span>
    <span>
      frete<b>{parsePrice(frete)}</b>
    </span>
    <span>
      total<b>{parsePrice(subTotal + frete)}</b>
    </span>
    <button>finalizar compra</button>
  </div>
);
