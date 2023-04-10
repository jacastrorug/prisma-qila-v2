import React from 'react';

function ContactForm() {

  return (
    <section className="contact-section service-section_container">
      <div className="auto-container">
        <div className="sec-title text-center">
          <h2 className="title_pink">Envíanos un mensaje</h2>
          <h1 className="color_text">Porfavor escríbenos y aclaremos tu dudas</h1>
        </div>
        <div className="form-inner">
          <form method="post" action="sendemail.php" id="contact-form" className="default-form">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="username" placeholder="Full Name*" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="email" name="email" placeholder="Email Address*" />
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="phone" placeholder="Phone Number"/>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                <input type="text" name="subject" placeholder="Subject*"/>
              </div>
              <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                <textarea name="message" placeholder="Your Message*"></textarea>
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
