import "bootstrap/dist/css/bootstrap.css"; // Add this line
import "../styles/globals.css";

import {useEffect} from "react";

function MyApp({ Component, pageProps }) {
  //required for bootstrap components that use javascript
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);


  return <Component {...pageProps} />;
}

export default MyApp;
