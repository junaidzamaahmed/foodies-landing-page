import React from "react";
import "./OurStatistic.css";

const OurStatistic = () => {
  return (
    <div className="our-statistic-banner text-center text-light">
      <h1 className="grand-hotel-font banner-heading">Our Statistic</h1>
      <p className="fs-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vi
        <br />
        vamus lacinia odio vitae vestibulum vestibulum.
      </p>
      <div className="mx-5 px-5">
        <div class="row row-cols-1 row-cols-md-3 g-4 m-0">
          <div class="col d-flex justify-content-center">
            <div className="stats-item border-dotted">
              <div>
                <h5 className="stats-heading fw-bold">153</h5>
                <p className="stats-heading">Menu</p>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-center">
            <div className="stats-item border-dotted">
              <div>
                <h5 className="stats-heading fw-bold">3.4K</h5>
                <p className="stats-heading">Store</p>
              </div>
            </div>
          </div>
          <div class="col d-flex justify-content-center">
            <div className="stats-item border-dotted">
              <div>
                <h5 className="stats-heading fw-bold">153</h5>
                <p className="stats-heading">Menu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStatistic;
