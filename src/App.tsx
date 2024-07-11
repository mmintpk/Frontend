import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Payment from "./pages/Payment";
import Checkpay from "./pages/Checkpay";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "Checkpay";
        metaDescription = "Checkpay";
        break;
      case "/payment":
        title = "Payment";
        metaDescription = "Payment Page";
        break;
      default:
        title = "Page Not Found";
        metaDescription = "404 Page Not Found";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Checkpay />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
