import React from "react";
import { useTranslation } from "next-i18next";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const { t } = useTranslation("common");

  const banners = [
    {
      id: "banner_1",
      imgUrl: "url(/assets/imgs/banner/banner-2.jpg",
      title: t("home.carousel.banner_1_title"),
      description: t("home.carousel.banner_1_description"),
      link: "about.html",
      btnLabel: t("home.carousel.banner_1_btnLabel"),
    },
    {
      id: "banner_2",
      imgUrl: "url(/assets/imgs/banner/banner-2.jpg)",
      title: t("home.carousel.banner_2_title"),
      description: t("home.carousel.banner_2_description"),
      link: "service.html",
      btnLabel: t("home.carousel.banner_2_btnLabel"),
    },
    {
      id: "banner_3",
      imgUrl: "url(/assets/imgs/banner/banner-3.jpg)",
      title: t("home.carousel.banner_3_title"),
      description: t("home.carousel.banner_3_description"),
      link: "about.html",
      btnLabel: t("home.carousel.banner_3_btnLabel"),
    },
  ];

  return (
    <section className="banner-section style-one">
      <div className="banner-carousel owl-theme owl-carousel">
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
      </div>
    </section>
  );
}

export default Carousel;
