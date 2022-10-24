import type { NextPage } from 'next';
import { useState } from 'react';
import { TProduct } from 'src/@types/products';
import { ContainerProducts } from 'src/components/Containers/ContainerProducts';
import { ContainerShoppingCart } from 'src/components/Containers/ContainerShoppingCart';
import { getProducts } from 'src/services/getProducts';
import styles from 'styles/Home.module.scss';

interface IProps {
  products: TProduct[];
}

const Home: NextPage<IProps> = ({ products }) => {
  const [selectedProducts, setSelectedProducts] = useState<TProduct[]>([]);

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
      <main className={styles.main}>
        <ContainerProducts products={products} handleAddToCart={handleAddToCart} />
        <ContainerShoppingCart
          selectedProducts={selectedProducts}
          handleDeleteproduct={handleDeleteproduct}
        />
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
