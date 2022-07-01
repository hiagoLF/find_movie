import type { NextPage } from "next";
import Head from "next/head";
import { FilterButtons } from "../components/FilterButtons";
import { Header } from "../components/Header";
import { LoadMoreButton } from "../components/LoadMoreButton";
import { MoviesList } from "../components/MoviesList";
import styles from "../styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Encontre um Filme</title>
        <meta
          name="description"
          content="Encontre o Próximo filme que você vai assistir"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <FilterButtons />

      <MoviesList />

      <LoadMoreButton />

      <main className={styles.main}></main>
    </div>
  );
};

export default Home;
