import { useTranslation } from "next-i18next";
import Image from "next/image";
import prismaqilaLogo from "../../../public/assets/imgs/prisma-qila-black.png";

function AboutUs() {
  const { t, i18n } = useTranslation("common");
  return (
    <section className="row-direction">
      <Image src={prismaqilaLogo} width="400" alt="Logo PrismaQila" />
      <div className="text_container">
        <p className="main_text">{t("about_us")}</p>
        <p className="main_text">{t("about_us_hr")}</p>
      </div>
    </section>
  );
}

export default AboutUs;
