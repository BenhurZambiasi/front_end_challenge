import React, { useMemo, useState } from 'react';
import { TProduct } from 'src/@types/products';
import { HeaderContainerProducts } from 'src/components/HeaderContainerProducts';
import { ContainerCardsProducts } from '../ContainerCardsProducts';
import styles from './Products.module.scss';

interface IProps {
  products: TProduct[];
  handleAddToCart: (product: TProduct) => void;
  showCart: () => void;
}

export const ContainerProducts: React.FC<IProps> = ({ products, handleAddToCart, showCart }) => {
  const [sortProducts, setSortProducts] = useState<number>(1);

  const filterProducts = useMemo(() => {
    switch (sortProducts) {
      case 2:
        return products.sort((a: TProduct, b: TProduct) => (a.price > b.price ? 1 : -1));
      case 3:
        return products.sort((a: TProduct, b: TProduct) => (a.price < b.price ? 1 : -1));
      case 4:
        return products.sort((a: TProduct, b: TProduct) => (a.name > b.name ? 1 : -1));
      default:
        return products.sort((a: TProduct, b: TProduct) => (a.score < b.score ? 1 : -1));
    }
  }, [sortProducts]);

  return (
    <div className={styles.container}>
      <HeaderContainerProducts
        sortProducts={sortProducts}
        setSortProducts={setSortProducts}
        showCart={showCart}
      />
      <ContainerCardsProducts filterProducts={filterProducts} handleAddToCart={handleAddToCart} />
    </div>
  );
};
