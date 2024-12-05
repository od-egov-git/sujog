import React from "react";
import { connect, useSelector } from "react-redux";
import usePageLocalization from "../../utils/usePageLocalization";

function Aboutus({language}) {
  const translations = usePageLocalization(language, 'footer');

  return (
    <main id="main">
      <section className="breadcrumbs">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center">
            <h2>{translations.aboutSujogSectionTitle}</h2>
            <ol>
              <li><a href="home">{translations.breadcrumbsHome}</a></li>
              <li>{translations.breadcrumbsAboutUs}</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="inner-page about">
        <div className="container">
          <div className="row">
            <div className="row no-gutters">
              <div className="col-lg-5 video-box" data-aos="fade-up" data-aos-delay="100">
                <img src="assets/img/mobile.png" className="img-fluid" alt="" />
              </div>

              <div className="col-lg-7 d-flex flex-column">
                <div className="section-title" data-aos="fade-up" data-aos-delay="100">
                  <h2>{translations.aboutSujogSectionTitle}</h2>
                  <p>{translations.aboutSujogDescription}</p>
                </div>

                <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                  <div className="icon"><img src="assets/img/OBJECTIVE.png" className="img-fluid" alt="" /></div>
                  <h4 className="title"><a href="about.html">{translations.visionTitle}</a></h4>
                  <p className="description">{translations.visionDescription}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 col-md-6">
              <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
                <div className="icon"><img src="assets/img/vision.png" className="img-fluid" alt="" /></div>
                <h4 className="title"><a href="">{translations.objectiveTitle}</a></h4>
                <p className="description">
                  {translations.objectiveDescription}
                </p>
              </div>
            </div>

            <div className="col-lg-12 col-md-6">
              <h2>{translations.huddTitle}</h2>
              <p>{translations.huddDescription}</p>
            </div>

            <div className="col-lg-5 col-md-6">
              <div className="icon"><img src="assets/img/organization.jpg" className="img-fluid" alt="" /></div>
            </div>
            <div className="col-lg-7 col-md-6">
              <h2>{translations.organizationalStructureTitle}</h2>
              <p>{translations.organizationalStructureDescription}</p>
            </div>

            <div className="col-lg-12 col-md-6">
              <p>{translations.municipalAdministrationDescription}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => ({
  language: state.localization.language,
});

export default connect(mapStateToProps)(Aboutus);
