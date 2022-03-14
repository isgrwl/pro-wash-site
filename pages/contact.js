import NavBar from "./components/NavBar";
import Head from "next/head";
import Footer from "./components/Footer";

export default function Services() {
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
      <div className="container pt-5">
        <div className="row">
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
            </div>
          </div>
          <div className="col pt-5">
            <form className="my-5">
              <div class="mb-3">
                <label for="customerNameInput" class="form-label">
                  Name*
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="customerNameInput"
                />
              </div>
              <div class="mb-3">
                <label for="customerEmailInput" class="form-label">
                  Email Address*
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="customerEmailInput"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="customerPhoneInput" class="form-label">
                  Phone
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="customerPhoneInput"
                />
              </div>
              <div class="mb-3">
                <label for="customerBestTimeInput" class="form-label">
                  Best time to call
                </label>
                <input
                  type="datetime-local"
                  class="form-control"
                  id="customerBestTimeInput"
                />
              </div>
              <div class="mb-3">
                <label for="customerAddressInput" class="form-label">
                  Address
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="customerAddressInput"
                />
              </div>
              <div class="form-group mb-3">
                <label for="customerServiceInput">Desired Service</label>
                <select class="form-control" id="customerServiceInput">
                  <option>Surface Cleaning</option>
                  <option>Graffiti Removal</option>
                  <option>Interlock Cleaning</option>
                  <option>Interlock Relaying</option>
                  <option>Polymeric Sand Reinstatement</option>
                </select>
              </div>
              <div class="form-group mb-3">
                <label for="customerProjectDetailsInput">
                  Project Information
                </label>
                <textarea
                  class="form-control"
                  id="customerProjectDetailsInput"
                  rows="3"
                ></textarea>
              </div>
              <div class="form-group mb-3">
                <label for="customerServiceInput">
                  How did you hear about us?
                </label>
                <select class="form-control" id="customerServiceInput">
                  <option>Social Media</option>
                  <option>Peer</option>
                  <option>Google</option>
                  <option>Other</option>
                </select>
              </div>
              <button type="submit" class="btn btn-primary">
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
