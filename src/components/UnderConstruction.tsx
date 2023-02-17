import React from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import styles from "@/styles/components/UnderConstruction.module.css";

function UnderConstruction() {
  return (
    <section className={styles.main_section_container}>
      <section className={styles.container_full_content}>
        <section className={styles.container_logo}>
          <Image
            className={styles.logo}
            src="/assets/imgs/prisma-qila-black.png"
            alt="Logo PrismaQila"
            height={100}
            width={100}
          />
          <p className={styles.main_text}>
            We are building something great for you!
          </p>
        </section>
        <section className={styles.cards_container}>
          <div className={styles.card_item}>
            <p className={styles.card_number}>35</p>
            <p className={styles.card_title}>Days</p>
          </div>
          <div className={styles.card_item}>
            <p className={styles.card_number}>23</p>
            <p className={styles.card_title}>Hours</p>
          </div>
          <div className={styles.card_item}>
            <p className={styles.card_number}>20</p>
            <p className={styles.card_title}>Minutes</p>
          </div>
          <div className={styles.card_item}>
            <p className={styles.card_number}>42</p>
            <p className={styles.card_title}>Seconds</p>
          </div>
        </section>
        <article className={styles.section_container_buttons}>
          <section className={styles.container_btn_email}>
            <input
              className={styles.input_email}
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <button className={styles.btn_email} type="button">
              Notify
            </button>
          </section>
          <section className={styles.btn_whatsapp}>
            <FaWhatsapp className={styles.btn_whatsapp_icon} />
            <span>Whatsapp</span>
          </section>
        </article>
      </section>
    </section>
  );
}

export default UnderConstruction;
