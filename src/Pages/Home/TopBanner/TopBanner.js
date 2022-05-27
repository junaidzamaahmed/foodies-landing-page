import React from "react";
import "./TopBanner.css";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="d-flex justify-content-center">
        <div className="h-50 d-flex justify-content-center align-items-center mt-5 w-50 flex-column text-light">
          <h1 className="grand-hotel-font top-banner-heading">Delicious</h1>
          <p className="fs-secondary text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.
          </p>
          <button
            type="button"
            class="btn main-button btn-light primary-colour rounded-pill fs-secondary mt-5 fw-bold"
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBanner;
