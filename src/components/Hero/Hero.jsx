import React from "react";
import { useNavigate } from "react-router-dom";
import HeroImage from "../../assets/clark-street-mercantile-P3pI6xzovu0-unsplash.jpg";
import Button from "../Button/Button";
import "./Hero.css";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero ">
      <div className="hero-container">
        <div className="hero-left">
          <h1>For All Your Fashion Needs, Your Style.</h1>
          <p>
            Cukur Fashion is your go-to online destination for the latest trends
            in clothing and accessories. We bring you stylish, high-quality
            outfits that fit every occasion and personality. Upgrading your
            wardrobe has never been easier.
          </p>
          <Button text="About Us" onClick={() => navigate("/about")} />
        </div>

        <div className="hero-right">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </section>
  );
}
