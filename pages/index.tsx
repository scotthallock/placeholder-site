import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
// import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>scotthallock - placeholder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <header>
          <h1>Coming soon</h1>
          <div style={{position: "relative", height: "200px"}}>
            <Image
              src="/bongo-cat-transparent.gif"
              alt="Bongo cat"
              fill={true}
              style={{objectFit: "contain"}}
            />
          </div>
        </header>
      </main>
    </>
  );
}
