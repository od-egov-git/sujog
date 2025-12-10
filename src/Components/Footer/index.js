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
      <footer id="footer" className="footer-border">
        <div class="footer-top">
          <div class="container">
            <div class="row">
              <div
                class="col-lg-4 col-md-6 footer-info"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <img src="assets/img/Sujog.jpg" alt="" style={{ marginBottom: "18px" }} />
                {/* <p style={{color: "#013151", fontWeight: "bold", marginTop: "15px"}}>
                  {translations.huddDisclaimer}
                </p> */}
                <br />
                <i class="bx bx-map" style={{ margin: "10px 0px", color: "#013151", fontWeight: "bold" }}></i><span style={{ color: "#013151", fontWeight: "bold" }}> {translations.city}{" "}</span><br />
                <i class="bx bx-mobile" style={{ margin: "10px 0px", color: "#013151", fontWeight: "bold" }}></i><span style={{ color: "#013151", fontWeight: "bold" }}> {translations.helpdeskPhone}</span><br />
                <i class="bx bx-envelope" style={{ margin: "10px 0px", color: "#013151", fontWeight: "bold" }}></i> <span style={{ color: "#013151", fontWeight: "bold" }}>helpdesk[dot]sujog[at]odisha[dot]gov[dot]in{" "}</span>
              </div>

              <div class="col-lg-4 col-md-6 footer-links" style={window.innerWidth > 768 ? { marginLeft: "80px", marginRight: "-80px" } : {}}>
                <h4 style={{ color: "#F47216", fontWeight: "bold", marginTop: "5px" }}>{translations.quickLinks}</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="home" style={{ fontWeight: 'bold' }}>{translations.homeLink}</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="ulbs" style={{ fontWeight: 'bold' }}>{translations.ulbLink}</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="contactus" style={{ fontWeight: 'bold' }}>{translations.contact}</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="assets/img/Sujog_T&C.pdf" target="_blank" style={{ fontWeight: 'bold' }}>
                      {translations.termsOfService}
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a
                      href="assets/img/SUJOG Privacy Policy_2024.pdf"
                      target="_blank"
                      style={{ fontWeight: 'bold' }}
                    >
                      {translations.privacyPolicy}
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-links">
                <h4 style={{ color: "#F47216", fontWeight: "bold", marginTop: "5px" }}>{translations.termsOfUse}</h4>
                <p style={{ color: "#013151", fontWeight: "bold", marginTop: "10px", textAlign: "justify" }}>{translations.huddText}</p>
                <p style={{ color: "#013151", fontWeight: "bold", marginTop: "28px" }}>{translations.version}2.0.0</p>
                <p style={{ color: "#013151", fontWeight: "bold", marginTop: "0px" }}>{translations.lastUpdate} {showFormattedCurrentDate()}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright" style={{ height: "20px" }}>
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
