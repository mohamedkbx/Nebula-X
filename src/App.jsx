import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import ProductSection from "./components/ProductSection";
import Shop from "./components/Shop";
import Sales from "./components/Sales";

import contactOverlay from "./assets/Shape 2.png";
import contactImg from "./assets/contactImg.png";


function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Companies />
      <ProductSection />
      <Shop />
      <Sales />
      <ContactUs />
    </div>
  );
}

function ContactUs() {
  return (
    <section className="contact  ">
          <img src={contactOverlay} alt="overlay" className="image-fluid contact__overlay" />
        
      <div className="contact-content section-padding row d-flex justify-content-between">
        <div className="contact__form col-12 col-md-4 mx-auto">ffsfdsf</div>
        <div className="contact__img col-12 col-md-4">
          <img src={contactImg} alt="contact img" />
        </div>
      </div>
    </section>
  );
}

export default App;
