import React from "react";
import "./OurMenu.css";
import carbonara from "../../../images/item-2.png";
import pecelLele from "../../../images/item-3.png";
import pasta from "../../../images/item-1.png";
import mieGyam from "../../../images/item-4.png";

const OurMenu = () => {
  return (
    <div className="ourmenu-banner pb-5">
      <h1 className="grand-hotel-font banner-heading primary-colour text-center">
        Our Menu
      </h1>
      <p className="fs-secondary text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi
        <br />
        vamus lacinia odio vitae vestibulum vestibulum.
      </p>
      <div className="">
        <div class="row row-cols-1 row-cols-md-2 g-4 m-0">
          <div class="col">
            <div class="row g-0">
              <div class="col-3 d-flex justify-content-end">
                <img src={pasta} class="h-50 mt-4 img-fluid" alt="..." />
              </div>
              <div class="col-9">
                <div class="card-body">
                  <h5 class="card-title grand-hotel-font primary-colour menu-item-heading">
                    Pasta
                  </h5>
                  <p class="card-text fs-tertiary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at dignissim nunc, id maximus ex. Etiam nec
                    dignissim elit, at dignissim enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row g-0">
              <div class="col-3 d-flex justify-content-end">
                <img src={mieGyam} class="h-50 mt-4 img-fluid" alt="..." />
              </div>
              <div class="col-9">
                <div class="card-body">
                  <h5 class="card-title grand-hotel-font primary-colour menu-item-heading">
                    Mie Gyam
                  </h5>
                  <p class="card-text fs-tertiary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at dignissim nunc, id maximus ex. Etiam nec
                    dignissim elit, at dignissim enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row g-0">
              <div class="col-3 d-flex justify-content-end">
                <img src={carbonara} class="h-50 mt-4 img-fluid" alt="..." />
              </div>
              <div class="col-9">
                <div class="card-body">
                  <h5 class="card-title grand-hotel-font primary-colour menu-item-heading">
                    Carbonara
                  </h5>
                  <p class="card-text fs-tertiary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at dignissim nunc, id maximus ex. Etiam nec
                    dignissim elit, at dignissim enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="row g-0">
              <div class="col-3 d-flex justify-content-end">
                <img src={pecelLele} class="h-50 mt-4 img-fluid" alt="..." />
              </div>
              <div class="col-9">
                <div class="card-body">
                  <h5 class="card-title grand-hotel-font primary-colour menu-item-heading">
                    Pecel Lele
                  </h5>
                  <p class="card-text fs-tertiary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam at dignissim nunc, id maximus ex. Etiam nec
                    dignissim elit, at dignissim enim.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;
