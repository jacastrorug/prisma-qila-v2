import React from 'react';
import Link from 'next/link';
import styles from "@/styles/components/FloatingBtn.module.css";
import { FaWhatsapp } from "react-icons/fa";

function FloatingBtn() {
  const whatsappUrl = 'https://wa.me/17542440661?text=Hi,%20I%20am%20interested%20in%20knowing%20more%20about%20your%20services!';
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