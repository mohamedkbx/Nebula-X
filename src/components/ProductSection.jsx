import product1 from "../assets/Layer 2.webp";
import product2 from "../assets/Layer 3.webp";
import { FaCartShopping } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";

export default function ProductSection() {
  return (
    <section className="product section-padding ">
      <div className="product__text ">
        <span className="product__head">WE HELP YOU</span>
        <h2 className="secondary-heading">Sell Stunnig Products</h2>
        <p className="paragraph">
          We&apos;ll guide you through our unique 5-step brand-building
          framework
        </p>
        <button className="custom-button">
          {" "}
          <span> MORE DETAIL</span>{" "}
          <span className="btn-icon">
            <FaAngleRight />
          </span>
        </button>
      </div>
      <div className="product__items">
        <div className="product__item-1 ">
          <div className="card">
            <div className="card-img">
              <img src={product1} alt="Minimal Chair" />
            </div>
            <div className="card-title">
              <h3>Minimal Chair</h3>
            </div>
            <div className="card-details d-flex justify-content-between px-2 py-2">
              <div className="price">
                <p>$139</p>
              </div>
              <button>
                <FaCartShopping />
              </button>
            </div>
          </div>
        </div>
        <div className="product__item-2  ">
          <div className="card">
            <div className="card-img text-center">
              <img src={product2} alt="Minimal Chair" />
            </div>
            <div className="card-title">
              <h3>Minimal Chair</h3>
            </div>
            <div className="card-details d-flex justify-content-between px-2 py-2">
              <div className="price">
                <p>$139</p>
              </div>
              <button>
                <FaCartShopping />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}