import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "styles/Home.module.scss";
import { ContainerProducts } from "src/components/ContainerProducts";
import { ContainerShoppingCart } from "src/components/ContainerShoppingCart";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <ContainerProducts />
        <ContainerShoppingCart />
      </main>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/staticData`);
  return {
    props: {
      products: JSON.parse(data),
    },
  };
}
