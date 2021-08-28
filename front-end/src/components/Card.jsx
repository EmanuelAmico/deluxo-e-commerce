import React from "react";
import "../assets/styles/components/Card.scss";

function Card({ product }) {
  const productImages = product.image.split(" ");

  return (
    <div
      id={`product-${product.id}`}
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target={`#product-${product.id}`}
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target={`#product-${product.id}`}
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target={`#product-${product.id}`}
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={productImages[0]} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={productImages[1]} className="d-block w-100" alt="..." />
        </div>
        <div className="carousel-item">
          <img src={productImages[2]} className="d-block w-100" alt="..." />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#product-${product.id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#product-${product.id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Card;
