import type { NextPage } from 'next';
import { useState } from 'react';
import { TProduct } from 'src/@types/products';
import { ContainerProducts } from 'src/components/Containers/ContainerProducts';
import { ContainerShoppingCart } from 'src/components/Containers/ContainerShoppingCart';
import Slide from 'src/components/Slide';
import { getProducts } from 'src/services/getProducts';
import styles from 'styles/Home.module.scss';

interface IProps {
  products: TProduct[];
}

const Home: NextPage<IProps> = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState<TProduct[]>([]);

  const [open, setOpen] = useState<boolean>(false);
  const showCart = () => {
    setOpen(!open);
  };

  const handleAddToCart = (product: TProduct) => {
    const aux: TProduct[] = [...selectedProducts];
    aux.push(product);
    setSelectedProducts(aux);
  };

  const handleDeleteproduct = (ind: number) => {
    const aux: TProduct[] = [...selectedProducts];
    aux.splice(ind, 1);
    setSelectedProducts(aux);
  };

  return (
    <div className={styles.container}>
      {open && (
        <Slide selectedProducts={selectedProducts} handleDeleteproduct={handleDeleteproduct} />
      )}
      <main className={styles.main}>
        <ContainerProducts
          products={products}
          handleAddToCart={handleAddToCart}
          showCart={showCart}
        />
        <div className={styles.container_shop_cart}>
          <ContainerShoppingCart
            selectedProducts={selectedProducts}
            handleDeleteproduct={handleDeleteproduct}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps() {
  const data = await getProducts();
  return {
    props: { products: data },
  };
}
