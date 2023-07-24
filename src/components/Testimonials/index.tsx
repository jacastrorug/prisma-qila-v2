import { useTranslation } from "next-i18next";
import React from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { OwlCarouselProps } from "react-owl-carousel";

var $ = require("jquery");
if (typeof window !== "undefined") {
  //Client-side-only code
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const options: OwlCarouselProps = {
  loop: true,
  items: 1,
  margin: 0,
  nav: true,
  navText: [
    '<span class="far fa-long-arrow-up"></span>',
    '<span class="far fa-long-arrow-down"></span>',
  ],
  dots: true,
  autoplay: true,
  autoplayTimeout: 10000,
  children: null,
};

function Testimonials() {
  const { t } = useTranslation("common");

  return (
    <section className="testimonial-section">
      <div
        className="bg-layer"
        style={{
          backgroundImage: "url(assets/images/background/testimonial-1.jpg)",
        }}
      ></div>
      <div className="auto-container">
        <div className="sec-title text-center">
          <h6 className="title_pink">{t('home.testimonials.title')}</h6>
          <h2>{t('home.testimonials.sub-title')}</h2>
        </div>
        <div className="testimonial-inner">
          <OwlCarousel
            className="owl-carousel owl-theme owl-nav-none"
            {...options}
          >
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <Image
                          src="/assets/imgs/Antes-1.png"
                          alt=""
                          width="270"
                          height="335"
                        />
                        <div className="before">
                          <h6>{t("home.testimonials.before")}</h6>
                        </div>
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <Image
                          src="/assets/imgs/Despues-2.png"
                          alt=""
                          width="270"
                          height="335"
                        />
                        <div className="after">
                          <h6>{t("home.testimonials.after")}</h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="testimonial-description">
                      <p>{t("home.testimonials.banner_1")}</p>
                    </div>
                    <div className="quote-box">
                      <div className="quote">
                        <i className="flaticon-quote"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <Image
                          src="/assets/imgs/Antes-2.jpeg"
                          alt=""
                          width="270"
                          height="335"
                        />
                        <div className="before">
                          <h6>{t("home.testimonials.before")}</h6>
                        </div>
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <Image
                          src="/assets/imgs/Despues-2.jpeg"
                          alt=""
                          width="270"
                          height="335"
                        />
                        <div className="after">
                          <h6>{t("home.testimonials.after")}</h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="testimonial-description">
                      <p>{t("home.testimonials.banner_2")}</p>
                    </div>
                    <div className="quote-box">
                      <div className="quote">
                        <i className="flaticon-quote"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <Image
                          src="/assets/imgs/Antes-3.png"
                          alt=""
                          width="270"
                          height="335"
                        />
                        <div className="before">
                          <h6>{t("home.testimonials.before")}</h6>
                        </div>
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <Image
                          src="/assets/imgs/Despues-3.png"
                          alt=""
                          width="270"
                          height="335"
                        />
                        <div className="after">
                          <h6>{t("home.testimonials.after")}</h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="testimonial-description">
                      <p>{t("home.testimonials.banner_3")}</p>
                    </div>
                    <div className="quote-box">
                      <div className="quote">
                        <i className="flaticon-quote"></i>
                      </div>
                      <div
                        className="shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/icons/star-1.png)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <Image
                          src="/assets/imgs/Antes-4.png"
                          alt=""
                          width="270"
                          height="335"
                        />
                        <div className="before">
                          <h6>{t("home.testimonials.before")}</h6>
                        </div>
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <Image
                          src="/assets/imgs/Despues-4.png"
                          alt=""
                          width="270"
                          height="335"
                        />
                        <div className="after">
                          <h6>{t("home.testimonials.after")}</h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="testimonial-description">
                      <p>{t("home.testimonials.banner_4")}</p>
                    </div>
                    <div className="quote-box">
                      <div className="quote">
                        <i className="flaticon-quote"></i>
                      </div>
                      <div
                        className="shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/icons/star-1.png)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <Image
                          src="/assets/imgs/Antes-5.png"
                          alt=""
                          width="270"
                          height="335"
                        />
                        <div className="before">
                          <h6>{t("home.testimonials.before")}</h6>
                        </div>
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <Image
                          src="/assets/imgs/Despues-5.png"
                          alt=""
                          width="270"
                          height="335"
                        />
                        <div className="after">
                          <h6>{t("home.testimonials.after")}</h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="testimonial-description">
                      <p>{t("home.testimonials.banner_5")}</p>
                    </div>
                    <div className="quote-box">
                      <div className="quote">
                        <i className="flaticon-quote"></i>
                      </div>
                      <div
                        className="shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/icons/star-1.png)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image-box">
                  <div className="row clearfix">
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <Image
                          src="/assets/imgs/Antes-6.png"
                          alt=""
                          width="270"
                          height="335"
                        />
                        <div className="before">
                          <h6>{t("home.testimonials.before")}</h6>
                        </div>
                      </figure>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 column">
                      <figure className="image">
                        <Image
                          src="/assets/imgs/Despues-6.png"
                          alt=""
                          width="270"
                          height="335"
                        />
                        <div className="after">
                          <h6>{t("home.testimonials.after")}</h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="testimonial-description">
                      <p>{t('home.testimonials.banner_6')}</p>
                    </div>
                    <div className="quote-box">
                      <div className="quote">
                        <i className="flaticon-quote"></i>
                      </div>
                      <div
                        className="shape"
                        style={{
                          backgroundImage:
                            "url(assets/images/icons/star-1.png)",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
