import React from 'react';
import Image from "next/image";


type PropsComponent = {
  id: string;
  title: string;
  imgList: Array<string>;
  description: string;
  img: string;
  text: string;
};

function CleaningServices(props: PropsComponent) {
  const images = props.imgList;
  return (
    <section className="service-section_container ">
      <div className="cleaning-serv_content flex-center">
        <h1 className="title_cleaning">{props.title}</h1>
        <section className="carousel">
          <section className="banner-section style-one">
            <div className="banner-carousel owl-theme owl-carousel">
              {images.map((image, index) => (
                <div key={index} className="slide-item">
                  <div className="image-layer"
                    style={{
                      backgroundImage: image,
                    }}
                  >
                  </div>
                </div>
              ))}
            </div>
          </section >
        </section>
        <section>
          <h3 className='description_cleaning'>{props.description}</h3>
          <div className="service-icons_container">
            <div className="service-icon_card">
            <Image
              src='/assets/imgs/plazo.png'
              alt="img PrismaQila"
              width="120" height="100"
            />
            <span className="service_span">Cotizacion del servicio</span>
            </div>
            <div className="service-icon_card">
            <Image
              src='/assets/imgs/calendar.png'
              alt="img PrismaQila"
              width="120" height="100"
            />
            <span className="service_span">Agendamiento de estimacion GRATIS</span>
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
  )
}

export { CleaningServices };
