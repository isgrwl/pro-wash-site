import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Link from "next/link";

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
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <Hero></Hero>

      {/* About Us */}
      <section className="my-md-0 overflow-hidden">
        <div className="row">
          <div className="col m-md-5 p-md-5 p-5">
            <h1 className="subtitle">About Us</h1>
            <p className="main-text">
              Pro-Wash Ottawa provides top-notch exterior surface cleaning
              services. We use state of the art equipment and the highest
              quality materials to leave our clients with the best possible
              results. We love seeing a dirty outdoor space restored to a
              beautiful, clean and usable space again. Find out how we can help
              create that space again!
            </p>
            <Link href="/contact">
              <a>
                <button type="button" id="c-btn" className="col-2 btn m-1">
                  Contact Us
                </button>
              </a>
            </Link>
          </div>
          <div className="col position-relative d-none d-md-inline">
            <Image
              src="/images/img (9).jpg"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
        </div>
      </section>

      {/*Services*/}
      <section className="light-blue-bg">
        <div className="row w-100 my-md-0">
          <div className="col position-relative d-none d-md-inline">
            <Image
              src="/images/img (5).jpg"
              layout="fill"
              objectFit="cover"
            ></Image>
          </div>
          <div className="col m-md-5 p-md-5 p-5">
            <h1 className="subtitle-light">Services</h1>
            <p className="main-text">
              We offer Pressure washing services such as surface cleaning and
              graffiti removal, as well as interlock restoration services, such
              as polymeric sand reinstatement, interlock relaying, and interlock
              cleaning.
            </p>
            <Link href="/services">
              <a>
                <button
                  type="button"
                  id="c-btn"
                  className="col-2 btn c-btn  m-1"
                >
                  Learn More
                </button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/**Testimonials */}
      <section>
        <div className="container my-5 testimonials-inner">
          <h1 className="subtitle text-center">What do our Clients Think?</h1>
          <div className="row justify-content-center my-5 testimonial">
            <div className="col-md-8">
              <div
                id="carouselExampleIndicators"
                className="carousel slide text-center pt-5"
                data-bs-ride="carousel"
                data-bs-interval="5000"
              >
                <div className="carousel-inner h-100">
                  <div className="carousel-item active">
                    <p>
                      &quot;I used to call other companies but for the last few
                      years, I have only called PRO-WASH. The team does great
                      work.&quot;
                    </p>
                    <h4>P. Joyce</h4>
                  </div>
                  <div className="carousel-item">
                    <p>
                      &quot;PRO-WASH did fast work. The job was done well and
                      the price was good. I am happy.&quot;
                    </p>
                    <h4>A. Chen</h4>
                  </div>
                  <div className="carousel-item">
                    <p>
                      &quot;Arrived on the promised day and finished the work
                      before the deadline, without disturbing our work.&quot;
                    </p>
                    <h4>M. Bonnett</h4>
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
      </section>
      {/*Want to learn more?*/}
      <section className="learn-more-background">
        <div className="d-flex flex-column h-100 justify-content-center">
          <div className="container d-flex justify-content-center">
            <div className="learn-more-inner">
              <h1 className="subtitle-2 text-center">Want to learn more?</h1>
              <div className="row justify-content-center text-center">
                <div className="col-md-8 my-3">
                  <Link href="/contact">
                    <a>
                      <button
                        type="button"
                        id="c-btn"
                        className="col btn c-btn m-1"
                      >
                        Contact Us
                      </button>
                    </a>
                  </Link>
                  <Link href="/portfolio">
                    <a>
                      <button
                        type="button"
                        id="c-btn"
                        className="col btn c-btn m-1"
                      >
                        See our Work
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
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
