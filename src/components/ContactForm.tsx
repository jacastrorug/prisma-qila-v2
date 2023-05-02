import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'next-i18next';
//import emailjs from 'emailjs-com';

interface FormProperties extends HTMLFormControlsCollection {
  name: HTMLInputElement,
  email: HTMLInputElement,
  phone: HTMLInputElement,
  subject: HTMLInputElement,
  message: HTMLTextAreaElement
} 

function ContactForm() {
  const { t } = useTranslation("common");
  
  const formRef = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string>();

  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value;
    const isValid = isValidEmail(inputEmail);
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const elements = formRef.current?.elements as FormProperties;

    const { name, email, phone, subject, message } = elements;

    if(email.value && !isValidEmail(email.value)) {
      setError('El email es inválido');
      return;
    }

    try {
      const data = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        subject: subject.value,
        message: message.value
      };

      const config: RequestInit = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      };

      const response = await fetch('/api/send_email', config);
    } catch(e) {
      console.error(e);
    }

  }

  const sendEmail = (form: { [key: string]: any }) => {
    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      from_phone: form.phone,
      subject: form.subject,
      message_html: form.message
    };

    emailjs.send('service_yh4bx2k', 'template_9998i0f', templateParams, 'UmKaAQ9Cah4KKB30y')
      .then((result) => {
        console.log('result', result.text);


      }, (err) => {
        console.log(err)
      });
  }

  return (
    <section className="contact-section service-section_container">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2 className="title_pink">{t("contact.contact_title")}</h2>
          <h1 className="color_text">{t('contact.contact_subtitle')}</h1>
        </div>
        <div className="form-inner">
          <form id="contact-form" className="default-form" ref={formRef} onSubmit={handleSubmit}>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="name" placeholder={t("contact.contact_name")} required />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="email" name="email" placeholder={t("contact.contact_email")} onChange={handleChangeEmail} required />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="phone" placeholder={t("contact.contact_Phone")} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="subject" placeholder={t("contact.contact_subject")} required />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                <textarea name="message" placeholder={t("contact.contact_message")} required ></textarea>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                <button className=" btn_custom theme-btn-three thm-btn" type="submit" name="submit-form">{t("contact.contact_btn")}</button>
              </div>
            </div>
          </form>
        </div>
        {/** TODO: Add error message */}
      </div>
    </section>
  )
}

export { ContactForm };
