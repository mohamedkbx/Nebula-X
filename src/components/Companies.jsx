import iconCompany from "../assets/icom-logo.png";
import smartLogo from "../assets/Smart-Logo.png";
import westenOffice from "../assets/westin-guest-office-logo.png";
import usvSystem from "../assets/computerSystem.svg";
import media from "../assets/Media_24.png";

export default function Companies() {
  return (
    <section className="compaines section-padding d-flex justify-content-between align-items-center">
      <p className="paragraph fs-3">Compaines we have build</p>
      <ul className="compaines__list d-flex  align-items-center  ">
        <li className="company__list-item mt-3">
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
