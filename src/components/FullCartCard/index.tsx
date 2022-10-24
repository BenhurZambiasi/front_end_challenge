import Image from 'next/image';
import React from 'react';
import { parsePrice } from 'src/utils/parsePrice';
import styles from './FullCartCard.module.scss';

interface IProps {
  index: number;
  image: string;
  name: string;
  price: number;
  handleDeleteproduct: (ind: number) => void;
}

export const FullCartCard: React.FC<IProps> = ({
  image,
  index,
  name,
  price,
  handleDeleteproduct,
}) => (
  <div key={index} className={styles.content_product}>
    <div className={styles.delete_product}>
      <span onClick={() => handleDeleteproduct(index)}>X</span>
    </div>
    <div className={styles.img_product}>
      <Image src={`/${image}`} width={42} height={42} alt="Imagem carrinho de compras" />
    </div>
    <div className={styles.info_product}>
      <span>{name}</span>
      <span className={styles.info_product_price}>{parsePrice(price)}</span>
    </div>
  </div>
);
