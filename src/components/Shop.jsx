
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
                loading="lazy" 
              />
            </div>
            <div className="service__card-text text-start w-100">
              <h3 className="shop__card-heading fw-bold pb-4 fs-1 ">Fashion Store</h3>
              <p className="shop__card-paragraph fs-4">
                Shp ladies fashion at Misshuided USa With hundreds of new styles hitting our shelves every week
              </p>
            </div>
          </div>
          <div className=" shop__card col-md-6 col-lg-3 d-flex flex-column gap-5 align-items-center mt-sm-5 mt-md-0 mt-lg-0">
            <div className="service__image-container ">
              <img
                src={furniture}
                alt="Super Gadget Store"
                className="img-fluid service__image"
                loading="lazy" 
              />
            </div>
            <div className="service__card-text text-start w-100">
              <h3 className="shop__card-heading fw-bold fs-1 pb-4">Home Furniture</h3>
              <p className="shop__card-paragraph fs-4">
               Provides superior quality furniture and mattresses at a price that customers can easily afford
              </p>
            </div>
          </div>
          <div className="shop__card col-md-6 col-lg-3 d-flex flex-column gap-5 align-items-center mt-sm-5 mt-lg-0" >
            <div className="service__image-container">
              <img
                src={gadget}
                alt="Super Gadget Store"
                className="img-fluid service__image"
                loading="lazy" 
              />
            </div>
            <div className="service__card-text text-startf  w-100">
              <h3 className="shop__card-heading fw-bold fs-1 pb-4">
                Super Gadget Store
              </h3>
              <p className="shop__card-paragraph fs-4 ">
                Specialize in selling unique gifts, cool gadgets,outdoor gear and fab toys.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  