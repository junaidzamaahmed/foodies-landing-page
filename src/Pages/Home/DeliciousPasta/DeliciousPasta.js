import React from "react";
import "./DeliciousPasta.css";

const DeliciousPasta = () => {
  return (
    <div>
      <div class="row m-0">
        <div class="col delicious-pasta-left"></div>
        <div class="col delicious-pasta-right">
          <div className="d-flex h-100 flex-column justify-content-center ms-5">
            <h1 className="grand-hotel-font banner-heading primary-colour">
              Delicious Pasta
            </h1>
            <p className="fs-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi
              <br />
              vamus lacinia odio vitae vestibulum vestibulum.
            </p>
            <div>
              <button
                type="button"
                class="btn main-button primary-background text-light rounded-pill fs-5 mt-5 fw-bold"
              >
                ORDER NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliciousPasta;
