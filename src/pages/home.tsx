import Layout from "@/components/Layout";
import React from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

function Home() {
  const { t, i18n } = useTranslation("common");
  console.log(i18n);

  const bannersContent = [
    {
      imgUrl: "url(/assets/imgs/banner/banner-1.jpg",
      title: " Global <br /> Expertise in Sanitizing",
      paragraph: "banner_1_description",
      aHref: "about.html",
      anchor: "About Company"
    },
    {
      imgUrl: "url(/assets/imgs/banner/banner-2.jpg)",
      title: "The Fine <br /> Experience of Cleaning",
      paragraph: "Must explain to you how all this mistaken idea denouncing pleasure and praising pain was born will give you.",
      aHref: "service.html",
      anchor: "Our Services"
    },
    {
      imgUrl: "url(/assets/imgs/banner/banner-3.jpg)",
      title: " Clean <br /> and Safe Office <br /> From Today",
      paragraph: " Indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.",
      aHref: "about.html",
      anchor: "About Company"
    },

  ]

  return (
    <Layout>
      <section className="banner-section style-one">
        <div className="banner-carousel owl-theme owl-carousel">
          <div className="slide-item">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/assets/imgs/banner/banner-1.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="content-box">
                <h2>
                  Global <br />
                  Expertise in Sanitizing
                </h2>
                <p>{t("banner_1_description")}</p>
                <div className="btn-box">
                  <a href="about.html" className="theme-btn-two thm-btn">
                    About Company
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/assets/imgs/banner/banner-2.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="content-box">
                <h2>
                  The Fine <br />
                  Experience of Cleaning
                </h2>
                <p>
                  Must explain to you how all this mistaken idea denouncing
                  pleasure and praising pain was born will give you.
                </p>
                <div className="btn-box">
                  <a href="service.html" className="theme-btn-two thm-btn">
                    Our Services
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="slide-item">
            <div
              className="image-layer"
              style={{
                backgroundImage: "url(/assets/imgs/banner/banner-3.jpg)",
              }}
            ></div>
            <div className="auto-container">
              <div className="content-box">
                <h2>
                  Clean <br />
                  and Safe Office <br />
                  From Today
                </h2>
                <p>
                  Indignation and dislike men who are so beguiled and
                  demoralized by the charms of pleasure of the moment.
                </p>
                <div className="btn-box">
                  <a href="about.html" className="theme-btn-two thm-btn">
                    About Company
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  );
}

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Home;
