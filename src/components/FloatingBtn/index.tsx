import styles from "@/styles/components/FloatingBtn.module.css";
import { useTranslation } from "next-i18next";
import Link from 'next/link';
import { FaWhatsapp } from "react-icons/fa";

function FloatingBtn() {
  const { t, i18n } = useTranslation("common");

  const whatsappMessage = t("whatsapp_message");
  const whatsappUrl = `https://wa.me/${process.env.WHATSAPP}?text=${whatsappMessage}`;
  
  return (
    <section>
      <Link
        href={whatsappUrl}
      >
        <section className={styles.btn_whatsapp_float_container}>
          <FaWhatsapp className={styles.btn_whatsapp_float_icon} />
        </section>
      </Link>
    </section>)
}

export { FloatingBtn };
