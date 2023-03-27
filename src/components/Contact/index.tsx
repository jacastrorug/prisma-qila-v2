import React from 'react';
import { MdEmail } from 'react-icons/md';
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaMobileAlt,
} from "react-icons/fa";

function ContactComponent() {
  return (
    <>
      <section
        className="page-title contact-page style-two centred"
        style={{ backgroundImage: 'url(/assets/imgs/banner/banner-2.jpg' }}
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="title">
              <h1>Contáctanos</h1>
            </div>
          </div>
        </div>
      </section>
      <section className="contact-info-section">
        <div className="auto-container">
          <div className="inner-container">
            <div className="row clearfix">
              <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                <div className="single-info-box">
                  <div className="inner-box">
                    <div className="contact-card_img ">
                      <i>
                        <FaMobileAlt size={45} style={{color: '#e5007d'}} />
                      </i>
                    </div>
                    <h5 className="title_pink">Teléfono</h5>
                    <p><a href="tel:+1786809-7925">+1(786)809-7925</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                <div className="single-info-box">
                  <div className="inner-box">
                    <div className="contact-card_img ">
                      <i>
                        <MdEmail size={50} style={{color: '#e5007d'}} />
                      </i>
                    </div>
                    <h5 className="title_pink">Email</h5>
                    <p><a href="mailto:supportyou@info.com">info@prismaqila.com</a></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                <div className="single-info-box ">
                  <ul className="contact-social-media">
                    <li>
                      <a href="" className="icon-box">
                        <FaFacebookF size={22} />
                      </a>
                    </li>
                    <li>
                      <a href="" className="icon-box">
                        <FaTwitter size={22} />
                      </a>
                    </li>
                    <li>
                      <a href="" className="icon-box">
                        <FaYoutube size={22} />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section >
    </>
  )
}

export { ContactComponent };
