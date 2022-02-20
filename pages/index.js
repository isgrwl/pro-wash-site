import Head from "next/head";
import Image from "next/image";
import NavBar from "./components/NavBar";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>PRO-WASH | Home</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="PRO-WASH Ottawa pressure washing service"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <div class="video-container">
        <iframe src="https://www.youtube.com/embed/Yj2iELI6OeI? &autoplay=1&mute=1"></iframe>
      </div>
      <Footer></Footer>
    </div>
  );
}
