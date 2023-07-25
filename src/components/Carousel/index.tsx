import React from "react";
import { useTranslation } from "next-i18next";
import { OwlCarouselProps } from "react-owl-carousel";
import CarouselItem from "./CarouselItem";

var $ = require("jquery");
if (typeof window !== "undefined") {
  //Client-side-only code
  window.$ = window.jQuery = require("jquery");
}

import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), { ssr: false });

const options: OwlCarouselProps = {
  loop: true,
  margin: 0,
  nav: true,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  smartSpeed: 1000,
  autoPlay: true,
  children: null,
  navText: [
    '<span class="fal fa-angle-right"></span>',
    '<span class="fal fa-angle-left"></span>',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    800: {
      items: 1,
    },
    1024: {
      items: 1,
    },
  },
};

function Carousel() {
  const { t } = useTranslation("common");

  const banners = [
    {
      id: "banner_1",
      imgUrl: "url(/assets/imgs/banner/SliderPisos.png",
      title: t("home.carousel.banner_1_title"),
      description: t("home.carousel.banner_1_description"),
      link: "/services/floor",
      btnLabel: t("home.carousel.banner_1_btnLabel"),
    },
    {
      id: "banner_2",
      imgUrl: "url(/assets/imgs/banner/SliderAlfombras.png)",
      title: t("home.carousel.banner_2_title"),
      description: t("home.carousel.banner_2_description"),
      link: "/services/carpets",
      btnLabel: t("home.carousel.banner_2_btnLabel"),
    },
    {
      id: "banner_3",
      imgUrl: "url(/assets/imgs/banner/SliderLimpiezagral.png)",
      title: t("home.carousel.banner_3_title"),
      description: t("home.carousel.banner_3_description"),
      link: "/services/general",
      btnLabel: t("home.carousel.banner_3_btnLabel"),
    },
  ];

  return (
    <section className="banner-section style-one">
      <OwlCarousel
        className="banner-carousel owl-theme owl-carousel"
        {...options}
      >
        {banners.map((banner) => (
          <CarouselItem
            key={banner.id}
            img={banner.imgUrl}
            title={banner.title}
            description={banner.description}
            link={banner.link}
            btnLabel={banner.btnLabel}
          />
        ))}
      </OwlCarousel>
    </section>
  );
}

export default Carousel;
