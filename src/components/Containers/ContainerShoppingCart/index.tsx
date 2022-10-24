import React from 'react';
import { TProduct } from 'src/@types/products';
import { EmptyCart } from 'src/components/EmptyCart';
import { HeaderCart } from 'src/components/HeaderCart';
import { FullCartContainer } from '../FullCartContainer';

import styles from './ShoppingCart.module.scss';

interface IProps {
  selectedProducts: TProduct[];
  handleDeleteproduct: (ind: number) => void;
}

export const ContainerShoppingCart: React.FC<IProps> = ({
  selectedProducts,
  handleDeleteproduct,
}) => {
  const emptyCar = selectedProducts.length == 0;

  const itens = !emptyCar && `(${selectedProducts.length} itens)`;

  return (
    <div className={styles.container_shop_cart}>
      <div className={styles.container_cart}>
        <HeaderCart itens={itens} />

        {!emptyCar ? (
          <FullCartContainer
            handleDeleteproduct={handleDeleteproduct}
            selectedProducts={selectedProducts}
          />
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  );
};
