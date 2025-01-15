import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import ProductSection from "./components/ProductSection";
import Shop from "./components/Shop";

import { FaAngleRight } from "react-icons/fa6";
import profile1 from "./assets/profile-pic-1.png";
import profile2 from "./assets/profile-pic-2.png";
import { FaChevronUp } from "react-icons/fa6";

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
  return (
    <section className="sales section-padding">
      <div className="row justify-content-between align-items-center ">
        <div className="sales__analytics col-12 col-md-7 d-flex flex-column ">
          <div className="sales__card card-1 d-flex gap-5 align-items-center ">
            
            <div className="sales__card-img ">
              <img src={profile1} alt="prfile picture" className="img-fluid" />
            </div>
            <div className="sales__card-text d-flex flex-column gap-2 justify-content-center align-items-start">
              <h3 className="net">
                $ 7,654
                <span className="net-icon">
                  <FaChevronUp />
                </span>
              </h3>
              <p className="renew">
                TOTAL REVNENUE<span>+323</span>
              </p>
            </div>
          </div>
          <div className="sales__card card-2 d-flex gap-5 align-items-center ">
            <div className="sales__card-text d-flex flex-column gap-2 justify-content-center align-items-center">
              <h3 className="net">
                $ 9,978
                <span className="net-icon">
                  <FaChevronUp />
                </span>
              </h3>
              <p className="renew">
                TOTAL REVNENUE<span>+365</span>
              </p>
            </div>
            <div className="sales__card-img ">
              <img src={profile2} alt="prfile picture" className="img-fluid" />
            </div>
          </div>
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
    </section>
  );
}

export default App;
