import React from 'react';
import Image from "next/image";
import { BsCalendarWeekFill } from 'react-icons/bs';
import { FaFileInvoiceDollar } from 'react-icons/fa';
import { useTranslation } from "next-i18next";
import { IconType } from 'react-icons';


type PropsComponent = {
  id: string;
  title: string;
  imgList: Array<string>;
  innerTxtList: Array<string>;
  description: string;
  img: string;
  text: string;
  icon: IconType;
};

function CleaningServices(props: PropsComponent) {
  const images = props.imgList;
  const innerText = props.innerTxtList;
  const Icon = props.icon;

  const { t, i18n } = useTranslation("common");
  console.log(i18n);


  return (
    <section className="cleaning-serv flex-center">
      <div className="project-section ">
        <section className="">
          <div className="">
            <div className="sec-title text-center ">
              <h2 className="title_pink">{t(props.title)}</h2>
            </div>

            <div className="project-inner">
              <div className="single-item-carousel owl-carousel owl-theme owl-dots-none nav-style-one" >
                {images.map((img, index) => (
                  <div className="project-block-one" key={index}>
                    <div className="inner-box" >
                      <figure className="image-box" >
                        <Image
                          src={img}
                          alt=""
                          width={1000}
                          height={1000}
                        />
                      </figure>
                      {innerText.map((txt, index) => (
                        <div className="text" key={index}>
                          <h4 className="title_grey">
                            {t(txt)}
                          </h4>
                          <a className='flex-center'>
                            <i className="fal fa-long-arrow-right flex-center"></i>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <section className="section-lower_container">
              <h3 className='description_cleaning'>{t(props.description)}</h3>
              <div className="service-icons_container">
                <section className="service-icon_card">
                  <article className="service-container_img-title">
                    <div className='service-icon_img'>
                      <BsCalendarWeekFill
                        style={{ color: "#e5007d", fontSize: "4.5rem" }}
                      />
                    </div>
                    <span className="service_span">{t("steps.invoise")}</span>
                  </article>
                  <div className="service-number_icon">1</div>
                </section>

                <section className="service-icon_card">
                  <article className="service-container_img-title">
                    <div className='service-icon_img'>
                      <FaFileInvoiceDollar
                        style={{ color: "#e5007d", fontSize: "4.5rem" }}
                      />
                    </div>
                    <span className="service_span">{t("steps.schedule")}</span>
                  </article>
                  <div className="service-number_icon">2</div>
                </section>

                <section className="service-icon_card">
                  <article className="service-container_img-title">
                    <div className='service-icon_img'>
                      <Icon
                        style={{ color: "#e5007d", fontSize: "4.5rem" }}
                      />
                    </div>
                    <span className="service_span">{t(props.text)}</span>
                  </article>
                  <div className="service-number_icon">3</div>
                </section>
              </div>
            </section>

          </div>
        </section>
      </div>
    </section>
  )
}

export { CleaningServices };
