import NavBar from "../components/NavBar";
import Head from "next/head";
import Footer from "../components/Footer";
import Script from "next/script";

export default function Services() {
  return (
    <div>
      <Head>
        <title>PRO-WASH | Contact</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="PRO-WASH Ottawa pressure washing service"
        />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      <NavBar></NavBar>
      <Script src="/scripts/submitForm.js" />
      <div className="container pt-5">
        <div className="row">
          {/**CONTACT DETAILS */}
          <div className="col pt-5">
            <div className="pt-5">
              <h2 className="logo">Contact PRO-WASH</h2>
              <p>We serve clients in the Ottawa Valley region.</p>
              <p>
                Phone: <a href="tel:613 889 7145">6138897145</a>
              </p>
              <p>
                Email: <a href="mailto: evan@prowash.ca">evan@prowash.ca</a>
              </p>
              <p>Hours:</p>
              <ul>
                <li>Weekdays - 8am : 5pm</li>
                <li>Saturday - 10am : 4pm</li>
                <li>Sunday - closed</li>
              </ul>
              <p>Give us a call, email or fill out the form and we will get back to you as soon as we can.</p>
            </div>
          </div>
          {/**CONTACT FORM */}
          <div className="col pt-5">
            <div id="warning"></div>
            <form className="my-5">
              <div className="mb-3">
                <label htmlFor="customerNameInput" className="form-label">
                  Name*
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerNameInput"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="customerEmailInput" className="form-label">
                  Email Address*
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="customerEmailInput"
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="customerPhoneInput" className="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerPhoneInput"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="customerBestTimeInput" className="form-label">
                  Best time to call
                </label>
                <input
                  type="datetime-local"
                  className="form-control"
                  id="customerBestTimeInput"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="customerAddressInput" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="customerAddressInput"
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="customerServiceInput">Desired Service</label>
                <select className="form-control" id="customerServiceInput">
                  <option>Surface Cleaning</option>
                  <option>Graffiti Removal</option>
                  <option>Interlock Cleaning</option>
                  <option>Interlock Relaying</option>
                  <option>Polymeric Sand Reinstatement</option>
                </select>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="customerProjectDetailsInput">
                  Project Details*
                </label>
                <textarea
                  className="form-control"
                  id="customerProjectDetailsInput"
                  rows="3"
                ></textarea>
              </div>
              <div className="form-group mb-3">
                <label htmlFor="customerServiceInput">
                  How did you hear about us?
                </label>
                <select className="form-control" id="customerServiceInput">
                  <option>Social Media</option>
                  <option>Peer</option>
                  <option>Google</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
