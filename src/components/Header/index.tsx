import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTimes,
} from "react-icons/fa";
import { TOOGLE_MENU } from "@/redux/types";
import Image from "next/image";

function Header() {
  const dispatch = useDispatch();
  const menuIsOpen = useSelector((state: StateModel) => state.menu_is_open);

  const handleToogleMenu = () => {
    dispatch({ type: TOOGLE_MENU });
  };

  return (
    <section className={menuIsOpen ? "mobile-menu-visible" : ""}>
      <header className="main-header style-five">
        <div className="header-top-two auto-hidden">
          <div className="auto-container">
            <div className="top-inner clearfix">
              <ul className="info pull-left clearfix">
                <li>
                  <i className="flaticon-telephone"></i>Ask for a quote{" "}
                  <a href="tel:4412345678">+44 123-456-78</a>
                </li>
                <li>
                  <i className="flaticon-email"></i>
                  <a href="mailto:support@info.com">support@info.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="header-lower">
          <div className="auto-container">
            <div className="outer-box clearfix">
              <div className="menu-area pull-left clearfix">
                <div className="mobile-nav-toggler" onClick={handleToogleMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                <nav className="main-menu navbar-expand-md navbar-light">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <ul className="navigation clearfix">
                      <li className="current dropdown">
                        <a href="">Home</a>
                      </li>
                      <li className="dropdown">
                        <a href="">About</a>
                      </li>
                      <li className="dropdown">
                        <a href="">Services</a>
                        <ul>
                          <li>
                            <a href="service.html">Commerical</a>
                          </li>
                          <li>
                            <a href="service-2.html">Residential</a>
                          </li>
                          <li>
                            <a href="service-details.html">
                              Hospitality & Hotel
                            </a>
                          </li>
                          <li>
                            <a href="service-details-2.html">Municipalities</a>
                          </li>
                          <li>
                            <a href="service-details-3.html">
                              Education Centre
                            </a>
                          </li>
                          <li>
                            <a href="service-details-4.html">
                              Office Buildings
                            </a>
                          </li>
                          <li>
                            <a href="service-details-5.html">Restaurants</a>
                          </li>
                          <li>
                            <a href="service-details-6.html">Car Showrooms</a>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <a href="contact.html">Contact</a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="menu-right-content clearfix">
                <ul className="social-links clearfix">
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
      </header>

      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleToogleMenu}></div>
        <div className="close-btn" onClick={handleToogleMenu}>
          <FaTimes size={16} />
        </div>

        <nav className="menu-box">
          <div className="nav-logo">
            <a href=""></a>
          </div>
          <div className="menu-outer"></div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>Chicago 12, Melborne City, USA</li>
              <li>
                <a href="tel:+8801682648101">+88 01682648101</a>
              </li>
              <li>
                <a href="mailto:info@example.com">info@example.com</a>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <a href="">
                  <FaTwitter size={16} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaFacebookF size={16} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram size={16} />
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube size={16} />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>
  );
}

export default Header;
