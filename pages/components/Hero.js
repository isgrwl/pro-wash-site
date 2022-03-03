export default function Hero() {
  return (
    <div>
      <header>
        <div className="overlay"></div>

        <video
          playsInline="playsinline"
          autoPlay="autoplay"
          muted="true"
          loop="loop"
        >
          <source
            src="https://ak.picdn.net/shutterstock/videos/1028718989/preview/stock-footage-street-cleaning-pressure-water-man-worker-cleaning-city-dirty-streets-with-high-pressure-and.webm"
            type="video/mp4"
          />
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
                  <button type="button" className="col btn m-1">
                    Contact Us
                  </button>{" "}
                  <button type="button" className="col btn m-1">
                    See our Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
