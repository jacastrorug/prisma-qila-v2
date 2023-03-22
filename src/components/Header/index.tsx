import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaTimes,
  FaAngleDown,
} from "react-icons/fa";
import { TOOGLE_MENU } from "@/redux/types";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const { t, i18n } = useTranslation("common");

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
                  <i className="flaticon-telephone"></i>
                  {t("layout.header.ask_quote")}{" "}
                  <a href="tel:17542441721">+1 (754) 244-1721</a>
                </li>
                <li>
                  <i className="flaticon-email"></i>
                  <a href="mailto:info@prismaqila.com">info@prismaqila.com</a>
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
                        <Link href="/">Home</Link>
                      </li>
                      <li className="dropdown">
                        <Link href="/services/carpets">Services</Link>
                        <ul>
                          <li>
                            <Link href="/services/carpetss">
                              Limpieza Alfombras
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/carpetss">
                              Limpieza de Pisos
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/carpetss">
                              Limpieza General
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link href="/">Contact</Link>
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
            <Image
              src="/assets/imgs/prisma-qila-white.png"
              alt="PrismaQila Logo"
              width="150"
              height="150"
            />
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li className="current dropdown">
                  <Link href="/">Home</Link>
                </li>
                <li className="dropdown">
                  <Link href="/services/carpets">Services</Link>
                  <ul style={{ display: "none" }}>
                    <li>
                      <Link href="/services/carpetss">Limpieza Alfombras</Link>
                    </li>
                    <li>
                      <Link href="/services/carpetss">Limpieza de Pisos</Link>
                    </li>
                    <li>
                      <Link href="/services/carpetss">Limpieza General</Link>
                    </li>
                  </ul>
                  <div className="dropdown-btn">
                    <FaAngleDown size={16} />
                  </div>
                </li>
                <li className="dropdown">
                  <Link href="/">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
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
