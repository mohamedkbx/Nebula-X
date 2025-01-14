import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Companies from "./components/Companies";



function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Companies />
      <ProductSection />
    </div>
  );
}

function ProductSection(){
  return(
    <section className="product section-padding ">
      <div className="product__text ">
        <span>WE HELP YOU</span>
        <h2>Sell Stunnig Products</h2>
        <p>We&apos;ll guide you through our unique 5-step brand-building framework</p>
      </div>
      <div className="product__items">
        <div className="product__item-1"></div>
        <div className="product__item-2"></div>
      </div>
    </section>
  );
}


export default App;
