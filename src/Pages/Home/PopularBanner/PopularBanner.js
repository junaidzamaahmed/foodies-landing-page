import React from "react";
import "./PopularBanner.css";
import vegetablePastaImg from "../../../images/vegetable-pasta.png";
import SpicyPastaImg from "../../../images/spicy-pasta.png";
import BeefPastaImg from "../../../images/beef-pasta.png";

const PopularBanner = () => {
  return (
    <div className="popular-banner text-center pb-5">
      <h1 className="grand-hotel-font banner-heading primary-colour">
        Popular
      </h1>
      <p className="fs-secondary">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi
        <br />
        vamus lacinia odio vitae vestibulum vestibulum.
      </p>
      <div className="mx-5 px-5">
        <div class="row row-cols-1 row-cols-md-3 g-4 m-0">
          <div class="col">
            <div>
              <img
                src={SpicyPastaImg}
                class="card-img-top rounded-circle item-image"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title grand-hotel-font items-heading primary-colour">
                  Spicy Pasta
                </h5>
                <p class="card-text fs-tertiary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <img
                src={vegetablePastaImg}
                class="card-img-top item-image"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title grand-hotel-font items-heading primary-colour">
                  Vegetable Pasta
                </h5>
                <p class="card-text fs-tertiary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div>
              <img
                src={BeefPastaImg}
                class="card-img-top item-image"
                alt="..."
              />
              <div class="card-body">
                <h5 class="card-title grand-hotel-font items-heading primary-colour">
                  Beef Pasta
                </h5>
                <p class="card-text fs-tertiary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularBanner;
