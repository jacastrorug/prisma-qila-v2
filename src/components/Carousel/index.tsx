import React from "react";
import { useTranslation } from "next-i18next";
import CarouselItem from "./CarouselItem";

function Carousel() {
  const { t } = useTranslation("common");

  const banners = [
    {
      id: "banner_1",
      imgUrl: "url(/assets/imgs/banner/banner-1.jpg",
      title: "Global",
      subtitle: "Expertise in Sanitizing",
      description: t("carousel.banner_1_description"),
      link: "about.html",
      btnLabel: "About Company",
    },
    {
      id: "banner_2",
      imgUrl: "url(/assets/imgs/banner/banner-2.jpg)",
      title: "The Fine",
      subtitle: "Experience of Cleaning",
      description: t("carousel.banner_2_description"),
      link: "service.html",
      btnLabel: "Our Services",
    },
    {
      id: "banner_3",
      imgUrl: "url(/assets/imgs/banner/banner-3.jpg)",
      title: "Clean",
      subtitle: "and Safe Office From Today",
      description: t("carousel.banner_3_description"),
      link: "about.html",
      btnLabel: "About Company",
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
            subtitle={banner.subtitle}
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
