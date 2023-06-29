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
  autoplayTimeout: 5000,
  children: null,
};

function Testimonials() {
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
          <h6 className="title_pink">Testimonials</h6>
          <h2>Our happy customers</h2>
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
                          <h6>Before</h6>
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
                          <h6>After</h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <h4>primero</h4>
                    <div className="text">
                      <p>
                        {`1000% mejor, muchas gracias!`}
                      </p>
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
                          <h6>Before</h6>
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
                          <h6>After</h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <h4>second</h4>
                    <div className="text">
                      <p>
                        {`
                          Mut brillante y reluciente gracias...
                        `}
                      </p>
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
                          <h6>Before</h6>
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
                          <h6>After</h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <h4>third</h4>
                    <div className="text">
                      <p>
                        {`
                          1000 por ciento mejor, Gracias!
                        `}
                      </p>
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
                          <h6>Before</h6>
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
                          <h6>After</h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <h4>4</h4>
                    <div className="text">
                      <p>
                        {`
                          1000 por ciento mejor, Gracias!
                        `}
                      </p>
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
                          <h6>Before</h6>
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
                          <h6>After</h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <h4>5</h4>
                    <div className="text">
                      <p>
                        {`
                          1000 por ciento mejor, Gracias!
                        `}
                      </p>
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
                          <h6>Before</h6>
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
                          <h6>After</h6>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <h4>6</h4>
                    <div className="text">
                      <p>
                        {`
                          1000 por ciento mejor, Gracias!
                        `}
                      </p>
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
