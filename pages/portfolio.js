import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Services(pageProps) {
  return (
    <div>
      <Head>
        <title>PRO-WASH | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="PRO-WASH Ottawa pressure washing service"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <Footer></Footer>
    </div>
  );
}
