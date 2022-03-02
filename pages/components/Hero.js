import SeeOurWorkButton from "./SeeOurWorkButton";
import ContactUsButton from "./ContactUsButton";

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
          <div className="row align-items-center d-flex h-100">
            <div className="w-100 text-white ">
              <h1 className="logo display-3">
                PRO-WASH Ottawa Pressure Washing Solutions
              </h1>
              <div className="row mt-5 gap-3 flex-wrap w-50">
                <SeeOurWorkButton></SeeOurWorkButton>
                <ContactUsButton></ContactUsButton>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
