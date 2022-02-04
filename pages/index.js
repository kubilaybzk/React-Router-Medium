import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Router Hook Ana Sayfamız</h1>

        <p className={styles.description}>
          Şuan Aktif olan Path :
          <code className={styles.code}>localost:3000{router.asPath}</code>
        </p>

        <div className={styles.grid}>
          <div>
            <Link href="/pictures" className={styles.card}>
              <h2>RESİMLER İÇİN TIKLAYIN 1 &rarr;</h2>
            </Link>

            <Link href="/text" className={styles.card}>
              <h2>TEXTLER İÇİN TIKLAYIN 2 &rarr;</h2>
            </Link>
            <Link href="/post" className={styles.card}>
              <h2>ROUTER İŞLEMLERİ İÇİN  TIKLAYIN &rarr;</h2>
            </Link>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

/*
const Link = ({ children, href }) => {
  const router = useRouter()
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault()
        // typically you want to use `next/link` for this usecase
        // but this example shows how you can also access the router
        // and use it manually
        router.push(href)
      }}
    >
      {children}


    </a>
  )
}
*/
