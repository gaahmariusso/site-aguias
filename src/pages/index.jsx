import Head from '../components/Head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Site Aguias do Bosque</title>
        <meta name="description" content="Site de time de futebol de varzea" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header title="Águias do Bosque Futebol & Cerveja" />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the site
        </h1>
      </main>

      <Footer />
    </div >
  )
}
