export default function NavBar() {
  return (
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            PRO-WASH
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          {/* Nav buttons */}
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Home button */}
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              {/* Home button */}
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Examples
                </a>
              </li>
              {/* Services ---------------------------------------------------------------------*/}
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a class="dropdown-item" href="#">
                      Surface Cleaning
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Graffiti Removal
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      Interlock Restoration
                    </a>
                  </li>
                  {/*<li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>*/}
                </ul>
              </li>
              {/*--------------------------------------------------------------------------------------*/}
              {/*
              <li class="nav-item">
                <a class="nav-link disabled">343-999-3418</a>
              </li>
              */}
              {/* Contact Us */}
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Contact Us
                </a>
              </li>
              {/* Request a Quote */}
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Request a Quote
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
