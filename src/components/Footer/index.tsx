import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";

import prismaqilaLogo from "../../../public/assets/imgs/prisma-qila-white.png";

function Footer() {
  return (
    <footer className="main-footer bg-color-2">
      <div className="auto-container">
        <div className="footer-top">
          <div className="row clearfix">
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo" style={{ textAlign: "center" }}>
                  <a href="">
                    <Image
                      src={prismaqilaLogo}
                      width="150"
                      alt="Logo PrismaQila"
                    />
                  </a>
                </figure>
                <div className="text">
                  <p>
                    Indignation and dislike men who are so beguiled and
                    demoralized moment by desire.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h4>Company</h4>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li>
                      <a href="">Home</a>
                    </li>
                    <li>
                      <a href="">About Us</a>
                    </li>
                    <li>
                      <a href="">Our Team</a>
                    </li>
                    <li>
                      <a href="">How it Work</a>
                    </li>
                    <li>
                      <a href="">Partners</a>
                    </li>
                    <li>
                      <a href="">Projects</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h4>Our Services</h4>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li>
                      <a href="">Commercial</a>
                    </li>
                    <li>
                      <a href="">Residential</a>
                    </li>
                    <li>
                      <a href="">Industries</a>
                    </li>
                    <li>
                      <a href="">Service Area</a>
                    </li>
                    <li>
                      <a href="">Why Sanito</a>
                    </li>
                    <li>
                      <a href="">Reviews</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget links-widget">
                <div className="widget-title">
                  <h4>Essentials</h4>
                </div>
                <div className="widget-content">
                  <ul className="links-list clearfix">
                    <li>
                      <a href="">FAQ’s</a>
                    </li>
                    <li>
                      <a href="">Pricing Plan</a>
                    </li>
                    <li>
                      <a href="">Feedback</a>
                    </li>
                    <li>
                      <a href="">Policies</a>
                    </li>
                    <li>
                      <a href="">Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget contact-widget">
                <div className="widget-title">
                  <h4>Get In Touch</h4>
                </div>
                <ul className="info clearfix">
                  <li>
                    <a href="tel:4412345678">+44 123-456-78</a>
                    <a href="mailto:support@info.com">support@info.com</a>
                  </li>
                  <li>191 Integer Road, Unit 4 Avalon, Los Angeles - 90003</li>
                </ul>
                <ul className="footer-social clearfix">
                  <li>
                    <a href="">
                      <FaFacebookF size={16} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaTwitter size={16} />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <FaYoutube size={16} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom centred">
          <p>
            &copy; {new Date().getFullYear()} PrismaQila - Cleaning Solutions.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
