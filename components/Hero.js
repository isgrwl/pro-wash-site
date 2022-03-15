import Link from "next/link";

export default function Hero() {
  return (
    <div>
      <header>
        <div className="overlay"></div>

        <video playsInline={true} autoPlay={true} muted={true} loop={true}>
          <source src="/vid.mp4" type="video/mp4" />
        </video>

        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div>
              <h1 className="logo display-3 text-white">
                PRO-WASH Ottawa <br />
                Pressure Washing Solutions
              </h1>
              <div className="row">
                <div className="col-md-8">
                  <Link href="/contact">
                    <a>
                      <button type="button" id="c-btn" className="col btn m-1">
                        Contact Us
                      </button>
                    </a>
                  </Link>
                  <Link href="/portfolio">
                    <a>
                      <button type="button" id="c-btn" className="col btn m-1">
                        See our Work
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
