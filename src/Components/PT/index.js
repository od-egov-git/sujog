import React from "react";
import { Helmet } from "react-helmet";
import { useSelector } from 'react-redux';
import usePageLocalization from "../../utils/usePageLocalization";
function PT() {
  const language = useSelector((state) => state.localization.language);
  const t = usePageLocalization(language, 'pt');
  const ct = usePageLocalization(language, 'common');
  return (
    <div className="container">
      <div id="layoutSidenav_content">
        <Helmet>
          <title>{t.helmetTitle}</title>
        </Helmet>
        <main>
          <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
            <div className="container-fluid">
              <div className="page-header-content">
                <div className="row align-items-center justify-content-between">
                  <div className="col-auto">
                    <h1 className="page-header-title">
                      <div className="page-header-icon">
                        <i data-feather="activity"></i>
                      </div>
                      {t.title}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div className="container-fluid mt-n10">
            <div className="col">
              <div className="row">
                <div className="col-xl-12 col-md-6 mb-4 card card2">
                  <div className="card-header">{t.helmetTitle}</div>
                  <div className="row card-body">
                    <div className="col-md-12">
                      <div className="d-flex">
                        <ul id="tabs" className="nav nav-tabs" role="tablist">
                          <li className="nav-item">
                            <a
                              id="tab-A"
                              href="#pane-A"
                              className="nav-link active"
                              data-toggle="tab"
                              role="tab"
                            >
                              {ct.about}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              id="tab-B"
                              href="#pane-B"
                              className="nav-link"
                              data-toggle="tab"
                              role="tab"
                            >
                              {ct.facilities}
                            </a>
                          </li>
                          <li className="nav-item">
                            <a
                              id="tab-C"
                              href="#pane-C"
                              className="nav-link"
                              data-toggle="tab"
                              role="tab"
                            >
                              {ct.listOfDocuments}
                            </a>
                          </li>

                          <li className="nav-item">
                            <a
                              id="tab-d"
                              href="#pane-d"
                              className="nav-link"
                              data-toggle="tab"
                              role="tab"
                            >
                              {" "}
                              {ct.userManual}{" "}
                            </a>
                          </li>
                        </ul>

                        <div
                          id="content"
                          className="tab-content"
                          role="tablist"
                        >
                          <div
                            id="pane-A"
                            className="card tab-pane fade show active"
                            role="tabpanel"
                            aria-labelledby="tab-A"
                          >
                            <div
                              className="card-header"
                              role="tab"
                              id="heading-A"
                            >
                              <h5 className="mb-0">
                                <a
                                  data-toggle="collapse"
                                  href="#collapse-A"
                                  data-parent="#content"
                                  aria-expanded="true"
                                  aria-controls="collapse-A"
                                >
                                  {ct.about}
                                </a>
                              </h5>
                            </div>

                            <div
                              id="collapse-A"
                              className="collapse show"
                              role="tabpanel"
                              aria-labelledby="heading-A"
                            >
                              <div className="flex-grow-1 free-1">
                                <p>
                                  {t.about1}
                                </p>
                                <p>
                                  {t.about2}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="pane-B"
                            className="card tab-pane fade"
                            role="tabpanel"
                            aria-labelledby="tab-B"
                          >
                            <div
                              className="card-header"
                              role="tab"
                              id="heading-B"
                            >
                              <h5 className="mb-0">
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapse-B"
                                  data-parent="#content"
                                  aria-expanded="false"
                                  aria-controls="collapse-B"
                                >
                                  {ct.facilities}
                                </a>
                              </h5>
                            </div>
                            <div
                              id="collapse-B"
                              className="collapse"
                              role="tabpanel"
                              aria-labelledby="heading-B"
                            >
                              <div className="flex-grow-1 free-1">
                                <p>
                                  1. {t.registerNewProperty} <br></br>
                                  2. {t.editExistingProperty} <br></br>
                                  3. {t.transferProperty} <br></br>
                                  4. {t.initiateReassessment} <br></br>
                                  5. {t.payPropertyDemandOnline} <br></br>
                                  6. {t.trackApplicationStatus}
                                </p>
                              </div>
                            </div>
                          </div>

                          <div
                            id="pane-C"
                            className="card tab-pane fade"
                            role="tabpanel"
                            aria-labelledby="tab-C"
                          >
                            <div
                              className="card-header"
                              role="tab"
                              id="heading-C"
                            >
                              <h5 className="mb-0">
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapse-C"
                                  data-parent="#content"
                                  aria-expanded="false"
                                  aria-controls="collapse-C"
                                >
                                  {ct.listOfDocuments}
                                </a>
                              </h5>
                            </div>

                            <div
                              id="collapse-C"
                              className="collapse"
                              role="tabpanel"
                              aria-labelledby="heading-C"
                            >
                              <div className="flex-grow-1 free-1">
                                <div className="small font-weight-bold text-primary mb-1">
                                  List of Documents required for adding new
                                  property
                                  <div className="h5 pull-right">
                                    <a
                                      href="/Deshboard/images/List of Documents required for adding new property.pdf"
                                      className="tooltip"
                                      target="_blank"
                                    >
                                      <span className="tooltiptext">
                                        Download
                                      </span>
                                      <img
                                        src="/assets/img/download.svg"
                                        className="fkdl"
                                      />
                                    </a>
                                  </div>
                                  <div className="h5 pull-right">
                                    <a
                                      href="/Deshboard/images/List of Documents required for adding new property.pdf"
                                      className="tooltip"
                                      target="_blank"
                                    >
                                      <span className="tooltiptext">View</span>
                                      <img
                                        src="/assets/img/view.svg"
                                        className="fkdl"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="flex-grow-1 free-1">
                                <div className="small font-weight-bold text-primary mb-1">
                                  List of Documents required for transfer of
                                  property
                                  <div className="h5 pull-right">
                                    <a
                                      href="/Deshboard/images/List of Documents required for transfer of property.pdf"
                                      className="tooltip"
                                      target="_blank"
                                    >
                                      <span className="tooltiptext">
                                        Download
                                      </span>
                                      <img
                                        src="/assets/img/download.svg"
                                        className="fkdl"
                                      />
                                    </a>
                                  </div>
                                  <div className="h5 pull-right">
                                    <a
                                      href="/Deshboard/images/List of Documents required for transfer of property.pdf"
                                      className="tooltip"
                                      target="_blank"
                                    >
                                      <span className="tooltiptext">View</span>
                                      <img
                                        src="/assets/img/view.svg"
                                        className="fkdl"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div
                            id="pane-d"
                            className="card tab-pane fade"
                            role="tabpanel"
                            aria-labelledby="tab-d"
                          >
                            <div
                              className="card-header"
                              role="tab"
                              id="heading-d"
                            >
                              <h5 className="mb-0">
                                <a
                                  className="collapsed"
                                  data-toggle="collapse"
                                  href="#collapse-d"
                                  data-parent="#content"
                                  aria-expanded="false"
                                  aria-controls="collapse-d"
                                >
                                  {ct.userManual}
                                </a>
                              </h5>
                            </div>

                            <div
                              id="collapse-d"
                              className="collapse"
                              role="tabpanel"
                              aria-labelledby="heading-d"
                            >
                              <div className="flex-grow-1 free-1">
                                <div className="small font-weight-bold text-primary mb-1">
                                  Property Tax User Manual for Citizen
                                  <div className="h5 pull-right">
                                    <a
                                      href="/Deshboard/images/SUJOG_PropertyTax_Citizen User Manual.pdf"
                                      className="tooltip"
                                      target="_blank"
                                    >
                                      <span className="tooltiptext">
                                        Download
                                      </span>
                                      <img
                                        src="/assets/img/download.svg"
                                        alt=""
                                        className="fkdl"
                                      />
                                    </a>
                                  </div>
                                  <div className="h5 pull-right">
                                    <a
                                      href="/Deshboard/images/SUJOG_Property Tax_Citizen User Manual_July 2024.pdf"
                                      className="tooltip"
                                      target="_blank"
                                    >
                                      <span className="tooltiptext">View</span>
                                      <img
                                        src="/assets/img/view.svg"
                                        alt=""
                                        className="fkdl"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>

                              <div className="flex-grow-1 free-1">
                                <div className="small font-weight-bold text-primary mb-1">
                                  SUJOG FAQ document
                                  <div className="h5 pull-right">
                                    <a
                                      href="/Deshboard/images/SUJOG_FAQ Document.pdf"
                                      className="tooltip"
                                      target="_blank"
                                    >
                                      <span className="tooltiptext">
                                        Download
                                      </span>
                                      <img
                                        src="/assets/img/download.svg"
                                        alt=""
                                        className="fkdl"
                                      />
                                    </a>
                                  </div>
                                  <div className="h5 pull-right">
                                    <a
                                      href="/Deshboard/images/SUJOG_FAQ Document.pdf"
                                      className="tooltip"
                                      target="_blank"
                                    >
                                      <span className="tooltiptext">View</span>
                                      <img
                                        src="/assets/img/view.svg"
                                        className="fkdl"
                                      />
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
export default PT;
