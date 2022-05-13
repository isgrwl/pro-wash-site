import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Services() {
  return (
    <div>
      <Head>
        <title>PRO-WASH | About</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="PRO-WASH Ottawa pressure washing service"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      {/* About Us */}

      <div className="container pt-5">
        <div className="pt-5 col-md-8">
          <h1 className="subtitle">Who Are We?</h1>
          <p className="main-text">
            Pro-Wash provides top-notch exterior surface cleaning services in
            the Ottawa area. We use state of the art equipment and the highest
            quality materials to leave our clients with the best possible
            results. We love seeing a dirty outdoor space restored to a
            beautiful, clean and usable space again.
          </p>
        </div>
        {/* Our Principles*/}
        <div className="row col-8-md mt-5">
          <h1 className="subtitle">Our Principles</h1>
          <p className="main-text">
            At PRO-WASH we serve each client with the same set of principles to
            ensure a quality customer experience from start to finish.
          </p>
        </div>
        {/**CARDS */}
        <div className="row col-sm-8 col-lg-12 gap-1 justify-content-center w-100 m-md-5">
          <div
            id="c-card"
            className="card d-flex flex-column align-items-center text-center"
            style={{ width: "15em" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-checkbox"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="9 11 12 14 20 6" />
              <path d="M20 12v6a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h9" />
            </svg>
            <div className="card-body">
              <h5 className="card-title">Provide Great Customer Service</h5>
              <p className="card-text"></p>
            </div>
          </div>
          <div
            id="c-card"
            className="card d-flex flex-column align-items-center text-center"
            style={{ width: "15em" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-backhoe"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2c3e50"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="4" cy="17" r="2" />
              <circle cx="13" cy="17" r="2" />
              <line x1="13" y1="19" x2="4" y2="19" />
              <line x1="4" y1="15" x2="13" y2="15" />
              <path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
              <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
              <path d="M21.12 9.88l-3.12 -4.88l-5 5" />
              <path d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z" />
            </svg>
            <div id="c-card" className="card-body">
              <h5 className="card-title">Take Pride in our Work</h5>
              <p className="card-text"></p>
            </div>
          </div>
          <div
            id="c-card"
            className="card d-flex flex-column align-items-center text-center"
            style={{ width: "15em" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-sun"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <circle cx="12" cy="12" r="4" />
              <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
            </svg>
            <div className="card-body">
              <h5 className="card-title">Make a Difference</h5>
              <p className="card-text"></p>
            </div>
          </div>
          <div
            id="c-card"
            className="card d-flex flex-column align-items-center text-center"
            style={{ width: "15em" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-recycle"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1" />
              <path
                d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"
                transform="rotate(120 12 13)"
              />
              <path
                d="M12 17l-2 2l2 2m-2 -2h9a2 2 0 0 0 1.75 -2.75l-.55 -1"
                transform="rotate(240 12 13)"
              />
            </svg>
            <div className="card-body ">
              <h5 className="card-title">Use Eco-Friendly Products</h5>
              <p className="card-text"></p>
            </div>
          </div>
        </div>
      </div>
      {/**How it works */}
      <div className="container">
        <h1 className="subtitle">How it Works</h1>
        <ul className="list-group d-inline-block my-3">
          <li className="list-group-item">
            <h3>Step 1: Initial Inquiry</h3>
            <p className="main-text">
              We gain knowledge of what you like to have done.
            </p>
          </li>
          <li className="list-group-item">
            <h3>Step 2: Project Information Review</h3>
            <p className="main-text"> All project details are reviewed.</p>
          </li>
          <li className="list-group-item">
            <h3>Step 3: Quote Proposal</h3>
            <p className="main-text">
              Our proposal is sent to you with a detailed scope of work.
            </p>
          </li>
          <li className="list-group-item">
            <h3>Step 4: Client Approval</h3>
            <p className="main-text">
              You would like to have the project complete. Contract is signed by
              both parties.
            </p>
          </li>
          <li className="list-group-item">
            <h3>Step 5: Scheduling</h3>
            <p className="main-text">
              Book a time that works for both parties.
            </p>
          </li>
          <li className="list-group-item">
            <h3>Complete Project</h3>
            <p className="main-text">
              Project is completed and ready for you to enjoy!
            </p>
          </li>
        </ul>
      </div>
      <Footer></Footer>
    </div>
  );
}
