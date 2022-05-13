import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";
import Image from "next/image";

export async function getStaticProps() {
  return {
    props: {
      imgIndices: [1, 2, 3, 4, 5, 6, 7, 8], // will be passed to the page component as props
    },
  };
}

export default function Services({ imgIndices }) {
  return (
    <div>
      <Head>
        <title>PRO-WASH | Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="PRO-WASH Ottawa pressure washing service"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <div className="pt-5">
        <div className="pt-5"></div>
      </div>

      <div className="container py-5">
        <h1 className="subtitle">Gallery</h1>
        <div className="d-flex flex-wrap justify-content-center pt-5">
          {imgIndices.map((i) => (
            <div
              key={i}
              className="gallery-img-container position-relative col-12 col-md-4 col-lg-3 mt-2"
            >
              <Image
                src={`/images/img (${i}).jpg`}
                layout="fill"
                loading="eager"
                objectFit="contain"
                onClick={(e) => {
                  /*console.log(e.target)*/
                }}
              ></Image>
            </div>
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
