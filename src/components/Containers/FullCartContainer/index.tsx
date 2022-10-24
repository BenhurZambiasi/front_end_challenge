import React, { useMemo } from 'react';
import { TProduct } from 'src/@types/products';
import { FullCartCard } from 'src/components/FullCartCard';
import { FullCartPayment } from 'src/components/FullCartPayment';
import styles from './FullCart.module.scss';

interface IProps {
  selectedProducts: TProduct[];
  handleDeleteproduct: (ind: number) => void;
}
export const FullCartContainer: React.FC<IProps> = ({ selectedProducts, handleDeleteproduct }) => {
  const subTotal = useMemo(
    () => selectedProducts.reduce((acc, current) => acc + current.price, 0),
    [selectedProducts]
  );

  const frete = useMemo(() => {
    const qtd_product = selectedProducts.length;
    if (subTotal <= 250) {
      return qtd_product * 10;
    } else {
      return 0;
    }
  }, [selectedProducts]);

  return (
    <div className={styles.container_full_cart}>
      {selectedProducts.map((product, index) => (
        <FullCartCard
          handleDeleteproduct={handleDeleteproduct}
          key={product.id}
          image={product.image}
          index={index}
          name={product.name}
          price={product.price}
        />
      ))}
      <FullCartPayment frete={frete} subTotal={subTotal} />
    </div>
  );
};
