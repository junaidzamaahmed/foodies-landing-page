import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light d-flex justify-content-center py-5">
      <div class="row m-0 container">
        <div class="col-12 col-md-6">
          <h2 className="grand-hotel-font footer-heading">About Us</h2>
          <p className="fs-footer pe-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
            sed fuga molestiae! Iusto, consectetur voluptate?
          </p>
        </div>
        <div class="col-12 col-md-2 pt-4 fs-footer">
          <h3 className="grand-hotel-font footer-heading-2">About</h3>
          <ul className="footer-list">
            <li>History</li>
            <li>History</li>
            <li>History</li>
            <li>History</li>
            <li>History</li>
          </ul>
        </div>
        <div class="col-12 col-md-2 pt-4 fs-footer">
          <h3 className="grand-hotel-font footer-heading-2">Services</h3>
          <ul className="footer-list">
            <li>History</li>
            <li>History</li>
            <li>History</li>
            <li>History</li>
            <li>History</li>
          </ul>
        </div>
        <div class="col-12 col-md-2 pt-4 fs-footer">
          <h3 className="grand-hotel-font footer-heading-2">Follow</h3>
          <ul className="footer-list">
            <li>History</li>
            <li>History</li>
            <li>History</li>
            <li>History</li>
            <li>History</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
