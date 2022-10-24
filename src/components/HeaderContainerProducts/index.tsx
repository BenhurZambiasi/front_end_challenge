import Image from 'next/image';
import React, { useState } from 'react';
import { OPTIONS } from 'src/constants';
import styles from './Header.module.scss';

type Props = {
  sortProducts: number;
  setSortProducts: React.Dispatch<React.SetStateAction<number>>;
};

export const HeaderContainerProducts: React.FC<Props> = ({ setSortProducts, sortProducts }) => {
  const [open, setOpen] = useState<boolean>(false);
  const showCart = () => {
    setOpen(!open);
  };
  return (
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
};
