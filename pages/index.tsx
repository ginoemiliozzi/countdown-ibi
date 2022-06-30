import type { InferGetServerSidePropsType, NextPage } from "next";

import Counter from "../components/Counter";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Ibiza Rumiante</title>
        <meta name="description" content="Ibiza Rumiante 2022" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Counter />
      </main>
    </div>
  );
};

export default Home;
