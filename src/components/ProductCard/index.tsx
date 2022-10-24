import Image from 'next/image';
import React from 'react';
import { TProduct } from 'src/@types/products';
import { parsePrice } from 'src/utils/parsePrice';
import styles from './ProductCard.module.scss';

interface IProps {
  product: TProduct;
  handleAddToCart: (product: TProduct) => void;
}
export const ProductCard: React.FC<IProps> = ({ product, handleAddToCart }) => (
  <div className={styles.content_cards}>
    <span className={styles.add}>
      <span className={styles.add_car} onClick={() => handleAddToCart(product)}>
        adicionar ao carrinho
      </span>
      <div className={styles.info_card}>
        <span className={styles.description}>{product.name}</span>
        <span className={styles.price}>{parsePrice(product.price)}</span>
      </div>
    </span>
    <div className={styles.img_card}>
      <Image src={`/${product.image}`} alt={product.name} width={180} height={180} />
    </div>
  </div>
);
