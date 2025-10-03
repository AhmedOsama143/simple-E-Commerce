import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

export default function Portfolio() {
  const [products, setProducts] = useState([]);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  function closeImg() {
    setPreviewSrc(null);
  }

  return (
    <section
      id="portfolio"
      className="min-vh-100 d-flex justify-content-center align-items-center mt-3 mb-5"
    >
      <div className="container mt-5">
        <div className="title mt-5">
          <h1 className="text-center display-6 fw-bold text-color">
            Many products
          </h1>

          <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div id="line"></div>
            <i className="fa fa-solid fa-star text-color"></i>
            <div id="line"></div>
          </div>
        </div>

        {loading ? (
          <h3 className="text-center text-muted mt-5">Loading...</h3>
        ) : (
          <div className="row g-4 mt-3">
            {products.map((product) => (
              <div key={product.id} className="col-md-6 col-lg-4">
                <div className="card overflow-hidden rounded-3 position-relative">
                  <img
                    src={product.image}
                    className="product-img"
                    alt={product.title}
                  />
                  <div className="p-3 text-center">
                    <h5>{product.title}</h5>
                    <p className="text-muted">${product.price}</p>

                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-primary mt-2"
                    >
                      Show More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {previewSrc && (
        <div
          className="preview-img d-flex justify-content-center align-items-center bg-info bg-opacity-25 position-fixed top-0 start-0 w-100 vh-100"
          onClick={closeImg}
        >
          <img src={previewSrc} alt="preview" className="w-50 mt-5 rounded-3" />
        </div>
      )}
    </section>
  );
}
