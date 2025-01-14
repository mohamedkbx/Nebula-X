import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

import iconCompany from "./assets/icom-logo.png";

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <Companies />
    </div>
  );
}

function Companies(){
  return(
    <div className="compaines section-padding d-flex justify-content-between align-items-center">
      <p className="paragraph">Compaines we have build</p>
      <ul className="compaines__list d-flex">
        <li className="company__list-item"></li>
        <li className="company__list-item"></li>
        <li className="company__list-item"></li>
        <li className="company__list-item"></li>
        <li className="company__list-item">
          <img src={iconCompany} alt="company" />
        </li>
      </ul>
    </div>
  )
}


export default App;
