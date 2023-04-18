import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
//import emailjs from 'emailjs-com';

function ContactForm() {
  const form = useRef(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const emailRef = useRef<HTMLInputElement>(null)
  function isValidEmail(email: string) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
  }

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = event.target.value;
    const isValid = isValidEmail(inputEmail);
  }

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const textareaValue = event.target.value;
    if (textareaValue !== null) {
      console.log(textareaValue);
    }
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const value = inputRef.current?.value ?? '';
    const emailValue = emailRef.current?.value ?? '';
    console.log('email', emailValue)
    console.log('send succesfull', value)
    if (isValidEmail(emailValue)) {
      sendEmail({ email: emailValue })
    } else {
      console.log(`invalid email, try again`)
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
        console.log(result.text);
        if (inputRef.current?.value) {
          inputRef.current.value = '';
        }

      }, (err) => {
        console.log(err)
      });
  }

  return (
    <section className="contact-section service-section_container">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2 className="title_pink">Envíanos un mensaje</h2>
          <h1 className="color_text">Porfavor escríbenos y aclaremos tu dudas</h1>
        </div>
        <div className="form-inner">
          <form id="contact-form" className="default-form" ref={form} onSubmit={handleSubmit}>
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="name" placeholder="Full Name*" onChange={handleChange} required />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="email" name="email" placeholder="Email Address*" onChange={handleChangeEmail} ref={emailRef} required />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="subject" placeholder="Subject*" onChange={handleChange} required />
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                <textarea name="message" placeholder="Your Message*" onChange={handleTextareaChange} required ></textarea>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred">
                <button className=" btn_custom theme-btn-three thm-btn" type="submit" name="submit-form">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export { ContactForm };
