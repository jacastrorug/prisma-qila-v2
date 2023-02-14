import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import styles from "@/styles/components/UnderConstruction.module.css";

function UnderConstruction() {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date('03/10/2023 23:59:59')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      const day = Math.floor(difference / (1000 * 60 * 60 * 24))
      setDays(day)

      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      setHours(hours)

      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      setMinutes(minutes)

      const seconds = Math.floor((difference % (1000 * 60)) / 1000)
      setSeconds(seconds)

    }, 1000);

    return () => clearInterval(interval)
  }, [])


  const whatsappUrl = 'https://wa.me/17542441721?text=Hi,%20I%20am%20interesting%20of%20knowing%20more%20about%20your%20services!';
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
          <p className={styles.main_text}>We are building something great for you!</p>
        </section>
        <section className={styles.cards_container}>
          <div className={styles.card_item}>
            <p className={styles.card_number}>{days}</p>
            <p className={styles.card_title}>Days</p>
          </div>
          <div className={styles.card_item}>
            <p className={styles.card_number}>{hours}</p>
            <p className={styles.card_title}>Hours</p>
          </div>
          <div className={styles.card_item}>
            <p className={styles.card_number}>{minutes}</p>
            <p className={styles.card_title}>Minutes</p>
          </div>
          <div className={styles.card_item}>
            <p className={styles.card_number}>{seconds}</p>
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
              NOTIFY US
            </button>
          </section>
          <section >
            <Link
              className={styles.btn_whatsapp}
              href={whatsappUrl}
            >
              <FaWhatsapp className={styles.btn_whatsapp_icon} />
              <span>Whatsapp</span>
            </Link>
          </section>
        </article>
      </section>
    </section>
  );
}

export default UnderConstruction;
