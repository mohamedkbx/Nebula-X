
import hero from "../assets/hero-1.webp";
import profileCard from "../assets/Layer 6.webp";
import backFace from "../assets/Shape 1.webp";
import { FaSistrix } from "react-icons/fa6";

export default  function HeroSection() {
    return (
      <section className="hero section-padding">
        <img src={backFace} alt="back" className="backFace" />
        <div className="hero__content">
          <div className="hero-img">
            <img src={hero} alt="hero-img" />
            <div className="hero-img__overlay">
              <img src={profileCard} alt="profile Card" />
              <div className="hero-img__text">
                <h3>James Prono</h3>
                <p>Digital Marketer</p>
              </div>
            </div>
          </div>
          <div className="hero-text">
            <h1 className="primary-header">
              We Help You Build & Grow an Online Business
            </h1>
            <div className="search-input">
              <input type="text" placeholder="Tell us what you need to build..." />
              <button className="search-btn">
                <FaSistrix />
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }