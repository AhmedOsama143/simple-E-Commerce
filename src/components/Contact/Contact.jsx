import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    userName: "",
    userAge: "",
    userEmail: "",
    userPass: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const validate = () => {
    let newErrors = {};

    if (!form.userName.trim()) {
      newErrors.userName = "User Name is required";
    } else if (form.userName.length < 3) {
      newErrors.userName = "User Name must be at least 3 characters";
    }

    if (!form.userAge) {
      newErrors.userAge = "User Age is required";
    } else if (form.userAge <= 0 || form.userAge > 100) {
      newErrors.userAge = "User Age must be between 1 and 100";
    }

    if (!form.userEmail) {
      newErrors.userEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.userEmail)) {
      newErrors.userEmail = "Invalid email format";
    }

    if (!form.userPass) {
      newErrors.userPass = "Password is required";
    } else if (form.userPass.length < 6) {
      newErrors.userPass = "Password must be at least 6 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully ✅");
      console.log("Form Data:", form);
    }
  };

  return (
    <section
      id="contact"
      className="min-vh-100 d-flex justify-content-center align-items-center"
    >
      <div className="container">
        <div className="title">
          <h1 className="text-center display-6 fw-bold text-color">
            CONTACT SECTION
          </h1>

          <div className="star-container mt-3 mb-3 d-flex justify-content-center align-items-center">
            <div id="line"></div>
            <i className="fa fa-solid fa-star text-color"></i>
            <div id="line"></div>
          </div>
        </div>

        <form className="w-50 mx-auto" onSubmit={handleSubmit} noValidate>
          <div className="input-container">
            <input
              id="userName"
              type="text"
              value={form.userName}
              onChange={handleChange}
              className="form-control mt-5 mb-1 border-0 border-bottom"
              placeholder="User Name"
            />
            <label htmlFor="userName" className="input-label">
              User Name
            </label>
            {errors.userName && (
              <small className="text-danger">{errors.userName}</small>
            )}
          </div>

          <div className="input-container">
            <input
              id="userAge"
              type="number"
              value={form.userAge}
              onChange={handleChange}
              className="form-control mb-1 border-0 border-bottom"
              placeholder="User Age"
            />
            <label htmlFor="userAge" className="input-label">
              User Age
            </label>
            {errors.userAge && (
              <small className="text-danger">{errors.userAge}</small>
            )}
          </div>

          <div className="input-container">
            <input
              id="userEmail"
              type="email"
              value={form.userEmail}
              onChange={handleChange}
              className="form-control mb-1 border-0 border-bottom"
              placeholder="User Email"
            />
            <label htmlFor="userEmail" className="input-label">
              User Email
            </label>
            {errors.userEmail && (
              <small className="text-danger">{errors.userEmail}</small>
            )}
          </div>

          <div className="input-container">
            <input
              id="userPass"
              type="password"
              value={form.userPass}
              onChange={handleChange}
              className="form-control mb-1 border-0 border-bottom"
              placeholder="User Password"
            />
            <label htmlFor="userPass" className="input-label">
              User Password
            </label>
            {errors.userPass && (
              <small className="text-danger">{errors.userPass}</small>
            )}
          </div>

          <button type="submit" className="btn btn-outline-success px-5 mt-3">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
