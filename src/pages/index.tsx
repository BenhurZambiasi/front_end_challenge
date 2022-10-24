import type { NextPage } from 'next';
import { TProduct } from 'src/@types/products';
import { ContainerProducts } from 'src/components/Containers/ContainerProducts';
import { ContainerShoppingCart } from 'src/components/Containers/ContainerShoppingCart';
import { getProducts } from 'src/services/getProducts';
import styles from 'styles/Home.module.scss';

interface IProps {
  products: TProduct[];
}

const Home: NextPage<IProps> = ({ products }) => (
  <div className={styles.container}>
    <main className={styles.main}>
      <ContainerProducts products={products} />
      <ContainerShoppingCart />
    </main>
  </div>
);

export default Home;

export async function getServerSideProps() {
  const data = await getProducts();
  return {
    props: { products: data },
  };
}
