import React from "react";
import Link from "next/link"


type PropsComponent = {
  img: string;
  title: string;
  subtitle?: string;
  description: string;
  link?: string;
  btnLabel?: string;
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
          {props.link && (
            <div className="btn-box">
              <Link href={props.link} className="theme-btn-two thm-btn">
                {props.btnLabel}
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarouselItem;
