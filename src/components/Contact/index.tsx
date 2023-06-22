import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import {
  FaFacebookF,
  FaMobileAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from 'react-icons/md';

function ContactComponent() {
  const { t, i18n } = useTranslation("common");
  
  return (
    <>
      <section
        className="page-title contact-page style-two centred"
        style={{ backgroundImage: 'url(/assets/imgs/banner/banner-2.jpg' }}
      >
        <div className="auto-container">
          <div className="content-box">
            <div className="title">
              <h1>{t("contact_component.contact_component_title")}</h1>
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
                        <FaMobileAlt size={45} style={{ color: '#e5007d' }} />
                      </i>
                    </div>
                    <h5 className="title_pink">{t("contact_component.contact_phone")}</h5>
                    <p>
                      <Link href="tel:+1786809-7925">+1(786)809-7925</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                <div className="single-info-box">
                  <div className="inner-box">
                    <div className="contact-card_img ">
                      <i>
                        <MdEmail size={50} style={{ color: '#e5007d' }} />
                      </i>
                    </div>
                    <h5 className="title_pink">{t("contact_component.contact_email")}</h5>
                    <p>
                      <Link href="mailto:supportyou@info.com">info@prismaqila.com</Link>
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                <div className="single-info-box ">
                  <ul className="contact-social-media">
                    <li>
                      <Link href="" className="icon-box">
                        <FaFacebookF size={22} />
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="icon-box">
                        <FaTwitter size={22} />
                      </Link>
                    </li>
                    <li>
                      <Link href="" className="icon-box">
                        <FaYoutube size={22} />
                      </Link>
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
