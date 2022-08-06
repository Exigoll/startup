import Head from "next/head";
import styles from "../styles/Home.module.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>В|S Quest</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main>
        <section className={styles.home}>
          <button className={styles.btn}>
            <Link href="/game">
              <a>Играть</a>
            </Link>
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
