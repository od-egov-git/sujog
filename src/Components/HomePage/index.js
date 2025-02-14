import React, { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import PreApprovedInfoPopUp from "../PreApprovedInfoPopUp";
import usePageLocalization from "../../utils/usePageLocalization";

const HomePage = ({ language }) => {
  const translations = usePageLocalization(language, 'home');
  const isLoading = useSelector((state) => state.localization.isLoading);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    document.body.appendChild(script);

    const modal = document.getElementById("myModal");
    const img = document.getElementById("myImg");
    const modalImg = document.getElementById("img01");
    const captionText = document.getElementById("caption");

    if (img) {
      img.onclick = () => {
        modal.style.display = "block";
        modalImg.src = img.src;
        captionText.innerHTML = img.alt;
      };
    }

    const span = document.getElementsByClassName("close")[0];
    if (span) {
      span.onclick = () => {
        modal.style.display = "none";
      };
    }

    console.log(captionText, "Nero");

    // Cleanup function to remove the script and event listeners
    return () => {
      document.body.removeChild(script);
      if (img) img.onclick = null;
      if (span) span.onclick = null;
    };
  }, []);

  return (
    <>
      <div className="container">
        <Helmet>
          <title>{translations.application}</title>
        </Helmet>
        <div className="chif aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <img alt="homepage" src="assets/img/NewCM.jpg" style={{ width: "100%", height: "auto" }} />
        </div>
        <section id="hero">
          <div className="hero-container">
            <div
              id="heroCarousel"
              className="carousel slide carousel-fade"
              data-ride="carousel"
            >
              <ol
                className="carousel-indicators"
                id="hero-carousel-indicators"
              ></ol>
              <div className="carousel-inner" role="listbox">
                <div
                  className="carousel-item active"
                  style={{
                    backgroundImage: "url('assets/img/slide/slide-2.jpg')",
                  }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content container"></div>
                  </div>
                </div>

                <div
                  className="carousel-item"
                  style={{
                    backgroundImage: "url('assets/img/slide/slide-3.jpg')",
                  }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <main id="main">
        <div id="about" class="about about-pading">
          <div class="container">
            <div class="row no-gutters">
              <div
                class="col-lg-5 col-md-6 video-box"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <img src="assets/img/mobile.png" class="img-fluid" alt="" />
              </div>

              <div class="col-lg-7 col-md-6 d-flex flex-column">
                <div
                  class="section-title"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h2>{translations.aboutSujog}</h2>
                  <p>
                    {translations.aboutSUJOGDesc}
                  </p>
                </div>
                <a
                  class="btn btn-primary width1"
                  data-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  {translations.readMore}
                </a>
              </div>

              <div className="col-lg-12 col-md-12 text1">
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div className="collapse" id="collapseExample">
                    <div className="card card-body">
                      {/* Vision Section */}
                      <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon">
                          <img src="assets/img/OBJECTIVE.png" className="img-fluid" alt="" />
                        </div>
                        <h4 className="title">
                          <a href="about.html">{translations.visionTitle}</a>
                        </h4>
                        <p className="description">{translations.visionDescription}</p>
                      </div>

                      {/* Objective Section */}
                      <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon">
                          <img src="assets/img/vision.png" className="img-fluid" alt="" />
                        </div>
                        <h4 className="title">
                          <a href="">{translations.objectiveTitle}</a>
                        </h4>
                        <p className="description">
                          {translations.objectiveDescription}
                          <br />
                          <strong>a.</strong> {translations.objectivePointA}
                          <br />
                          <strong>b.</strong> {translations.objectivePointB}
                          <br />
                          <strong>c.</strong> {translations.objectivePointC1}
                          <br />
                          <i className="bx bx-wifi-0"></i> {translations.objectivePointC2}
                          <br />
                          <i className="bx bx-wifi-0"></i> {translations.objectivePointC3}
                          <br />
                          <strong>d.</strong> {translations.objectivePointD}
                          <br />
                          <strong>e.</strong> {translations.objectivePointE}
                          <br />
                          <strong>f.</strong> {translations.objectivePointF}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <section className="counts section-bg2">
          <div className="container">
            <div className="section-title">
              <h1>{translations.servicesTitle}</h1>
              <p>{translations.servicesDescription}</p>
            </div>
            <div className="row">
              {/* Building Permission Approval */}
              <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up">
                <div className="count-box">
                  <img src="assets/img/servic-1.png" alt="" />
                  <div className="servic-right">
                    <h4>
                      <a href="/obpas-dashboard" rel="noreferrer">
                        {translations.buildingPermissionTitle}
                      </a>
                    </h4>
                    <p>{translations.buildingPermissionDescription}</p>
                  </div>
                </div>
              </div>

              {/* Public Grievance Redressal */}
              <div
                className="col-lg-6 col-md-6 content-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="count-box">
                  <img src="assets/img/servic-2.png" alt="" />
                  <div className="servic-right">
                    <h4>
                      <Link to="pgr">{translations.pgrTitle}</Link>
                    </h4>
                    <p>{translations.pgrDescription}</p>
                  </div>
                </div>
              </div>

              {/* Trade License */}
              <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up">
                <div className="count-box">
                  <img src="assets/img/servic-3.png" alt="" />
                  <div className="servic-right">
                    <h4>
                      <Link to="tl">{translations.tradeLicenseTitle}</Link>
                    </h4>
                    <p>{translations.tradeLicenseDescription}</p>
                  </div>
                </div>
              </div>

              {/* Property Tax */}
              <div
                className="col-lg-6 col-md-6 content-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="count-box">
                  <img src="assets/img/servic-4.png" alt="" />
                  <div className="servic-right">
                    <h4>
                      <Link to="pt">{translations.propertyTaxTitle}</Link>
                    </h4>
                    <p>{translations.propertyTaxDescription1}</p>
                    <p>{translations.propertyTaxDescription2}</p>
                  </div>
                </div>
              </div>

              {/* Water & Sewerage */}
              <div
                className="col-lg-6 col-md-6 content-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="count-box">
                  <img src="assets/img/water.png" alt="" />
                  <div className="servic-right">
                    <h4>
                      <Link to="wns">{translations.waterSewerageTitle}</Link>
                    </h4>
                    <p>{translations.waterSewerageDescription}</p>
                  </div>
                </div>
              </div>

              {/* Marriage Registration */}
              <div
                className="col-lg-6 col-md-6 content-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="count-box">
                  <img src="assets/img/finance.png" alt="" />
                  <div className="servic-right">
                    <h4>
                      <Link to="mr">{translations.marriageRegistrationTitle}</Link>
                    </h4>
                    <p>{translations.marriageRegistrationDescription}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section className="counts section-bg3">
          <div className="container">
            <div className="row">
              {/* What's New Section */}
              <div className="col-lg-7 col-md-6 text-center" data-aos="fade-up">
                <div className="whats-new">
                  <div className="section-title">
                    <h4>{translations.whatsNewTitle}</h4>
                  </div>
                  <div className="body1-left-side">
                    <div className="block-hdnews">
                      <div className="list-wrpaaer">
                        <ul
                          className="list-aggregate"
                          id="marquee-vertical-2"
                          style={{ display: 'none' }}
                        >
                          <li>
                            <div className="policy-img2">
                              <h4>{translations.award1DateMonth}</h4>
                              <span>{translations.award1DateYear}</span>
                            </div>
                            <div className="buy-policy-2">
                              <h3>
                                <a
                                  href={translations.award1Link}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  {translations.award1Title}
                                </a>
                              </h3>
                              <p>{translations.award1Description}</p>
                            </div>
                          </li>

                          <li>
                            <div className="policy-img2">
                              <h4>{translations.award2DateMonth}</h4>
                              <span>{translations.award2DateYear}</span>
                            </div>
                            <div className="buy-policy-2">
                              <h3>
                                <a
                                  href={translations.award2Link}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  {translations.award2Title}
                                </a>
                              </h3>
                              <p>{translations.award2Description}</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ULB Profile Section */}
              <div
                className="col-lg-5 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="ulb">
                  <h2>{translations.ulbProfileTitle}</h2>
                </div>
                <div className="odisha-map">
                  <img id="myImg" src="assets/img/map-2.jpg" alt={translations.ulbMapAlt} />
                </div>
              </div>

              {/* Modal */}
              <div id="myModal" className="modal">
                <span className="close">&times;</span>
                <img className="modal-content" id="img01" />
                <div id="caption"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="counts section-bg">
          <div className="container">
            <div className="section-title">
              <h3>{translations.importantLinksTitle}</h3>
            </div>

            <div className="row">
              {/* Government of Odisha Link */}
              <div className="col-lg-3 col-md-6 text-center" data-aos="fade-up">
                <a
                  href={translations.link1Url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="count-box2">
                    <h4>{translations.link1Title}</h4>
                  </div>
                </a>
              </div>

              {/* About Odisha Link */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a
                  href={translations.link2Url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="count-box2">
                    <h4>{translations.link2Title}</h4>
                  </div>
                </a>
              </div>

              {/* Odisha Online Link */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <a
                  href={translations.link3Url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="count-box2">
                    <h4>{translations.link3Title}</h4>
                  </div>
                </a>
              </div>

              {/* HUDD Link */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a
                  href={translations.link4Url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="count-box2">
                    <h4>{translations.link4Title}</h4>
                  </div>
                </a>
              </div>

              {/* Mo Sarkar Link */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a
                  href={translations.link5Url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="count-box2">
                    <h4>{translations.link5Title}</h4>
                  </div>
                </a>
              </div>

              {/* Odisha Tourism Link */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a
                  href={translations.link6Url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="count-box2">
                    <h4>{translations.link6Title}</h4>
                  </div>
                </a>
              </div>

              {/* PareshRam Link */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a
                  href={translations.link7Url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="count-box2">
                    <h4>{translations.link7Title}</h4>
                  </div>
                </a>
              </div>

              {/* Odisha Tender Link */}
              <div
                className="col-lg-3 col-md-6 text-center"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a
                  href={translations.link8Url}
                  rel="noreferrer"
                  target="_blank"
                >
                  <div className="count-box2">
                    <h4>{translations.link8Title}</h4>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>


      </main>

      <PreApprovedInfoPopUp /></>
  );
};

const mapStateToProps = (state) => ({
  language: state.localization.language,
});

export default connect(mapStateToProps)(HomePage);
