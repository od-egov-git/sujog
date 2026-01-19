import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { showFormattedCurrentDate } from "../../Actions/CommonFunctions";
import usePageLocalization from "../../utils/usePageLocalization";
import { useSelector } from 'react-redux';
function MR() {
  const language = useSelector((state) => state.localization.language);
  const translations = usePageLocalization(language, 'mr');
  const ct = usePageLocalization(language, 'common');
  console.log('MR', translations)
  return <div className="container">
    <div id="layoutSidenav_content">
      <Helmet>
        <title>{translations.application}</title>
      </Helmet>
      <main>
        <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
          <div className="container-fluid">
            <div className="page-header-content">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <h1 className="page-header-title">
                    <div className="page-header-icon"><i data-feather="activity"></i></div>
                    {translations.title}
                  </h1>

                </div>

              </div>
            </div>
          </div>
        </header>

        <div className="container-fluid mt-n10">
          <div className="col">
            <div className="row">
              <div class="col-xl-6 col-md-6 mb-4 card">
                <div class="card-header">{translations.publicDashboard} <span class="lart1">{translations.lastUpdate}: {showFormattedCurrentDate()}</span></div>
                <div class="row card-body">
                  <div class="container">
                    <div class="row">
                      <div id="accordion" class="width2">
                        <div class="card">
                          <div class="card-header">
                            <a class="card-link text-dark" data-toggle="collapse" href="#collapseOne"><span class="float-right"><i class="fa fa-arrow-down"></i></span>
                              <h6>{translations.helmetTitle}</h6>
                            </a>
                          </div>
                          <div id="collapseOne" class="collapse show" data-parent="#accordion">
                            <div class="card-body">
                              <div class="row card-body">
                                <div class="col-xl-4 col-md-6 mb-4">
                                  <div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-primary h-100">
                                    <div class="card-body">
                                      <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                          <h6>{translations.serviceDeliveryTime}</h6>
                                          {/* <div class="small font-weight-bold text-primary mb-1">Low Risk Approval</div>
																					<div class="h5">7 Days</div>
																					<div class="small font-weight-bold text-primary mb-1">Other than Low Risk Approval </div>
																					<div class="h5">60 Days</div> */}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-6 mb-4">
                                  <div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-secondary h-100">
                                    <div class="card-body">
                                      <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                          <div class="small font-weight-bold text-secondary mb-1">{translations.totalNumberofApplicationsReceived}</div>
                                          <div class="h5">541</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-6 mb-4">
                                  <div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-success h-100">
                                    <div class="card-body">
                                      <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                          <div class="small font-weight-bold text-success mb-1">{translations.numberofApplicationsApproved}</div>
                                          <div class="h5">380</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-6 mb-4">
                                  <div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-info h-100">
                                    <div class="card-body">
                                      <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                          <div class="small font-weight-bold text-info mb-1">{translations.numberofApplicationsRejected}</div>
                                          <div class="h5">48</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-6 mb-4">
                                  <div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-primary h-100">
                                    <div class="card-body">
                                      <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                          <div class="small font-weight-bold text-primary mb-1">{translations.totalNumberofApplicationsPending}</div>
                                          <div class="h5">113</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-6 mb-4">
                                  <div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-secondary h-100">
                                    <div class="card-body">
                                      <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                          <div class="small font-weight-bold text-secondary mb-1">{translations.avgNumberofDaysforApproval}</div>
                                          <div class="h5">16</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-6 mb-4">
                                  <div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-success h-100">
                                    <div class="card-body">
                                      <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                          <div class="small font-weight-bold text-success mb-1">{translations.medianNumberofDaysforApproval}</div>
                                          <div class="h5">6</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-6 mb-4">
                                  <div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-info h-100">
                                    <div class="card-body">
                                      <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                          <div class="small font-weight-bold text-info mb-1">{translations.minimumNumberofDaysforApproval}</div>
                                          <div class="h5">1</div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div class="col-xl-4 col-md-6 mb-4">
                                  <div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-success h-100">
                                    <div class="card-body">
                                      <div class="d-flex align-items-center">
                                        <div class="flex-grow-1">
                                          <div class="small font-weight-bold text-success mb-1">{translations.maximumNumberofDaysforApproval}</div>
                                          <div class="h5">181</div>
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
              </div>

              <div className="col-xl-6 col-md-6 mb-4 card card2">
                <div className="card-header">{translations.mrInfo}</div>
                <div className="row card-body">
                  <div className="col-md-12">
                    <div className="d-flex">

                      <ul id="tabs" className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a id="tab-A" href="#pane-A" className="nav-link active" data-toggle="tab" role="tab">{ct.about}</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-B" href="#pane-B" className="nav-link" data-toggle="tab" role="tab">{ct.facilities}</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-C" href="#pane-C" className="nav-link" data-toggle="tab" role="tab">{ct.listOfDocuments}</a>
                        </li>

                        <li className="nav-item">
                          <a id="tab-d" href="#pane-d" className="nav-link" data-toggle="tab" role="tab">{ct.userManual}</a>
                        </li>

                        <li className="nav-item">
                          <a id="tab-e" href="#pane-e" className="nav-link" data-toggle="tab" role="tab">{ct.registrationFees}</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-f" href="#pane-f" className="nav-link" data-toggle="tab" role="tab">{ct.rulesAndRegulations}</a>
                        </li>

                      </ul>

                      <div id="content" className="tab-content" role="tablist">
                        <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">

                          <div className="card-header" role="tab" id="heading-A">
                            <h5 className="mb-0">
                              <a data-toggle="collapse" href="#collapse-A" data-parent="#content" aria-expanded="true" aria-controls="collapse-A">
                                About
                              </a>
                            </h5>
                          </div>

                          <div id="collapse-A" className="collapse show" role="tabpanel" aria-labelledby="heading-A">

                            <div className="flex-grow-1 free-1">
                              <p>{translations.marriageRegistrationDescription} </p>
                            </div>
                          </div>
                        </div>


                        <div id="pane-B" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
                          <div className="card-header" role="tab" id="heading-B">
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" href="#collapse-B" data-parent="#content" aria-expanded="false" aria-controls="collapse-B">
                                {ct.facilities}
                              </a>
                            </h5>
                          </div>
                          <div id="collapse-B" className="collapse" role="tabpanel" aria-labelledby="heading-B">
                            <div className="flex-grow-1 free-1">
                              <p>
                                1. {translations.facility1} <br></br>
                                2. {translations.facility2} <br></br>
                                3. {translations.facility3}
                              </p>
                            </div>
                          </div>

                        </div>



                        <div id="pane-C" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">

                          <div className="card-header" role="tab" id="heading-C">
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" href="#collapse-C" data-parent="#content" aria-expanded="false" aria-controls="collapse-C">
                                {ct.listOfDocuments}
                              </a>
                            </h5>
                          </div>

                          <div id="collapse-C" className="collapse" role="tabpanel" aria-labelledby="heading-C">

                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">List of Documents Required for Marriage Registration Certificate
                                <div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for Marriage Registration.pdf" className="tooltip"
                                  target="_blank">
                                  <span className="tooltiptext">Download</span><img src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for Marriage Registration.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img src="/assets/img/view.svg" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">Reference format for Joint Affidavit
                                <div className="h5 pull-right"><a href="/Deshboard/images/Joint affidavit-060126.pdf" className="tooltip"
                                  target="_blank">
                                  <span className="tooltiptext">Download</span><img src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/Joint affidavit-060126.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img src="/assets/img/view.svg" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>


                        <div id="pane-d" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-d">

                          <div className="card-header" role="tab" id="heading-d">
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" href="#collapse-d" data-parent="#content" aria-expanded="false" aria-controls="collapse-d">
                                {ct.userManual}
                              </a>
                            </h5>
                          </div>

                          <div id="collapse-d" className="collapse" role="tabpanel" aria-labelledby="heading-d">

                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">Marriage Registration User Manual for Citizen
                                <div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_Marriage Registration_Citizen User Manual_July 2024 .pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt="" className="fkdl" /></a>
                                </div>

                                <div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_Marriage Registration_Citizen User Manual_July 2024 .pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img src="/assets/img/view.svg" alt="" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>

                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">SUJOG FAQ document
                                <div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt="" className="fkdl" /></a>
                                </div>

                                <div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img src="/assets/img/view.svg" alt="" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div id="pane-e" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-e">

                          <div className="card-header" role="tab" id="heading-e">
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" href="#collapse-e" data-parent="#content" aria-expanded="false" aria-controls="collapse-e">
                                {translations.marriageRegistrationFees}
                              </a>
                            </h5>
                          </div>

                          <div id="collapse-e" className="collapse" role="tabpanel" aria-labelledby="heading-e">

                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">Marriage Registration Fees
                                <div className="h5 pull-right"><a href="/Deshboard/images/Marriage Registration Fee_August 2025.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt="" className="fkdl" /></a>
                                </div>

                                <div className="h5 pull-right"><a href="/Deshboard/images/Marriage Registration Fee_August 2025.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img src="/assets/img/view.svg" alt="" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Rules and Regulations Section */}
                        <div id="pane-f" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-e">
                          <div className="card-header" role="tab" id="heading-e">
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" href="#collapse-e" data-parent="#content" aria-expanded="false" aria-controls="collapse-f">
                                {ct.rulesAndRegulations}
                              </a>
                            </h5>
                          </div>
                          <div id="collapse-f" className="collapse" role="tabpanel" aria-labelledby="heading-e">
                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">Hindu Marriage Act, 1955
                                <div className="h5 pull-right"><a href="/Deshboard/images/Hindu Marriage Act, 1955 1.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/Hindu Marriage Act, 1955 1.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="collapse-f" className="collapse" role="tabpanel" aria-labelledby="heading-e">
                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">Orissa Hindu Marriage Registration Rule, 1960
                                <div className="h5 pull-right"><a href="/Deshboard/images/Orissa Hindu Marriage Registration Rule, 1960 1.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/Orissa Hindu Marriage Registration Rule, 1960 1.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div id="collapse-f" className="collapse" role="tabpanel" aria-labelledby="heading-e">
                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">Tatkal Marriage Registration_Gazette Notification, 2022
                                <div className="h5 pull-right"><a href="/Deshboard/images/Tatkal Marriage Registration_Gazette Notification, 2022 1.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/Tatkal Marriage Registration_Gazette Notification, 2022 1.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
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
};
export default MR;