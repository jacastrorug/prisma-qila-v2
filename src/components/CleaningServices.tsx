import React from 'react';
import Image from "next/image";


type PropsComponent = {
  id: string;
  title: string;
  imgList: Array<string>;
  innerTxtList: Array<string>;
  description: string;
  img: string;
  text: string;
};

function CleaningServices(props: PropsComponent) {
  const images = props.imgList;
  const innerText = props.innerTxtList;
  return (
    <section className="cleaning-serv_content flex-center ">
        <section className="project-section">
          <div className="auto-container">
            <div className="sec-title text-center">
              <h2 className="title_pink">{props.title}</h2>
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
                          <h4 className="title_pink">
                            {txt}
                          </h4>
                          <a href="project-details.html">
                            <i className="fal fa-long-arrow-right"></i>
                          </a>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <section className="section-lower_container">
              <h3 className='description_cleaning'>{props.description}</h3>
              <div className="service-icons_container">
                <div className="service-icon_card">
                  <Image
                    src='/assets/imgs/plazo.png'
                    alt="img PrismaQila"
                    width="120" height="100"
                  />
                  <span className="service_span">Cotización del servicio</span>
                </div>
                <div className="service-icon_card">
                  <Image
                    src='/assets/imgs/calendar.png'
                    alt="img PrismaQila"
                    width="120" height="100"
                  />
                  <span className="service_span">Agendamiento de estimación GRATIS</span>
                </div>
                <div className="service-icon_card">
                  <Image
                    src={props.img}
                    alt="img PrismaQila"
                    width="120" height="100"
                  />
                  <span className="service_span">{props.text}</span>
                </div>
              </div>
            </section>


          </div>
        </section>
    </section>
  )
}

export { CleaningServices };
