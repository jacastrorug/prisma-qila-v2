import Image from "next/image";
import { useTranslation } from 'next-i18next';
import PictureGroup from '../../../public/assets/imgs/groupPicture.jpg'
import { TiStarFullOutline } from "react-icons/ti";
import { TiGlobe } from "react-icons/ti";
import { FaCheckCircle } from "react-icons/fa";


import { FaLeaf } from "react-icons/fa";

function ComingSoon() {
  const { t, i18n } = useTranslation("common");
  return (
    <section className="text_container_bigProyects" id="ComingSoon">
      <h6 className="title_custom ">{t("home.comingSoon.title")}</h6>

      <section className="section_content">
        <div className="section_content_imagen">
          <Image
            alt="photo"
            src={PictureGroup}
            className="section_content_img"
          />
        </div>
        <div className="section_content_text">
          <article className="article_bigProyects">
            <div className="article_title">
              <TiGlobe className="icon" />
              <h4>{t("home.comingSoon.sub_title_1")}</h4>
            </div>
            <p>{t("home.comingSoon.text_content_1")}</p>
          </article>

          <article className="article_bigProyects">
            <div className="article_title">
              <TiStarFullOutline className="icon" />
              <h4>{t("home.comingSoon.sub_title_2")}</h4>
            </div>
            <p>{t("home.comingSoon.text_content_2")}</p>
          </article>

          <article className="article_bigProyects">
            <div className="article_title">
              <FaLeaf className="icon" />
              <h4>{t("home.comingSoon.sub_title_3")}</h4>
            </div>
            <p>{t("home.comingSoon.text_content_3")}</p>
          </article>

          <article className="article_bigProyects">
            <div className="article_title">
              <FaCheckCircle className="icon" />
              <h4>{t("home.comingSoon.sub_title_4")}</h4>
            </div>
            <p>{t("home.comingSoon.text_content_4")}</p>
          </article>

        </div>

      </section>

    </section>
  )
}

export default ComingSoon;



