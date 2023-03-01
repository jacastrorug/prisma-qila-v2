import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
import styles from "@/styles/components/UnderConstruction.module.css";
import emailjs from '@emailjs/browser';
import { useTranslation } from "next-i18next";


const DAY_MILLISECONDS = (1000 * 60 * 60 * 24)
const HOURS_MILLISECONDS = (1000 * 60 * 60)
const MINUTES_MILLISECONDS = (1000 * 60)
const SECONDS_MILLISECONDS = (1000)


function UnderConstruction() {

  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const target = new Date('03/15/2023 23:59:59')

    const interval = setInterval(() => {
      const now = new Date()
      const difference = target.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        return
      }

      const day = Math.floor(difference / DAY_MILLISECONDS)
      setDays(day)

      const hours = Math.floor((difference % DAY_MILLISECONDS) / HOURS_MILLISECONDS)
      setHours(hours)

      const minutes = Math.floor((difference % HOURS_MILLISECONDS) / MINUTES_MILLISECONDS)
      setMinutes(minutes)

      const seconds = Math.floor((difference % MINUTES_MILLISECONDS) / SECONDS_MILLISECONDS)
      setSeconds(seconds)

    }, 1000);

    return () => clearInterval(interval)
  }, [])

  const whatsappUrl = 'https://wa.me/17542440661?text=Hi,%20I%20am%20interested%20in%20knowing%20more%20about%20your%20services!';


  const form = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null)

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    //Check email validity
    const isValid = isValidEmail(inputValue);
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const value = inputRef.current?.value ?? '';

    if (isValidEmail(value)) {
      console.log('send succesfull', value)
      sendEmail({ email: value })
    } else {
      console.log(`invalid email, try again`)
    }
  }

  const sendEmail = (form: { [key: string]: any }) => {
    const templateParams = {
      from_name: form.email
    };

    emailjs.send('service_yh4bx2k', 'template_9998i0f', templateParams, 'UmKaAQ9Cah4KKB30y')
      .then((result) => {
        console.log(result.text);
        if (inputRef.current?.value) {
          inputRef.current.value = '';
        }

      }, (err) => {
        console.log(err)
      });
  }

  const { t, i18n } = useTranslation("common");
  console.log(i18n);

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
            {t("main_text_underConstruction")}
          </p>
        </section>
        <section className={styles.cards_container}>
          <div className={styles.card_item}>
            <p className={styles.card_number}>{days}</p>
            <p className={styles.card_title}>
              {t("days_text_underConstruction")}
            </p>
          </div>
          <div className={styles.card_item}>
            <p className={styles.card_number}>{hours}</p>
            <p className={styles.card_title}>
              {t("hours_text_underConstruction")}
            </p>
          </div>
          <div className={styles.card_item}>
            <p className={styles.card_number}>{minutes}</p>
            <p className={styles.card_title}>
              {t("minutes_text_underConstruction")}
            </p>
          </div>
          <div className={styles.card_item}>
            <p className={styles.card_number}>{seconds}</p>
            <p className={styles.card_title}>
              {t("seconds_text_underConstruction")}
            </p>
          </div>
        </section>
        <article className={styles.section_container_buttons} >
          <form
            className={styles.container_btn_email}
            ref={form}
            onSubmit={handleSubmit}>
            <input
              className={styles.input_email}
              type="email"
              name="email"
              placeholder={t("input_placeholder")}
              onChange={handleChange}
              ref={inputRef}
            />
            <button className={styles.btn_email} type="submit" >
              {t("notify_btn")}
            </button>
          </form>
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
