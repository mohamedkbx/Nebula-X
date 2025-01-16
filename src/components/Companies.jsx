import iconCompany from "../assets/icom-logo.png";
import smartLogo from "../assets/Smart-Logo.png";
import westenOffice from "../assets/westin-guest-office-logo.png";
import usvSystem from "../assets/computerSystem.svg";
import media from "../assets/Media_24.png";

export default function Companies() {
  return (
    <section className="compaines section-padding row d-flex flex-column flex-lg-row  justify-content-between align-items-lg-center">
      <p className="paragraph fs-3 col-12 col-lg-4 text-center text-lg-start">Compaines we have build</p>
      <ul className="compaines__list d-flex  align-items-center justify-content-center justify-content-lg-end   col-12 col-lg-8 text-center flex-wrap "> 
        <li className="company__list-item mt-3 ">
          <img src={media} alt="company" />
        </li>
        <li className="company__list-item mt-3">
          <img src={usvSystem} alt="company" />
        </li>
        <li className="company__list-item mt-3">
          <img src={westenOffice} alt="company" />
        </li>
        <li className="company__list-item mt-3">
          <img src={smartLogo} alt="company" />
        </li>
        <li className="company__list-item">
          <img src={iconCompany} alt="company" />
        </li>
      </ul>
    </section>
  );
}
