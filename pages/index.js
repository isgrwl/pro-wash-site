import Head from "next/head";
import Image from "next/image";
import NavBar from "./components/NavBar";
import styles from "../styles/Home.module.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

const inlineStyles = {
  p: "",
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
        <div className="container">
          <div className="row">
            <div className="d-flex flex-column col-12 col-lg-6 justify-content-evenly">
              {/* About Us */}

              <div>
                <h1 className="subtitle">About Us</h1>
                <p className="main-text">
                  Pro-Wash Ottawa provides top-notch exterior surface cleaning
                  services. We use state of the art equipment and the highest
                  quality materials to leave our clients with the best possible
                  results. We love seeing a dirty outdoor space restored to a
                  beautiful, clean and usable space again. Find out how we can
                  help create that space again!
                </p>
                <a href="contact">
                  <button type="button" className="col-2 btn m-1">
                    Contact Us
                  </button>
                </a>
              </div>

              {/*Services*/}
              <div className="my-5">
                <div>
                  <h1 className="subtitle ">Services</h1>
                  <p className="main-text">
                    We offer Pressure washing services such as surface cleaning
                    and graffiti removal, as well as interlock restoration
                    services, such as polymeric sand reinstatement, interlock
                    relaying, and interlock cleaning. To learn more, view our
                    services page.
                  </p>
                  <a href="services">
                    <button type="button" className="col-2 btn m-1">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-5 ms-auto h-50">
              <img
                src="/img1.jpg"
                className="img-fluid mb-2 d-none d-lg-block"
                alt="..."
              />
              <img src="/img2.jpg" className="img-fluid" alt="..." />
            </div>
          </div>
        </div>

        {/**Testimonials */}
        <div className="container mt-3">
          <h1 className="subtitle">What Our Clients Say About Us</h1>
          <div className="row justify-content-center my-5 testimonial">
            <div className="col-md-8">
              <div
                id="carouselExampleIndicators"
                className="carousel slide text-center p-4"
                data-bs-ride="carousel"
                data-bs-interval="8000"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <p>
                      "PRO-WASH does perfect work EVERY time. I am a contractor.
                      I used to call other companies but for the last 6 years, I
                      have only called Preptech. The team does GREAT work.”
                    </p>
                    <h4>-P Joyce</h4>
                  </div>
                  <div className="carousel-item">
                    <p>
                      “Preptech did fast work. The job was done well and the
                      price was good. I am happy.”
                    </p>
                    <h4>-Amanda Chen</h4>
                  </div>
                  <div className="carousel-item">
                    <p>
                      “Arrived on the promised day and finished the work before
                      the deadline, without disturbing our work.
                    </p>
                    <h4>-Marc Bonnett</h4>
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <h2>Want to learn more?</h2>
          <div className="row">
            <div className="col-md-8 my-3">
              <a href="contact">
                <button type="button" className="col btn m-1">
                  Contact Us
                </button>
              </a>
              <a href="portfolio">
                <button type="button" className="col btn m-1">
                  See our Work
                </button>
              </a>
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
