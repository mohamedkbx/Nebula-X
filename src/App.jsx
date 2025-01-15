import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";
import ProductSection from "./components/ProductSection";
import Shop from "./components/Shop";
import Sales from "./components/Sales";


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
    <section className="contact section-padding">
      <div className="contact-content section-padding ">fdsfsf</div>
    </section>
  );
}

export default App;
