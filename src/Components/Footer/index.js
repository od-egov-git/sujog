import React from "react";
import { Link } from "react-router-dom";
import { showFormattedCurrentDate } from "../../Actions/CommonFunctions";

function Footer() {
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
                  HUDD does not give any warranties, whether express or implied,
                  as to the suitability or usability of the Sujog Portal, its
                  software or any of its content.
                </p>
                <p>Last Update: {showFormattedCurrentDate()}</p>
              </div>

              <div class="col-lg-4 col-md-6 footer-links">
                <h4>Quick link</h4>
                <ul>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <Link to="contactus">contact</Link>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a href="assets/img/Sujog_T&C.pdf" target="_blank">
                      Terms of service
                    </a>
                  </li>
                  <li>
                    <i className="bx bx-chevron-right"></i>{" "}
                    <a
                      href="assets/img/SUJOG Privacy Policy.pdf"
                      target="_blank"
                    >
                      Privacy policy
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-lg-4 col-md-6 footer-links">
                <h4>address</h4>
                <ul>
                  <li>
                    <i class="bx bx-map"></i> Bhubaneswar{" "}
                  </li>
                  <li>
                    <i class="bx bx-envelope"></i>helpdesk.sujog@odisha.gov.in{" "}
                  </li>
                  <li>
                    <i class="bx bx-mobile"></i> 1800 121 6833
                  </li>
                </ul>
              </div>

              {/* <!-- <div class="col-lg-4 col-md-6 footer-newsletter">
              <h4>Our Newsletter</h4>
              <form action="" method="post">
                <input type="email" name="email"><input type="submit" value="Subscribe">
          </form>
        </div> --> */}
            </div>
          </div>
        </div>

        <div class="container">
          <div class="copyright">
            <p>
              @2021 Govt. of Odisha. Design & Developed by sujog. Site best
              viewed in Chrome and above (1280 X 800)
            </p>
          </div>
        </div>
      </footer>
      <a href="#" class="back-to-top">
        <i class="icofont-simple-up"></i>
      </a>
    </>
  );
}
export default Footer;
