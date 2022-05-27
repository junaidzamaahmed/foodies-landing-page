import React from "react";
import "./SubscribeBanner.css";

const SubscribeBanner = () => {
  return (
    <div className="subscribe-banner text-center">
      <h1 className="grand-hotel-font banner-heading primary-colour">
        Subscribe
      </h1>
      <p className="fs-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi
        <br />
        vamus lacinia odio vitae vestibulum vestibulum.
      </p>
      <form class="d-flex justify-content-center" role="search">
        <input
          class="my-3 form-control me-2 rounded-pill subscribe-input py-3 border-light px-3"
          type="email"
          placeholder="Your Email"
          aria-label="Your Email"
        />
        <button
          class="my-3 fw-bold subscribe-button btn btn-outline-success rounded-pill px-5 primary-background text-light border-light"
          type="submit"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeBanner;
