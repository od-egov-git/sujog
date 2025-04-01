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
        {/* <div className="chif aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
          <img alt="homepage" src="assets/img/CM_DCM.png" style={{transform: "scale(1.6) translateX(-13.5%) translateY(47%)"}} />
        </div> */}
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
              <div style={{ position: "absolute", zIndex: "99", left: "20px", right: "50px", top: "20px" }}>
                <img style={{ width: "180px" }} src="assets/img/Odisha-cm.png" />
                <div class="company-badge" style={{ paddingLeft: "16px", backgroundColor: "rgba(255, 255, 255, 0.85)", left: "-10px" }}>
                  <span style={{ color: "#F47216", fontSize: "18px" }}>Shri Mohan Charan Majhi </span><br />
                  <span> Hon'ble Chief Minister</span>
                </div>
              </div>
              <div className="carousel-inner" role="listbox">
                <div
                  className="carousel-item active"
                  style={{
                    backgroundImage: "url('assets/img/slide/utkarsh_odisha.webp')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content container"></div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{
                    backgroundImage: "url('assets/img/cover_image_3.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content container"></div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{
                    backgroundImage: "url('assets/img/slide/utkarsh_odisha_2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content container"></div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{
                    backgroundImage: "url('assets/img/cover_image_2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content container"></div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{
                    backgroundImage: "url('assets/img/cover_image_4.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                  }}
                >
                  <div className="carousel-container">
                    <div className="carousel-content container"></div>
                  </div>
                </div>
                <div
                  className="carousel-item"
                  style={{
                    backgroundImage: "url('assets/img/cover_image_6.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
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
            <div class="row no-gutters" style={{ background: "url('/assets/img/Banner.jpg')" }}>
              {/* <div
                class="col-lg-5 col-md-6 video-box"
                data-aos="fade-up"
                data-aos-delay="100"
                style={{ overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center" }}
              >
                <img src="assets/img/CM_DCM (2).png" class="img-fluid" alt="" style={{ transform: "scale(0.9) translateX(0%) translateY(8%)" }} />
              </div> */}

              <div class="col-lg-12 col-md-12 d-flex flex-column align-items-center justify-content-center" style={{ marginTop: "30px" }}>
                <div
                  class="section-title"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h2 style={{ textAlign: "center" }}>{translations.aboutSujog}</h2>
                  <p style={{ padding: "25px" }}>
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
                  style={{ backgroundColor: "#F47216" }}
                >
                  {translations.readMore}
                </a>
              </div>

              <div className="col-lg-12 col-md-12 text1" style={{ marginTop: "20px", borderRadius: "20px" }}>
                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div className="collapse" id="collapseExample">
                    <div className="" style={{ marginTop: "10px", marginBottom: "10px", padding: "20px" }}>
                      {/* Vision Section */}
                      <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon" style={{ margin: "20px", marginRight: "30px" }}>
                          <img src="assets/img/vision_orange.png" className="img-fluid" alt="" />
                        </div>
                        <div style={{ flexGrow: 1, marginLeft: "54px" }}>
                          <h4 className="title">
                            <a href="about.html">{translations.visionTitle}</a>
                          </h4>
                          <p className="description">{translations.visionDescription}</p>
                        </div>
                      </div>
                    </div>
                    <div className="" style={{ marginTop: "20px", marginBottom: "10px", padding: "20px" }}>
                      {/* Objective Section */}
                      <div className="icon-box d-flex align-items-center" data-aos="fade-up" data-aos-delay="100">
                        <div className="icon" style={{ marginLeft: "20px", marginTop: "0px", flexShrink: 0, height: "100%" }}>
                          <img src="assets/img/objective_orange.png" className="img-fluid" alt="" />
                        </div>
                        <div style={{ flexGrow: 1, marginLeft: "30px" }}>
                          <h4 className="title" style={{ marginLeft: "30px" }}>
                            <a href="">{translations.objectiveTitle}</a>
                          </h4>
                          <p className="description" style={{ textAlign: "left", marginLeft: "30px" }}>
                            {translations.objectiveDescription}
                            <br />
                            <strong>a.</strong> {translations.objectivePointA}
                            <br />
                            <strong>b.</strong> {translations.objectivePointB}
                            <br />
                            <strong>c.</strong> {translations.objectivePointC}
                            <br />
                            <strong>d.</strong> {translations.objectivePointD}
                            <br />
                            {/* <i className="bx bx-wifi-0"></i> {translations.objectivePointC2}
                          <br />
                          <i className="bx bx-wifi-0"></i> {translations.objectivePointC3}
                          <br /> */}
                            <strong>e.</strong> {translations.objectivePointE}
                            <br />
                            <strong>f.</strong> {translations.objectivePointF}
                            <br />
                            <strong>g.</strong> {translations.objectivePointG}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <section className="counts section-bg2" style={{ marginTop: "25px" }}>
          <div className="container">
            <div className="section-title">
              <h2 style={{ textAlign: "center" }}>{translations.servicesTitle}</h2>
              <p>{translations.servicesDescription}</p>
            </div>
            <div className="row">
              {/* Building Permission Approval */}
              <div className="col-lg-6 col-md-6 content-item" data-aos="fade-up">
                <div className="count-box">
                  <img src="assets/img/bpa_orange.png" alt="" style={{ width: "13%" }} />
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
                  <img src="assets/img/pgr_orange.png" alt="" style={{ width: "15%" }} />
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
                  <img src="assets/img/trade_orange.png" alt="" style={{ width: "13%" }} />
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
                  <img src="assets/img/property_orange.png" alt="" style={{ width: "15%" }} />
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
                  <img src="assets/img/water_orange.png" alt="" style={{ width: "17%" }} />
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
                  <img src="assets/img/marriage_orange.png" alt="" style={{ width: "15%" }} />
                  <div className="servic-right">
                    <h4>
                      <Link to="mr">{translations.marriageRegistrationTitle}</Link>
                    </h4>
                    <p>{translations.marriageRegistrationDescription}</p>
                  </div>
                </div>
              </div>

              {/* Layout Approval */}
              <div
                className="col-lg-6 col-md-6 content-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="count-box">
                  <img src="assets/img/layoutapproval_orange.png" alt="" style={{ width: "15%" }} />
                  <div className="servic-right">
                    <h4>
                      <Link to="">{translations.layoutApprovalTitle}</Link>
                    </h4>
                    <p>{translations.layoutApprovalDescription}</p>
                  </div>
                </div>
              </div>

              {/* Land and Building Regularization */}
              {/* <div
                className="col-lg-6 col-md-6 content-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="count-box">
                  <img src="assets/img/finance.png" alt="" />
                  <div className="servic-right">
                    <h4>
                      <Link to="">{translations.regularizationTitle}</Link>
                    </h4>
                    <p>{translations.regularizationDescription}</p>
                  </div>
                </div>
              </div> */}

              {/* Faecal Sludge and Septage Management */}
              <div
                className="col-lg-6 col-md-6 content-item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="count-box">
                  <img src="assets/img/fssm.svg" alt="" style={{ width: "15%" }} />
                  <div className="servic-right">
                    <h4>
                      <Link to="">{translations.fssmTitle}</Link>
                    </h4>
                    <p>{translations.fssmDescription}</p>
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
                    <h4 style={{ color: "#F47216" }}>{translations.whatsNewTitle}</h4>
                  </div>
                  <div className="body1-left-side">
                    <div className="block-hdnews">
                      <div className="list-wrpaaer">
                        <ul
                          className="list-aggregate"
                          id="marquee-vertical-2"
                        // style={{ display: 'block' }}
                        >
                          <li>
                            {/* <div className="policy-img2">
                              <h4>{translations.award1DateMonth}</h4>
                              <span>{translations.award1DateYear}</span>
                            </div> */}
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
                              {/* <p>{translations.award1Description}</p> */}
                            </div>
                          </li>
                          <li>
                            {/* <div className="policy-img2">
                              <h4>{translations.award2DateMonth}</h4>
                              <span>{translations.award2DateYear}</span>
                            </div> */}
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
                              {/* <p>{translations.award2Description}</p> */}
                            </div>
                          </li>
                          <li>
                            {/* <div className="policy-img2">
                              <h4>{translations.award2DateMonth}</h4>
                              <span>{translations.award2DateYear}</span>
                            </div> */}
                            <div className="buy-policy-2">
                              <h3>
                                <a
                                  href={translations.award3Link}
                                  rel="noreferrer"
                                  target="_blank"
                                >
                                  {translations.award3Title}
                                </a>
                              </h3>
                              {/* <p>{translations.award2Description}</p> */}
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
                  <h2 style={{ fontSize: "33px" }}>{translations.ulbProfileTitle}</h2>
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
                  style={{ textDecoration: 'none' }}
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
                  style={{ textDecoration: 'none' }}
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
                  style={{ textDecoration: 'none' }}
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
                  style={{ textDecoration: 'none' }}
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
                  style={{ textDecoration: 'none' }}
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
                  style={{ textDecoration: 'none' }}
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
                  style={{ textDecoration: 'none' }}
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
                  style={{ textDecoration: 'none' }}
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
