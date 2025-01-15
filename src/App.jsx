import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import ProductSection from "./components/ProductSection";
import Shop from "./components/Shop";

import { FaAngleRight } from "react-icons/fa6";


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Companies />
      <ProductSection />
      <Shop />
      <Sales />
    </div>
  );
}

function Sales() {
  return <section className="sales section-padding">
    <div className="row justify-content-between ">
      <div className="sales__analytics col-12 col-md-7">
        <div className="sales__card"></div>
      </div>
      <div className="sales__text col-4">
  <div className="product__text ">
          <span className="product__head">WE HELP YOU</span>
          <h2 className="secondary-heading">Increase our Customers Sales</h2>
          <p className="paragraph">
          Our customers are seeing big results within the first three months
          </p>
          <button className="custom-button">
            {" "}
            <span> MORE DETAIL</span>{" "}
            <span className="btn-icon">
              <FaAngleRight />
            </span>
          </button>
        </div>

      </div>
    </div>
  </section>;
}

export default App;
