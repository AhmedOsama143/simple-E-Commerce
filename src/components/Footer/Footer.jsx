import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#2c3e50" }}
      >
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 fw-bold">
                  Cukur E-Commerce
                </h6>
                <p>
                  Cukur E-Commerce is your one-stop shop for all things trendy
                  and affordable. We offer a wide range of products from fashion
                  to electronics, ensuring quality and customer satisfaction.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 fw-bold">Products</h6>
                <p>
                  <a href="#!" className="text-white text-decoration-none">
                    Fashion
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white text-decoration-none">
                    Women's Clothing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white text-decoration-none">
                    Men's Clothing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white text-decoration-none">
                    Children's Clothing
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 fw-bold">Useful links</h6>
                <p>
                  <a href="#!" className="text-white text-decoration-none">
                    Ahmed Osama Kholief
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white text-decoration-none">
                    Become an Affiliate
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white text-decoration-none">
                    Shipping Rates
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white text-decoration-none">
                    Help
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 fw-bold">Contact</h6>
                <p>
                  <i className="fas fa-home me-2"></i>Alexandria, Egypt
                </p>
                <p>
                  <i className="fas fa-envelope me-2"></i>{" "}
                  ahmedkholief143@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone me-2"></i> + 012 7741 9601
                </p>
                <p>
                  <i className="fas fa-print me-2"></i> + 012 3456 7890
                </p>
              </div>
            </div>
          </section>

          <hr className="my-3" />

          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  © 2025 Copyright:{" "}
                  <a
                    className="text-white text-decoration-none"
                    href="https://mdbootstrap.com/"
                  >
                    Kholief.com
                  </a>
                </div>
              </div>

              <div className="social-icons col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a
                  href="#!"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  href="#!"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  href="#!"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>

                <a
                  href="#!"
                  className="btn btn-outline-light btn-floating m-1 text-white"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    </>
  );
}
