import React from 'react';
import Image from "next/image";
import Link from 'next/link';


type PropsComponent = {
  img: string;
  title: string;
  list: Array<string>;
  href: string;
};

function ServiceItem(props: PropsComponent) {
  const bullets = props.list
  return (
    <section className="news-block-one">
      <div className="inner-box">
        <div className="image-box">
          <figure className="image">
            <Link href={props.href}>
              <Image
                className='image-box image'
                src={props.img}
                alt="img PrismaQila"
                width="250" height="380"
              />
            </Link>
          </figure>
        </div>
        <div className="lower-content">
          <div className="category">
            <Link href="blog-details.html">{props.title}</Link>
            </div>
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
          <Link href={props.href} className="btn-custom">
            Saber más
          </Link>
        </div>
      </div>
    </section>

  )
}

export { ServiceItem };