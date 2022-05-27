import React from "react";
import "./PackageMenu.css";
import carbonara from "../../../images/item-2.png";
import pecelLele from "../../../images/item-3.png";
import pasta from "../../../images/item-1.png";

const PackageMenu = () => {
  return (
    <div className="package-menu-banner text-center">
      <h1 className="grand-hotel-font banner-heading primary-colour">
        Package Menu
      </h1>
      <p className="fs-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi
        <br />
        vamus lacinia odio vitae vestibulum vestibulum.
      </p>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-3 g-4 m-0">
          <div class="col">
            <div class="package-menu-card">
              <img src={pasta} class="package-menu-card-img" alt="..." />
              <div class="card-body">
                <h5 class="package-menu-card-title grand-hotel-font primary-colour">
                  Pasta + Ice Tea
                </h5>
                <p class="card-text mx-3 fs-tertiary mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button
                  type="button"
                  class="w-100 btn main-button primary-background text-light rounded-pill fs-4 mb-3"
                >
                  $34.00
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="package-menu-card">
              <img src={carbonara} class="package-menu-card-img" alt="..." />
              <div class="card-body">
                <h5 class="package-menu-card-title grand-hotel-font primary-colour">
                  Carbonara & Pasta
                </h5>
                <p class="card-text mx-3 fs-tertiary mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button
                  type="button"
                  class="w-100 btn main-button primary-background text-light rounded-pill fs-4 mb-3"
                >
                  $34.00
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="package-menu-card">
              <img src={pecelLele} class="package-menu-card-img" alt="..." />
              <div class="card-body">
                <h5 class="package-menu-card-title grand-hotel-font primary-colour">
                  Mie Ayam Pangsit
                </h5>
                <p class="card-text mx-3 fs-tertiary mb-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <button
                  type="button"
                  class="w-100 btn main-button primary-background text-light rounded-pill fs-4 mb-3"
                >
                  $34.00
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageMenu;
