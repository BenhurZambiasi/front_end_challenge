import React from 'react';
import { TProduct } from 'src/@types/products';
import { ProductCard } from 'src/components/ProductCard';
import styles from './ContainerCards.module.scss';

interface IProps {
  filterProducts: TProduct[];
}

export const ContainerCardsProducts: React.FC<IProps> = ({ filterProducts }) => (
  <div className={styles.container_cards}>
    {filterProducts &&
      filterProducts.map((product, index) => <ProductCard key={product.id} product={product} />)}
  </div>
);
