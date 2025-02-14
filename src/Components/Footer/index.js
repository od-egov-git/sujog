import React from "react";
import { Link } from "react-router-dom";
import { showFormattedCurrentDate } from "../../Actions/CommonFunctions";
import { connect, useSelector } from "react-redux";
import usePageLocalization from "../../utils/usePageLocalization";

function Footer({ language }) {
  const translations = usePageLocalization(language, 'footer');
  const username = ["h", "e", "l", "p", "d", "e", "s", "k", ".", "s", "u", "j", "o", "g"];
  const domain = ["o", "d", "i", "s", "h", "a", ".", "g", "o", "v", ".", "i", "n"];
  const email = username.join("") + "@" + domain.join("");
  return (
    <>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 footer-info"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src="assets/img/Sujog.jpg" alt="" />
                <p>
                  {translations.huddDisclaimer}
                </p>
                <p>{translations.lastUpdate} {showFormattedCurrentDate()}</p>
              </div>

              <div class="col-lg-4 col-md-6 footer-links">
                <h4>{translations.quickLinks}</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="contactus">{translations.contact}</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="assets/img/Sujog_T&C.pdf" target="_blank">
                      {translations.termsOfService}
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a
                      href="assets/img/SUJOG Privacy Policy_2024.pdf"
                      target="_blank"
                    >
                      {translations.privacyPolicy}
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-links">
                <h4>{translations.address}</h4>
                <ul>
                  <li>
                    <i class="bx bx-map"></i> {translations.city}{" "}
                  </li>
                  <li>
                    <i class="bx bx-envelope"></i>{translations.helpdeskEmail}{" "}
                    <img src="/Deshboard/images/contact_email.PNG" alt="Contact Email" />
                  </li>
                  <li>
                    <i class="bx bx-mobile"></i> {translations.helpdeskPhone}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright">
            <p>
              {translations.copyrightText}
            </p>
          </div>
        </div>
      </footer>
      <a href="#" class="back-to-top">
        <i class="icofont-simple-up"></i>
      </a>

      <a href="#" class="back-to-top">
        <i class="icofont-simple-up"></i>
      </a>
    </>
  );
}
const mapStateToProps = (state) => ({
  language: state.localization.language,
});

export default connect(mapStateToProps)(Footer);
