import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { removeOne, removeAll } from "../../cartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  const cartProducts = products.filter((p) => cartItems[p.id]);

  if (cartProducts.length === 0) {
    return (
      <div
        className="d-flex flex-column justify-content-center align-items-center text-center"
        style={{ minHeight: "70vh" }}
      >
        <h4 className="mb-3">
          There are no products to display in the cart. 🛒
        </h4>
        <p className="text-muted mb-3">
          Please add some products to your cart.
        </p>
        <Link to="/portfolio" className="btn btn-primary">
          ⬅️ Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mt-5" style={{ minHeight: "70vh" }}>
      <h3 className="mb-4">Your Cart</h3>
      {cartProducts.map((product) => (
        <div
          key={product.id}
          className="d-flex align-items-center justify-content-between border rounded p-2 mb-2 shadow-sm"
        >
          <div className="d-flex align-items-center">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: "50px", height: "50px", objectFit: "contain" }}
              className="me-3"
            />
            <div>
              <h6 className="mb-0">{product.title}</h6>
              <small className="text-muted">
                Quantity: {cartItems[product.id]}
                <br /> Price: ${product.price}
                <br /> Total: $
                {(product.price * cartItems[product.id]).toFixed(2)}
              </small>
            </div>
          </div>
          <div className="d-flex gap-2">
            <button
              className="btn btn-sm btn-warning"
              onClick={() => dispatch(removeOne(product.id))}
            >
              ➖ Remove One
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => dispatch(removeAll(product.id))}
            >
              ❌ Remove All
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
