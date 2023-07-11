import { TOOGLE_MENU } from "@/redux/types";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaAngleDown,
  FaFacebookF,
  FaInstagram,
  FaTimes,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const mailTo = "mailto:info@prismaqila.com";

function Header() {
  const { t, i18n } = useTranslation("common");

  const dispatch = useDispatch();
  const menuIsOpen = useSelector((state: StateModel) => state.menu_is_open);

  const handleToogleMenu = () => {
    dispatch({ type: TOOGLE_MENU });
  };

  const [scrollTop, setScrollTop] = useState<string>("0rem");
  const [position, setPosition] = useState<Position>("absolute");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;

      // Mobile check
      if (window.innerWidth < 1180) {
        setScrollTop("0rem");
        setPosition("fixed");
        return;
      }

      if (currentScrollTop > 58) {
        setScrollTop("0rem");
        setPosition("fixed")
      } else {
        setScrollTop("6rem");
        setPosition("absolute");
      }
    };

    const handleResize = () => {
      if (window.innerWidth < 1180) {
        setScrollTop("0rem");
      } else {
        setScrollTop("6rem");
      }
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={menuIsOpen ? "mobile-menu-visible" : ""}>
      <header className="main-header style-five">
        <div className="header-top-two auto-hidden">
          <div className="auto-container">
            <div className="top-inner clearfix">
              <ul className="info pull-left clearfix">
                <li>
                  <i className="flaticon-telephone"></i>
                  {t("layout.header.ask_quote")}
                  <Link href="tel:17868097925">+1(786)809-7925</Link>
                </li>
                <li>
                  <i className="flaticon-email"></i>
                  <Link href={mailTo}>info@prismaqila.com</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="header-lower "
          style={{ position: position, top: scrollTop, width: "100%" }}
        >
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
                        <Link href="">{t("nav_services")}</Link>
                        <ul>
                          <li>
                            <Link href="/services/floor">
                              {t("nav_services_floor")}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/carpets">
                              {t("nav_services_carpets")}
                            </Link>
                          </li>
                          <li>
                            <Link href="/services/general">
                              {t("nav_services_general")}
                            </Link>
                          </li>
                        </ul>
                      </li>
                      <li className="dropdown">
                        <Link href="/contact">{t("nav_contact")}</Link>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>

              <div className="menu-right-content clearfix">
                <ul className="social-links clearfix">
                  <li>
                    <Link href="">
                      <FaFacebookF size={16} />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <FaTwitter size={16} />
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <FaYoutube size={16} />
                    </Link>
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
              <ul className="navigation clearfix" onClick={handleToogleMenu}>
                <li className="current dropdown">
                  <Link href="/">Home</Link>
                </li>
                <li className="dropdown" onClick={handleToogleMenu}>
                  <Link href="">{t("nav_services")}</Link>
                  <ul style={{ display: "none" }} onClick={handleToogleMenu}>
                    <li>
                      <Link href="/services/carpets">
                        {t("nav_services_carpets")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/floor">
                        {t("nav_services_floor")}
                      </Link>
                    </li>
                    <li>
                      <Link href="/services/general">
                        {t("nav_services_general")}
                      </Link>
                    </li>
                  </ul>
                  <div className="dropdown-btn">
                    <FaAngleDown size={16} />
                  </div>
                </li>
                <li className="dropdown">
                  <Link href="/contact">{t("nav_contact")}</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>
                <Link href={mailTo}>info@prismaqila.com</Link>
              </li>
              <li>
                <Link href="tel:17542441721">+1 (754) 244-1721</Link>
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
