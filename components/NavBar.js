import Link from "next/link";

export default function NavBar() {
  return (
    <div className="container-fluid px-0 position-fixed bring-to-front">
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container">
          <Link href="/">
            <a className="logo navbar-brand">PRO-WASH</a>
          </Link>
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
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              {/* About */}
              <li className="nav-item">
                <Link href="/about">
                  <a className="nav-link active" aria-current="page">
                    About
                  </a>
                </Link>
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
                <ul className="dropdown-menu">
                  <li>
                    <Link href="/services" passHref>
                      <a
                        className="dropdown-item"
                        aria-labelledby="navbarDropdown"
                      >
                        <b>About</b>
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#surface-cleaning">
                      <a className="dropdown-item">Surface Cleaning</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#graffiti-removal">
                      <a className="dropdown-item">Graffiti Removal</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#interlock-cleaning">
                      <a className="dropdown-item">Interlock Cleaning</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#interlock-relaying">
                      <a className="dropdown-item">Interlock Relaying</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#polymeric-sand-reinstatement">
                      <a className="dropdown-item">
                        Polymeric Sand Reinstatement
                      </a>
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Portfolio */}
              <li className="nav-item">
                <Link href="/portfolio">
                  <a className="nav-link active">Portfolio</a>
                </Link>
              </li>
              {/* Contact Us */}
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link active">Contact Us</a>
                </Link>
              </li>

              {/* Request a Quote */}
              <li className="nav-item">
                <Link href="/contact">
                  <a className="nav-link active">Get a Quote</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
