import Head from "next/head";
import Image from "next/image";
import NavBar from "./components/NavBar";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const inlineStyles = {
  p: "col-md-6 mt-2",
};

export default function Home() {
  return (
    <div>
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
      <Hero></Hero>

      <section className="my-5">
        {/* About Us */}
        <div className="container">
          <div className="row col-8">
            <h1 className="subtitle">About Us</h1>
            <p>
              Pro-Wash Ottawa provides top-notch exterior surface cleaning
              services. We use state of the art equipment and the highest
              quality materials to leave our clients with the best possible
              results. We love seeing a dirty outdoor space restored to a
              beautiful, clean and usable space again. Find out how we can help
              create that space again!
            </p>
            <button type="button" className="col-2 btn m-1">
              Contact Us
            </button>
          </div>
        </div>

        {/*Services*/}
        <div className="container">
          <div className="row col-8">
            <h1 className="subtitle">Services</h1>
            <p>
              We offer Pressure washing services such as surface cleaning and
              graffiti removal, as well as interlock restoration services, such
              as polymeric sand reinstatement, interlock relaying, and interlock
              cleaning. To learn more, view our services page.
            </p>
          </div>
        </div>
        <img src="/img1.jpg" className="img-fluid" alt="..." />
        <img src="/img2.jpg" className="img-fluid" alt="..." />

        {/* Our Principles*/}
        <div className="container">
          <h1 className="subtitle">Our Principles</h1>
          <div className="row flex-shrink-2">
            <p className={inlineStyles.p}>
              At PRO-WASH we serve each client with the same set of principles
              to ensure a quality customer experience from start to finish.
            </p>
            <div className="row col-sm-8 col-lg-12 gx-4 flex-shrink-1">
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div className="card" style={{ width: "18rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Card title</h5>
                  <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <h1 className="subtitle">How it Works</h1>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-1">IMG</div>
          </div>
        </div>
        <div className="container">
          <h1 className="subtitle">Testimonials</h1>
          <div className="row">
            <div className="col-md-8 display-6">
              <p>Graphical display</p>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Want to learn more?</h2>
          <div className="row">
            <div className="col-md-8">
              <button type="button" className="col btn m-1">
                Contact Us
              </button>
              <button type="button" className="col btn m-1">
                See our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/*<div className="video-container">
        <iframe src="https://www.youtube.com/embed/Yj2iELI6OeI? &autoplay=1&mute=1"></iframe>
      </div>*/}
      <Footer></Footer>
    </div>
  );
}
