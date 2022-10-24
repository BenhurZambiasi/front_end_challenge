import Image from 'next/image';
import React from 'react';
import styles from './Empty.module.scss';

export const EmptyCart: React.FC = () => (
  <div className={styles.conatiner_empty_cart}>
    <div className={styles.content_empty_cart}>
      <Image src="/cart-icon.svg" width={72} height={90} alt="Imagem carrinho de compras" />
      <span>
        Até o momento,
        <br /> o seu carrinho está vazio
      </span>
    </div>
  </div>
);
