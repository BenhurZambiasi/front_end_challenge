import axios from 'axios';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from 'styles/Home.module.scss';
import { ContainerProducts } from 'src/components/Containers/ContainerProducts';
import { ContainerShoppingCart } from 'src/components/Containers/ContainerShoppingCart';
import { TProduct } from 'src/@types/products';

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

export async function getStaticProps() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/staticData`);
  return {
    props: {
      products: JSON.parse(data),
    },
  };
}
