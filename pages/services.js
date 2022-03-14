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
        <section className="pt-5">
          <h1 className="subtitle">Our Services</h1>
          <p className="main-text">
            We offer surface cleaning and interlock restoration services.
          </p>
        </section>
        <section id="surface-cleaning" className="main-text service-section">
          <h1 className="subtitle">Surface Cleaning</h1>
          <p>
            Have an exterior surface in need of a deep clean? We can pressure
            wash many different surfaces and materials. We use state of the art
            equipment to ensure all you are left with a high quality result. We
            strive to give the best service and value to our clients. Contact us
            today to see how we can help!
          </p>
          Surfaces we clean:
          <ul className="main-text">
            <li>Concrete</li>
            <li>Asphalt</li>
            <li>Sheds, Decks and Fences</li>
            <li>Pool Decks</li>
            <li>Flagstone Patios</li>
            <li>and more..</li>
          </ul>
          <p className="main-text">
            Pressure washing can get out tough stains from asphalt or concrete
            with use of proper chemicals.
          </p>
        </section>
        <section id="graffiti-removal" className="service-section">
          <h1 className="subtitle">Graffiti Removal</h1>
          <p className="main-text">
            At Pro-Wash we also offer graffiti removal services. Graffiti
            removal can be a quick easy process depending on the material it is
            painted on and how long it has been sitting on that material.
            Contact us today if you are tired of seeing your property
            vandalized. We use biodegradable solutions that are envioronmentally
            friendly to clean all surfaces.
          </p>
          <h2>How it Works</h2>
          <ul className="list-group d-inline-block my-3">
            <li className="list-group-item">
              <p>Step 1: Inspect surface</p>
            </li>
            <li className="list-group-item">
              <p>
                Step 2: Apply specific chemicals to break down and soften
                graffiti
              </p>
            </li>
            <li className="list-group-item">
              <p>Step 3: Pressure wash off and rinse</p>
            </li>
            <li className="list-group-item">
              <p>Step 4: Repeat until satisfied.</p>
            </li>
          </ul>
        </section>
        <section id="interlock-cleaning" className="service-section">
          <h1 className="subtitle">Interlock Cleaning</h1>
          <p className="main-text">
            Have an interlock surface in need of cleaning? We'd love to help! We
            use the highest quality cleaning products and biodegradable
            chemicals available. Cleaning your interlock surface can leave it
            looking brand new again instantly boosting curb appeal. Interlock
            cleaning is a fast, cost effective way to revive your outdoor living
            spaces
          </p>
          <ul className="list-group d-inline-block my-3">
            <li className="list-group-item">
              <p>Step 1: Soak interlock with water</p>
            </li>
            <li className="list-group-item">
              <p>Step 2: Apply biodegradable cleaning solution</p>
            </li>
            <li className="list-group-item">
              <p>Step 3: Scrub</p>
            </li>
            <li className="list-group-item">
              <p>Step 4: Rinse</p>
            </li>
            <li className="list-group-item">
              <p>Step 5: Spot check any areas missed</p>
            </li>
            <li className="list-group-item">
              <p>Step 6: Rinse</p>
            </li>
          </ul>
        </section>

        <section id="interlock-relaying" className="service-section">
          <div className="main-text">
            <h1 className="subtitle">Interlock Relaying</h1>
            <p className="main-text">
              Have an uneven interlock surface or interlock sloping towards your
              foundation? We have got you covered! With years of experience
              installing interlock prior, gives us a great knowledge of all
              factors that affect it. We follow all ICPI (Interlocking Concrete
              Paver Institute) guidelines for relaying interlock. Repairing an
              interlock walkway is more economical than a new installation if
              the pavers are still in good shape. Contact us today to see how we
              can help with your interlock repair.
            </p>
            Common Problems
            <ul>
              <li>Lack of compaction in base material</li>
              <li>Drainage and puddling water</li>
              <li>Age of original installation</li>
            </ul>
            Common Resolutions
            <ul>
              <li>Compact base material thoroughly</li>
              <li>Slope to ensure no water will puddle</li>
              <li>Install high quality polymeric sand</li>
            </ul>
          </div>
          <ul className="list-group d-inline-block my-3">
            <li className="list-group-item">
              <p>
                Step 1: Pressure wash surface and joints to rid of dirt and
                existing joint sand
              </p>
            </li>
            <li className="list-group-item">
              <p>Step 2: Lift all interlock</p>
            </li>
            <li className="list-group-item">
              <p>Step 3: Thorougly compact existing base</p>
            </li>
            <li className="list-group-item">
              <p>Step 4: Screed out new bedding layer</p>
            </li>
            <li className="list-group-item">
              <p>Step 5: Lay interlock</p>
            </li>
            <li className="list-group-item">
              <p>Step 6: Sweep in new polymeric joint sand</p>
            </li>
            <li className="list-group-item">
              <p>Step 7: Compact sand with a paver-safe roller compacter</p>
            </li>
            <li className="list-group-item">
              <p>Step 8: Wet the sand with water to activate glue</p>
            </li>
            <li className="list-group-item">
              <p>Step 9: Let dry and cure for 48 hours</p>
            </li>
          </ul>
        </section>
        <section id="polymeric-sand-reinstatement" className="service-section">
          <h1 className="subtitle">Polymeric Sand Reinstatement</h1>
          <p className="main-text">
            Have an overgrown patio or walkway? Mossy joints and dirty pavers?
            We can help! We provide polymeric joint sand reinstatement services.
            Most paver joint sands need to be replaced within 8 to 12 years.
            Doing this will ensure the strength, durability and also provide a
            fresh brand new looking patio or walkway!
          </p>
          <h2>How it Works</h2>
          <ul className="list-group d-inline-block my-3">
            <li className="list-group-item">
              <p>
                Step 1: Pressure wash surface and joints to rid of dirt and
                existing joint sand
              </p>
            </li>
            <li className="list-group-item">
              <p>Step 2: Let dry</p>
            </li>
            <li className="list-group-item">
              <p>Step 3: Sweep in new polymeric joint sand</p>
            </li>
            <li className="list-group-item">
              <p>Step 4: Compact sand with a paver-safe roller compactor</p>
            </li>
            <li className="list-group-item">
              <p>Step 5: Wet the sand with water to activate glue</p>
            </li>
            <li className="list-group-item">
              <p>Step 6: Let dry and cure for 48 hours</p>
            </li>
          </ul>
        </section>
      </div>
      <Footer></Footer>
    </div>
  );
}
