
import contactOverlay from "../assets/Shape 2.png";
import contactImg from "../assets/contactImg.png";

import emailLogo from "../assets/icons/email.svg";
import chatIcon from "../assets/icons/chat-line-svgrepo-com.svg";


export default function ContactUs() {
    return (
      <section className="contact  ">
        <img
          src={contactOverlay}
          alt="overlay"
          className="img-fluid contact__overlay"
        />
  
        <div className="contact-content section-padding row d-flex justify-content-between">
          <div className="contact__form col-12 col-lg-4 mx-lg-auto">
            {" "}
            <div className="form-card w-100 ">
              <h2 className="form-title text-center py-5">Write Us</h2>
              <form className="form d-flex flex-column align-items-center justify-content-center ">
                <div className="form-group email-input mx-auto d-flex">
                  <img
                    src={emailLogo}
                    alt="Email"
                    className="img-fluid form-icon"
                  />
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="mohamedk.muusa@gmail.com"
                  />
                </div>
                <div className="form-group massage-input mx-auto d-flex ">
                  <img
                    src={chatIcon}
                    alt="messaage"
                    className="img-fluid align-self-start form-icon"
                  />
                  <textarea
                    className="form-control "
                    id="message"
                    rows="7"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button className="custom-btn form-btn ">
                  Send Your Message
                </button>
              </form>
            </div>
          </div>
          <div className="contact__img col-12 col-lg-4 ">
            <img src={contactImg} alt="contact img" className="img-fluid d-none d-lg-block" />
          </div>
        </div>
      </section>
    );
  }
  