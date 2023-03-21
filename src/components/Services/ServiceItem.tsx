import React from 'react';
import Image from "next/image";


type PropsComponent = {
  img: string;
  title: string;
  list: Array<string>;
};

function ServiceItem(props: PropsComponent) {
  const bullets = props.list
  return (
    <section className="news-block-one">
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <a href="blog-details.html">
              <Image
                className='image-box image'
                src={props.img}
                alt="img PrismaQila"
                width="250" height="380"
              />
            </a>
          </figure>
        </div>
        <div className="lower-content">
          <div className="category"><a href="blog-details.html">{props.title}</a></div>
          <ul className='card-list_container'>
            {bullets && bullets.map((item, index) => (
              <li
                key={index}
                className='card_bullet'>
                {item}
              </li>
            ))
            }
          </ul>
        </div>
        <div className="link tab-buttons-2  btn_container">
          <a href="blog-details.html" className="btn-custom">
            Saber más
          </a>
        </div>
      </div>
    </section>

  )
}

export { ServiceItem };