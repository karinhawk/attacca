import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import googleIcon from "../public/assets/google.png"
import { withPublic } from "../config/hooks/route.js";

function Home({auth}) {
  const { loginWithGoogle } = auth;



  return (
    <div className={styles.container}>
      <Head>
        <title>Attacca</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/attacca.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Attacca
        </h1>
        <h2 className={styles.tagline}>Play through Music</h2>
        <button className={styles.button} onClick={loginWithGoogle}>
          <Image className={styles.google} src={googleIcon} height={15}/>
          Log in with Google</button>
      </main>
    </div>
  )
}

export default withPublic(Home);