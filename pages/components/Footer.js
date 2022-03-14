export default function Footer() {
  return (
    <>
      {/* Remove the container if you want to extend the Footer to full width. */}
      {/* Footer */}
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#1c2331" }}
      >
        {/* Section: Social media */}

        {/* Section: Social media */}
        {/* Section: Links  */}
        <section className="py-3">
          <div className="container text-center text-md-start mt-5">
            {/* Grid row */}
            <div className="row mt-3">
              {/* Grid column */}
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                {/* Content */}
                <h6 className="text-uppercase fw-bold"><span className="logo">PRO-WASH</span></h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  PRO-WASH™ provides pressure washing services in Ottawa, Ontario.
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Services</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  <a href="services" className="text-white">
                    About Services
                  </a>
                </p>
                <p>
                  <a href="services#surface-cleaning" className="text-white">
                    Surface Cleaning
                  </a>
                </p>
                <p>
                  <a href="services#graffiti-removal" className="text-white">
                    Graffiti Removal
                  </a>
                </p>
                <p>
                  <a href="services#polymeric-sand-reinstatement" className="text-white">
                    Polymeric Sand Reinstatement
                  </a>
                </p>
                <p>
                  <a href="services#interlock-cleaning" className="text-white">
                    Interlock Cleaning
                  </a>
                </p>
                <p>
                  <a href="services#interlock-relaying" className="text-white">
                    Interlock Relaying
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Our Company</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  <a href="about" className="text-white">
                    About Us
                  </a>
                </p>
                <p>
                  <a href="portfolio" className="text-white">
                    Portfolio
                  </a>
                </p>
                <p>
                  <a href="contact" className="text-white">
                    Contact Us
                  </a>
                </p>
                <p>
                  <a href="contact" className="text-white">
                    Get a Quote
                  </a>
                </p>
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                {/* Links */}
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                />
                <p>
                  <i className="fas fa-home mr-3" /> Ottawa, ON, Canada
                </p>
                <p>
                  <i className="fas fa-envelope mr-3" /> evan@prowash.ca
                </p>
                <p>
                  <i className="fas fa-phone mr-3" /> 613 889 7145
                </p>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
          </div>
        </section>
        {/* Section: Links  */}
        {/* Copyright */}
        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2020 Copyright:<span> </span>
          <a className="text-white" href="https://mdbootstrap.com/">
            pro-wash.ca
          </a>
        </div>
        {/* Copyright */}
      </footer>
      {/* Footer */}
      {/* End of .container */}
    </>
  );
}
