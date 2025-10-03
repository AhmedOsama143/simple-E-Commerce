import React from "react";
import "./About.css";

export default function About() {
  return (
    <section
      id="about"
      className="min-vh-100 d-flex justify-content-center align-items-center text-white"
    >
      <div className="container px-lg-4 mt-4">
        <div className="title">
          <h2 className="text-center display-6 fw-bold">
            ABOUT Cukur E-Commerce
          </h2>

          <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div id="line" className="bg-white"></div>
            <i className="fa fa-solid fa-star"></i>
            <div id="line" className="bg-white"></div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6">
            <p>
              Cukur E-Commerce is a modern online store designed to provide a
              smooth and fast shopping experience. It offers a wide variety of
              products across categories such as fashion, electronics, and
              accessories, all in one place. With a clean and user-friendly
              interface, customers can easily browse items.
            </p>
          </div>

          <div className="col-md-6">
            <p>
              add them to their cart, and enjoy secure payment options. The
              platform also allows simple order tracking until delivery to the
              customer’s doorstep. Dedicated to providing the best prices and
              exclusive deals, Cukur E-Commerce is committed to creating value
              and trust for its customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
