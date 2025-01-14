
import fashion from "../assets/Fashion.jpg";
import furniture from "../assets/furniture.jpg";
import gadget from "../assets/gadget.jpg";

export default function Shop() {
    return (
      <section className="shop section-padding  ">
        <div className="row d-sm-flex gap-5 justify-content-center">
          <div className=" shop__card col-md-6 col-lg-3 d-flex flex-column gap-5 align-items-center">
            <div className="service__image-container">
              <img
                src={fashion}
                alt="Super Gadget Store"
                className="img-fluid service__image"
              />
            </div>
            <div className="service__card-text text-center w-100">
              <h3 className="shop__card-heading fw-bold pb-4">Fashion Store</h3>
              <p className="shop__card-paragraph">
                Achieve the perfect balance of ambient, task, and accent lighting
                for a functional atmosphere
              </p>
            </div>
          </div>
          <div className=" shop__card col-md-6 col-lg-3 d-flex flex-column gap-5 align-items-center mt-sm-5 mt-md-0 mt-lg-0">
            <div className="service__image-container ">
              <img
                src={furniture}
                alt="Super Gadget Store"
                className="img-fluid service__image"
              />
            </div>
            <div className="service__card-text text-center w-100">
              <h3 className="shop__card-heading fw-bold pb-4">Home Furniture</h3>
              <p className="shop__card-paragraph">
                From concept to completion, we oversee every detail to bring your
                vision to life efficiently
              </p>
            </div>
          </div>
          <div className="shop__card col-md-6 col-lg-3 d-flex flex-column gap-5 align-items-center mt-sm-5 mt-lg-0" >
            <div className="service__image-container">
              <img
                src={gadget}
                alt="Super Gadget Store"
                className="img-fluid service__image"
              />
            </div>
            <div className="service__card-text text-center w-100">
              <h3 className="shop__card-heading fw-bold pb-4">
                Super Gadget Store
              </h3>
              <p className="shop__card-paragraph">
                Celebrate the changing seasons with our seasonal outdoor decor
                services
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  