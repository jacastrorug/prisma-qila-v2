import React from "react";

type PropsComponent = {
  img: string;
  title: string;
  subtitle?: string;
  description: string;
  link: string;
  btnLabel: string;
};

function CarouselItem(props: PropsComponent) {
  return (
    <div className="slide-item">
      <div
        className="image-layer"
        style={{
          backgroundImage: props.img,
        }}
      ></div>
      <div className="auto-container">
        <div className="content-box">
          <h2>
            {props.title} <br />
            {props.subtitle}
          </h2>
          <p>{props.description}</p>
          <div className="btn-box">
            <a href={props.link} className="theme-btn-two thm-btn">
              {props.btnLabel}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
