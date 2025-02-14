import React from "react";
import { connect, useSelector } from "react-redux";
import usePageLocalization from "../../utils/usePageLocalization";

function RTI({ language }) {
  const translations = usePageLocalization(language, 'rti');
  return <main id="main">


    <section className="breadcrumbs">
      <div className="container">

        <div className="d-flex justify-content-between align-items-center">
          <h2>{translations.home}</h2>
          <ol>
            <li><a href="/home">{translations.breadcrumb1}</a></li>
            <li>{translations.breadcrumb2}</li>
          </ol>
        </div>

      </div>
    </section>

    <section className="inner-page about">
      <div className="container">
        <div className="row">

          <div className="row no-gutters">
            <div className="col-lg-12 d-flex flex-column">

              <div className="section-title" data-aos="fade-up" data-aos-delay="100">
                <h2>{translations.subHeder}</h2>
                <p>{translations.rtiAct}
                </p>
                <br />
                <p>
                  {translations.rtiAct1}
                </p>

                <p><a href="assets/img/rti-act-2005.pdf" target="_blank" rel="noreferrer" >{translations.link1} </a></p>
                <p><a href="assets/img/Right-Inforamtion-Act-2005-Odia.pdf" target="_blank" rel="noreferrer" > {translations.link2} </a></p>
                <p><a href="assets/img/Odisha-Right-to-Information-Rules-2005-Odia-2-ok.pdf" target="_blank" rel="noreferrer"> {translations.link3} </a></p>
                <p><a href="assets/img/Odisha-RTI-Amendment-Rules-2006.pdf" target="_blank" rel="noreferrer">{translations.link4}</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
};
const mapStateToProps = (state) => ({
  language: state.localization.language,
});

export default connect(mapStateToProps)(RTI);