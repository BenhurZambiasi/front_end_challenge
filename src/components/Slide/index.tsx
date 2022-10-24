import React from 'react';
import { TProduct } from 'src/@types/products';
import { ContainerShoppingCart } from '../Containers/ContainerShoppingCart';
import styles from './Slide.module.scss';

interface IProps {
  selectedProducts: TProduct[];
  handleDeleteproduct: (ind: number) => void;
}
const Slide: React.FC<IProps> = ({ selectedProducts, handleDeleteproduct }) => (
  <div className={styles.container_slide}>
    <ContainerShoppingCart
      selectedProducts={selectedProducts}
      handleDeleteproduct={handleDeleteproduct}
    />
  </div>
);

export default Slide;
