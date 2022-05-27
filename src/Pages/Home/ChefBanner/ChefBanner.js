import React from "react";
import chef from "../../../images/chef.png";
import "./ChefBanner.css";

const ChefBanner = () => {
  return (
    <div>
      <div class="row m-0">
        <div class="chef-banner">
          <div className="d-flex h-100 flex-column justify-content-center text-center align-items-center">
            <img className="img-fluid" src={chef} alt="" />
            <p className="mt-5 fs-secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi
              <br />
              vamus lacinia odio vitae vestibulum vestibulum.
            </p>
            <p className="grand-hotel-font chef-name mt-5 primary-colour">
              Chef Renatta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChefBanner;
