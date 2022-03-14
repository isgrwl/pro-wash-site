export default function NavBar() {
  return (
    <div className="container-fluid px-0 position-fixed barnav">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <a className="logo navbar-brand" href="/">
            PRO-WASH
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav buttons */}
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav align-item">
              {/* Home button */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              {/* About */}
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="/about"
                >
                  About
                </a>
              </li>
              {/* Services ---------------------------------------------------------------------*/}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="services">
                      <b>About</b>
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="services#surface-cleaning"
                    >
                      Surface Cleaning
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="services#graffiti-removal"
                    >
                      Graffiti Removal
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="services#interlock-cleaning"
                    >
                      Interlock Cleaning
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="services#interlock-relaying"
                    >
                      Interlock Relaying
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="services#polymeric-sand-reinstatement"
                    >
                      Polymeric Sand Reinstatement
                    </a>
                  </li>
                </ul>
              </li>
              {/* Porfolio 
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="portfolio">
                  Portfolio
                </a>
              </li>
              */}
              {/* Contact Us */}
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="contact"
                >
                  Contact Us
                </a>
              </li>

              {/* Request a Quote */}
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href="contact"
                >
                  Get a Quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
