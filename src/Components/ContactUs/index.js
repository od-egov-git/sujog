import React from "react";
import { connect, useSelector } from "react-redux";
import usePageLocalization from "../../utils/usePageLocalization";


function ContactUs({language}) {
  const translations = usePageLocalization(language, 'contactus');

    return <main id="main">

{/* 
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>{translations.contactus}</h2>
          <ol>
            <li><a href="home">{translations.home}</a></li>
            <li>{translations.contact}</li>
          </ol>
        </div>

      </div>
    </section> */}

    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title" style={{marginTop: "30px"}}>
          <h2>{translations.contactus}</h2>
        </div>

        <div class="row">

          <div class="col-lg-6 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up">
            <div class="info-box">
              <i class="bx bx-map"></i>
              <h3>{translations.ourAddress}</h3>
              <p>{translations.bbsr}</p>
            </div>
          </div>

          <div class="col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
            <div class="info-box">
              <i class="bx bx-envelope"></i>
              <h3>{translations.email}</h3>
              <p>helpdesk.sujog@odisha.gov.in</p>
            </div>
          </div>

          <div class="col-lg-3 d-flex align-items-stretch aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
            <div class="info-box ">
              <i class="bx bx-phone-call"></i>
              <h3>{translations.callus}</h3>
              <p>1800 121 6833</p>
            </div>
          </div>

          {/* <div class="col-lg-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
            <form action="forms/contact.php" method="post" role="form" class="php-email-form">
              <div class="form-row">
                <div class="col-lg-6 form-group">
                  <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                  <div class="validate"></div>
                </div>
                <div class="col-lg-6 form-group">
                  <input type="email" class="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                  <div class="validate"></div>
                </div>
              </div>
              <div class="form-group">
                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                <div class="validate"></div>
              </div>
              <div class="form-group">
                <textarea class="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                <div class="validate"></div>
              </div>
              <div class="mb-3">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div> */}

        </div>

      </div>
    </section>

  </main>
};
const mapStateToProps = (state) => ({
	language: state.localization.language,
});

export default connect(mapStateToProps)(ContactUs);
