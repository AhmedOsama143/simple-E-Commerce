import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ProductDetails.css";

import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../cartSlice";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [showToast, setShowToast] = useState(false);

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error("Failed to fetch product");
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    dispatch(increment(product.id));
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2000);
  };

  if (!product) return <h3 className="text-center mt-5">Product not found</h3>;

  return (
    <>
      <div
        className="position-fixed top-0 end-0  p-3"
        style={{ zIndex: 2000, marginTop: "70px" }}
      >
        <div
          className={`toast align-items-center text-bg-success border-0 ${
            showToast ? "show" : "hide"
          }`}
          role="alert"
        >
          <div className="d-flex">
            <div className="toast-body fw-bold">✅ Added to cart!</div>
          </div>
        </div>
      </div>

      <div className="container mt-5 d-flex justify-content-center">
        <div
          className="card shadow-lg rounded-4 p-4"
          style={{ maxWidth: "900px" }}
        >
          <div className="row g-4">
            <div className="col-md-5 d-flex align-items-center justify-content-center">
              <img
                src={product.image}
                alt={product.title}
                className="img-fluid rounded-3"
                style={{ maxHeight: "350px", objectFit: "contain" }}
              />
            </div>

            <div className="col-md-7">
              <h3 className="fw-bold mb-3">{product.title}</h3>
              <p className="text-muted">{product.description}</p>
              <h4 className="text-success fw-bold mb-4">${product.price}</h4>
              <div className="d-flex justify-content-start align-items-center gap-2 my-2">
                <button
                  className="btn btn-outline-danger"
                  onClick={() => dispatch(decrement(product.id))}
                >
                  -
                </button>
                <span>{cartItems[product.id] ? cartItems[product.id] : 0}</span>
                <button
                  className="btn btn-outline-success"
                  onClick={() => dispatch(increment(product.id))}
                >
                  +
                </button>
              </div>

              <div className="mt-4">
                <button
                  className="btn btn-success me-3"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </button>
                <Link to="/portfolio" className="btn btn-outline-secondary">
                  Back to Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
