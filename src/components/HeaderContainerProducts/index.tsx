import Image from 'next/image';
import React from 'react';
import { OPTIONS } from 'src/constants';
import styles from './Header.module.scss';

type Props = {
  sortProducts: number;
  setSortProducts: React.Dispatch<React.SetStateAction<number>>;
  showCart: () => void;
};

export const HeaderContainerProducts: React.FC<Props> = ({
  setSortProducts,
  sortProducts,
  showCart,
}) => (
  <div className={styles.container}>
    <span>Games</span>
    <Image
      className={styles.img_cart_mbl}
      src="/cart-icon.svg"
      width={25}
      height={25}
      alt="Imagem do carrinho de compras"
      onClick={showCart}
    />
    <select
      value={sortProducts}
      onChange={({ target: { value } }) => setSortProducts(Number(value))}
    >
      {OPTIONS.map((op) => (
        <option key={op.value} value={op.value}>
          {op.label}
        </option>
      ))}
    </select>
  </div>
);
