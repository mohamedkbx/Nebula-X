import hero from "../assets/hero-1.webp";
import profileCard from "../assets/Layer 6.webp";
import backFace from "../assets/Shape 1.webp";
import { FaSistrix } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="hero ">
      <img src={backFace} alt="back" className="backFace image-fluid" />
      <div className="hero__content row section-padding justify-content-around">
        <div className="hero-img col-12 col-lg-6">
          <img src={hero} alt="hero-img" className="image-fluid " />
          <div className="hero-img__overlay">
            <img src={profileCard} alt="profile Card"className="image-fluid "/>
            <div className="hero-img__text">
              <h3>James Prono</h3>
              <p>Digital Marketer</p>
            </div>
          </div>
        </div>
        <div className="hero-text col-12 col-md-6">
          <h1 className="primary-header">
            We Help You Build & Grow an Online Business
          </h1>
          <div className="search-input">
            <input
              type="text"
              placeholder="Tell us what you need to build..."
            />
            <button className="search-btn">
              <FaSistrix />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
