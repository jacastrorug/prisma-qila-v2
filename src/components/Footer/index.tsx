import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

import prismaqilaLogo from "../../../public/assets/imgs/prisma-qila-white.png";

function Footer() {
  const mailTo = 'mailto:info@prismaqila.com'
  return (
    <footer className="main-footer bg-color-2">
      <div className="auto-container">
        <div className="footer-top">
          <div className="row clearfix">
            <div className="col-lg-6 col-md-4 col-sm-2 footer-column">
              <div className="footer-widget contact-widget">
                <div className="widget-title">
                  <h4>Get In Touch</h4>
                </div>
                <ul className="info clearfix">
                  <li>
                    <Link href="tel:17542441721">+1 (754) 244-1721</Link>
                  </li>
                  <Link href={mailTo}>info@prismaqila.com</Link>
                </ul>
                <ul className="footer-social clearfix">
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
            <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
              <div className="footer-widget logo-widget">
                <figure className="footer-logo" style={{ textAlign: "center" }}>
                  <a href="">
                    <Image
                      src={prismaqilaLogo}
                      width="180"
                      alt="Logo PrismaQila"
                    />
                  </a>
                </figure>
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
