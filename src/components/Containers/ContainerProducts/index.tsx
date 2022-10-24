import React, { useState } from 'react';
import { TProduct } from 'src/@types/products';
import { HeaderContainerProducts } from 'src/components/HeaderContainerProducts';
import styles from './Products.module.scss';

interface IProps {
  products: TProduct[];
}

export const ContainerProducts: React.FC<IProps> = ({ products }) => {
  const [sortProducts, setSortProducts] = useState<number>(1);

  return (
    <div className={styles.container}>
      <HeaderContainerProducts sortProducts={sortProducts} setSortProducts={setSortProducts} />
    </div>
  );
};
