import React from "react";
import { connect, useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { showFormattedCurrentDate } from "../../Actions/CommonFunctions";
import usePageLocalization from "../../utils/usePageLocalization";
import "./index.css";

function Dashboard({ language }) {
  const translations = usePageLocalization(language, 'obpas');
  const ct = usePageLocalization(language, 'common')
  const downloadExcel = (fileName) => {
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <div id="layoutSidenav_content">
      <Helmet>
        <title>OBPAS</title>
      </Helmet>
      <main>
        <header className="page-header page-header-dark bg-gradient-primary-to-secondary">
          <div className="container-fluid">
            <div className="page-header-content">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <h1 className="page-header-title">
                    <div className="page-header-icon">
                      <i data-feather={translations.pageHeaderIcon}></i>
                    </div>
                    {translations.pageHeaderTitle}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>


        <div className="obps-sec-cntr">
          <div className="col-xl-12 col-md-12 mb-4 card">
            <div className="obps-notice-cntr">
              <div className="card-header">{translations.obpsNoticeBoardTitle}</div>
              <div className="obps-notice-card-cntr">
                <div className="card obps-notice-card">
                  <div className="card-header">
                    <h6>{translations.sujogTrainingSessionTitle}</h6>
                  </div>
                  <div className="card-body obps-notice-card-body">
                    <p>{translations.sujogTrainingSessionTime}</p>
                    <p>
                      {translations.googleMeetLinkText}{" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={translations.googleMeetLink}
                      >
                        {translations.googleMeetLink}
                      </a>
                    </p>
                  </div>
                </div>
                <div className="card obps-notice-card">
                  <div className="card-header">
                    <h6>{translations.latestNewsTitle}</h6>
                  </div>
                  <div className="card-body obps-notice-card-body obps-news-scrl">
                    <p>{translations.servicesLiveInSUJOG}</p>
                    <ul>
                      <li>{translations.newConstruction}</li>
                      <li>{translations.additionAndAlteration}</li>
                      <li>{translations.occupancyCertificate}</li>
                      <li>{translations.preApprovedPlansApproval}</li>
                      <li>{translations.approvalByAccreditedPerson}</li>
                      <li>{translations.architectRegistrationRenewal}</li>
                      <li>{translations.approvalOTPIT}</li>
                      <li>{translations.revocationOfBuildingPermit}</li>
                    </ul>

                    <p>{translations.importantFunctionalitiesLive}</p>
                    <ul>
                      <li>{translations.typicalFloorPlans}</li>
                      <li>{translations.drawingRework}</li>
                      <li>{translations.roadWideningProvision}</li>
                      <li>{translations.tdrProvision}</li>
                      <li>{translations.mixedUseProjects}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div class="obps-sec-cntr">
          <div class="col">
            <div class="row">
              <div class="col-xl-6 col-md-6 mb-4 card">
                <div class="card-header">
                  {translations.publicDashboard}{" "}
                  <span class="lart1">
                    {translations.lastUpdate}: {showFormattedCurrentDate()}
                  </span>
                </div>

                <div class="row card-body">
                  <div class="container">
                    <div class="row">
                      <div id="accordion" class="width2">
                        <div class="card">
                          <div class="card-header">
                            <a
                              class="card-link text-dark"
                              data-toggle="collapse"
                              href="#collapseOne"
                            >
                              <span class="float-right">
                                <i class="fa fa-arrow-down"></i>
                              </span>
                              <h6>{translations.bpa}</h6>
                            </a>
                          </div>
                          <div
                            id="collapseOne"
                            class="collapse show"
                            data-parent="#accordion"
                          >
                            <div class="card-body">
                              <table className="table table-bordered table-striped">
                                <thead style={{ backgroundColor: '#F47216', color: 'white' }}>
                                  <tr>
                                    <th scope="col">{translations.particulars}</th>
                                    <th scope="col">{translations.details}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{translations.timeLimit}</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/19465 Notification of HandUD services under ORTPSA 2012001.pdf')}>15 Days</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.totalApplication}</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/BPA_July 2024.pdf')}>2909</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.totalApproved}</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/BPA_July 2024.pdf')}>2909</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.avgTime}</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.medianTime}</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.minTime}</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.maxTime}</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.avgFeeTakenByDept}</td>
                                    <td><a href="#" style={{ whiteSpace: 'nowrap' }} onClick={() => downloadExcel('/Deshboard/images/BPA_July 2024.pdf')}>₹ 134,981</a></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        <div class="card">
                          <div class="card-header">
                            <a
                              class="collapsed card-link text-dark"
                              data-toggle="collapse"
                              href="#collapseThree"
                            >
                              <span class="float-right">
                                <i class="fa fa-arrow-down"></i>
                              </span>
                              <h6>{translations.occupancyCertificate}</h6>
                              <span class="float-right">
                                <i class="ti-plus"></i>
                              </span>
                            </a>
                          </div>
                          <div
                            id="collapseThree"
                            class="collapse"
                            data-parent="#accordion"
                          >
                            <div class="row card-body">
                              <table className="table table-bordered table-striped">
                                <thead style={{ backgroundColor: '#F47216', color: 'white' }}>
                                  <tr>
                                    <th scope="col">{translations.particulars}</th>
                                    <th scope="col">{translations.details}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{translations.timeLimit}</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/19465 Notification of HandUD services under ORTPSA 2012001.pdf')}>30 Days</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.totalApplication}</td>
                                    <td><a href="#" onClick={() => downloadExcel('applications_received.xlsx')}>0</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.totalApproved}</td>
                                    <td><a href="#" onClick={() => downloadExcel('applications_approved.xlsx')}>0</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.avgTime}</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.medianTime}</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.minTime}</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.maxTime}</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.avgFeeTakenByDept}</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        {/* Plinth Approval */}
                        <div class="card">
                          <div class="card-header">
                            <a
                              class="collapsed card-link text-dark"
                              data-toggle="collapse"
                              href="#collapseFour"
                            >
                              <span class="float-right">
                                <i class="fa fa-arrow-down"></i>
                              </span>
                              <h6>{translations.plinthApproval}</h6>
                              <span class="float-right">
                                <i class="ti-plus"></i>
                              </span>
                            </a>
                          </div>
                          <div
                            id="collapseFour"
                            class="collapse"
                            data-parent="#accordion"
                          >
                            <div class="row card-body">
                              <table className="table table-bordered table-striped">
                                <thead style={{ backgroundColor: '#F47216', color: 'white' }}>
                                  <tr>
                                    <th scope="col">{translations.particulars}</th>
                                    <th scope="col">{translations.details}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{translations.timeLimit}</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/19465 Notification of HandUD services under ORTPSA 2012001.pdf')}>30 Days</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.totalApplication}</td>
                                    <td><a href="#" onClick={() => downloadExcel('applications_received.xlsx')}>0</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.totalApproved}</td>
                                    <td><a href="#" onClick={() => downloadExcel('applications_approved.xlsx')}>0</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.avgTime}</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.medianTime}</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.minTime}</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.maxTime}</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.avgFeeTakenByDept}</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        {/* Alteration and Addition/Revision/Revalidation of Building Plan */}
                        <div class="card">
                          <div class="card-header">
                            <a
                              class="collapsed card-link text-dark"
                              data-toggle="collapse"
                              href="#collapseFive"
                            >
                              <span class="float-right">
                                <i class="fa fa-arrow-down"></i>
                              </span>
                              <h6>{translations.alterationTitle}</h6>
                              <span class="float-right">
                                <i class="ti-plus"></i>
                              </span>
                            </a>
                          </div>
                          <div
                            id="collapseFive"
                            class="collapse"
                            data-parent="#accordion"
                          >
                            <div class="row card-body">
                              <table className="table table-bordered table-striped">
                                <thead style={{ backgroundColor: '#F47216', color: 'white' }}>
                                  <tr>
                                    <th scope="col">{translations.particulars}</th>
                                    <th scope="col">{translations.details}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <td>{translations.timeLimit}</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/19465 Notification of HandUD services under ORTPSA 2012001.pdf')}>15 Days</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.totalApplication}</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/Addition Alteration Revision Revalidation_July 2024.pdf')}>249</a></td>
                                  </tr>
                                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <td>{translations.totalApproved}</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/Addition Alteration Revision Revalidation_July 2024.pdf')}>249</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.avgTime}</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <td>{translations.medianTime}</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.minTime}</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <td>{translations.maxTime}</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.avgFeeTakenByDept}</td>
                                    <td><a href="#" style={{ whiteSpace: 'nowrap' }} onClick={() => downloadExcel('/Deshboard/images/Addition Alteration Revision Revalidation_July 2024.pdf')}>₹ 42,744</a></td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>

                        {/* Demolition Construction of Building */}
                        <div class="card">
                          <div class="card-header">
                            <a
                              class="collapsed card-link text-dark"
                              data-toggle="collapse"
                              href="#collapseSix"
                            >
                              <span class="float-right">
                                <i class="fa fa-arrow-down"></i>
                              </span>
                              <h6>{translations.demplotion}</h6>
                              <span class="float-right">
                                <i class="ti-plus"></i>
                              </span>
                            </a>
                          </div>
                          <div
                            id="collapseSix"
                            class="collapse"
                            data-parent="#accordion"
                          >
                            <div class="row card-body">
                              <table className="table table-bordered table-striped">
                                <thead style={{ backgroundColor: '#F47216', color: 'white' }}>
                                  <tr>
                                    <th scope="col">{translations.particulars}</th>
                                    <th scope="col">{translations.details}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>{translations.timeLimit}</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/19465 Notification of HandUD services under ORTPSA 2012001.pdf')}>30 Days</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.totalApplication}</td>
                                    <td><a href="#" onClick={() => downloadExcel('applications_received.xlsx')}>0</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.totalApproved}</td>
                                    <td><a href="#" onClick={() => downloadExcel('applications_approved.xlsx')}>0</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.avgTime}</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.medianTime}</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.minTime}</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.maxTime}</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.avgFeeTakenByDept}</td>
                                    <td>0</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-xl-6 col-md-6 mb-4 card card2">
                <div class="card-header">
                  {translations.informationofObpasTitle}
                </div>
                <div class="row card-body">
                  <div class="col-md-12">
                    <div class="d-flex">
                      <ul id="tabs" class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                          <a
                            id="tab-i"
                            href="#pane-i"
                            class="nav-link active"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.docInObpas}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            id="tab-j"
                            href="#pane-j"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.feeEstimate}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            id="tab-k"
                            href="#pane-k"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.fieldVerificationChecklist}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            id="tab-l"
                            href="#pane-l"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.rulesAndRegulations}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            id="tab-m"
                            href="#pane-m"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.procedure}
                          </a>
                        </li>

                        <li class="nav-item">
                          <a
                            id="tab-A"
                            href="#pane-A"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.obpasTrainingVideos}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            id="tab-B"
                            href="#pane-B"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.drawingManual}
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            id="tab-C"
                            href="#pane-C"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.drawingTemplate}
                          </a>
                        </li>

                        <li class="nav-item">
                          <a
                            id="tab-d"
                            href="#pane-d"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.projectRiskCriteria}{" "}
                          </a>
                        </li>

                        <li class="nav-item">
                          <a
                            id="tab-e"
                            href="#pane-e"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.referenceFiles}
                          </a>
                        </li>

                        <li class="nav-item">
                          <a
                            id="tab-f"
                            href="#pane-f"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.practiceFiles}
                          </a>
                        </li>

                        <li class="nav-item">
                          <a
                            id="tab-g"
                            href="#pane-g"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.userManual}
                          </a>
                        </li>

                        <li class="nav-item">
                          <a
                            id="tab-h"
                            href="#pane-h"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.nocList}
                          </a>
                        </li>

                        <li class="nav-item">
                          <a
                            id="tab-n"
                            href="#pane-n"
                            class="nav-link"
                            data-toggle="tab"
                            role="tab"
                          >
                            {ct.listofliveOBPASServices}
                          </a>
                        </li>

                      </ul>

                      <div id="content" class="tab-content" role="tablist">
                        <div
                          id="pane-A"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-A"
                        >
                          <div class="card-header" role="tab" id="heading-A">
                            <h5 class="mb-0">
                              <a
                                data-toggle="collapse"
                                href="#collapse-A"
                                data-parent="#content"
                                aria-expanded="true"
                                aria-controls="collapse-A"
                              >
                                OBPAS Training Videos
                              </a>
                            </h5>
                          </div>

                          <div
                            id="collapse-A"
                            class="collapse show"
                            role="tabpanel"
                            aria-labelledby="heading-A"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                <div class=" pull-right">
                                  <a
                                    href="https://www.youtube.com/channel/UCMF4tn_dSwgRuiCuPsvEosg"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    Go to Training Videos
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="pane-B"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-B"
                        >
                          <div class="card-header" role="tab" id="heading-B">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-B"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-B"
                              >
                                {ct.drawingManual}
                              </a>
                            </h5>
                          </div>

                          <div
                            id="collapse-B"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-B"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Drawing Manual_Odisha OBPS_v1.8
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Drawing Manual_Odisha OBPS_v1.8.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Drawing Manual_Odisha OBPS_v1.8.pdf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Layout Approval Drawing Manual V1.3
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Layout Approval Drawing Manual V1.3.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Layout Approval Drawing Manual V1.3.pdf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Common FAQs related to CAD to Pdf generation for Architects
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Common FAQs related to CAD to Pdf generation for Architects.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Common FAQs related to CAD to Pdf generation for Architects.pdf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="pane-C"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-C"
                        >
                          <div class="card-header" role="tab" id="heading-C">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-C"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-C"
                              >
                                {ct.drawingTemplate}
                              </a>
                            </h5>
                          </div>

                          <div
                            id="collapse-C"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-C"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Odisha OBPS Drawing Template_v1.7(DWG)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Odisha OBPS Drawing Template_v1.7.dwg"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Odisha OBPS Drawing Template_v1.7.dwg"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Layout Approval Template V 1.3(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Layout Approval Template V 1.3.dxf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Layout Approval Template V 1.3.dxf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Odisha OBPS Drawing Template_v1.7(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Odisha OBPS Drawing Template_v1.7.dxf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Odisha OBPS Drawing Template_v1.7.dxf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="pane-d"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-d"
                        >
                          <div class="card-header" role="tab" id="heading-d">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-d"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-d"
                              >
                                {ct.projectRiskCriteria}
                              </a>
                            </h5>
                          </div>

                          <div
                            id="collapse-d"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-d"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Low Risk & Other Than Low Risk Criteria
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Low Risk & Other Than Low Risk Criteria.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Low Risk & Other Than Low Risk Criteria.pdf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="pane-e"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-e"
                        >
                          <div class="card-header" role="tab" id="heading-e">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-e"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-e"
                              >
                                {ct.referenceFiles}
                              </a>
                            </h5>
                          </div>

                          <div
                            id="collapse-e"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-e"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Layout Approval Reference File v1(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Layout Approval Reference File v1.dxf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Layout Approval Reference File v1.dxf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OBPAS Reference files - Addition & Alteration , Category C & D(DWG)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files - Addition & Alteration , Category C & D.dwg"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files - Addition & Alteration , Category C & D.dwg"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OBPAS Reference files - Addition & Alteration , Category C & D(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files - Addition & Alteration , Category C & D.dxf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files - Addition & Alteration , Category C & D.dxf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OBPAS Reference files - Addition & Alteration , Category C & D(BAK)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files - Addition & Alteration , Category C & D.bak"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files - Addition & Alteration , Category C & D.bak"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OBPAS Reference File - Apartment Project_V1.2(DWG)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference File - Apartment Project_V1.2.dwg"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference File - Apartment Project_V1.2.dwg"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OBPAS Reference File - Apartment Project_V1.2(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference File - Apartment Project_V1.2.dxf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference File - Apartment Project_V1.2.dxf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OBPAS Reference files - Residential Detached(DWG)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files - Residential Detached.dwg"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files - Residential Detached.dwg"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OBPAS Reference files - Residential Detached(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files - Residential Detached.dxf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files - Residential Detached.dxf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OBPAS Reference File - Typical Floor Plan_V1.2(DWG)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference File - Typical Floor Plan_V1.2.dwg"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference File - Typical Floor Plan_V1.2.dwg"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OBPAS Reference File - Typical Floor Plan_V1.2(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference File - Typical Floor Plan_V1.2.dxf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference File - Typical Floor Plan_V1.2.dxf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OBPAS Reference files -PDF generation Category A(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files -PDF generation Category A.dxf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files -PDF generation Category A.dxf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OBPAS Reference files -PDF generation Category C&D(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files -PDF generation Category C&D.dxf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS Reference files -PDF generation Category C&D.dxf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div
                          id="pane-f"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-f"
                        >
                          <div class="card-header" role="tab" id="heading-f">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-f"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-f"
                              >
                                {ct.practiceFiles}
                              </a>
                            </h5>
                          </div>

                          <div
                            id="collapse-f"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-f"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Apartment Bldgs & Housing Projects
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Apartment Bldgs & Housing Projects - Practice File.dxf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Apartment Bldgs & Housing Projects - Practice File.dxf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <imgv
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Commercial Drawing
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Commercial Drawing - Practice File.dxf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Commercial Drawing - Practice File.dxf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Residential Detached
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Residential Detached - Practice File.dxf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Residential Detached - Practice File.dxf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="pane-g"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-g"
                        >
                          <div class="card-header" role="tab" id="heading-g">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-g"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-g"
                              >
                                {ct.userManual}
                              </a>
                            </h5>
                          </div>

                          <div
                            id="collapse-g"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-g"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OBPAS User Manual_Architect & Technical Person
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS User Manual_Architect & Technical Person_01042025.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPAS User Manual_Architect & Technical Person_01042025.pdf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Land Regularization User Manual_Citizen
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Land Regularization User Manual_Citizen.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Land Regularization User Manual_Citizen.pdf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Layout Approval User Manual_Architect and Town Planner
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Layout Approval User Manual_Architect and Town Planner.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Layout Approval User Manual_Architect and Town Planner.pdf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>

                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Building Regularization and Land & Building Regularization_User Manual_Architect & Technical Person
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Building Regularization and Land & Building Regularization_User Manual_Architect & Technical Person.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Building Regularization and Land & Building Regularization_User Manual_Architect & Technical Person.pdf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="pane-h"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-h"
                        >
                          <div class="card-header" role="tab" id="heading-h">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-h"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-h"
                              >
                                {ct.nocList}
                              </a>
                            </h5>
                          </div>

                          <div
                            id="collapse-h"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-h"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                NOC Mapping for all occuppancies
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/NOC Mapping for all occuppancies.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/NOC Mapping for all occuppancies.pdf"
                                    class="tooltip"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="pane-i"
                          class="card tab-pane fade show active"
                          role="tabpanel"
                          aria-labelledby="tab-i"
                        >
                          <div class="card-header" role="tab" id="heading-i">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-i"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-i"
                              >
                                {ct.docInObpas}
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse-i"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-i"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                doc requirements in OBPAS.pdf
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/doc requirements in OBPAS.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/doc requirements in OBPAS.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="pane-j"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-j"
                        >
                          <div class="card-header" role="tab" id="heading-j">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-j"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-j"
                              >
                                {ct.feeEstimate}
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse-j"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-j"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                BP Fee_New Condstruction.xlsx
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/BP Fee_New Condstruction.xlsx"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="pane-k"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-k"
                        >
                          <div class="card-header" role="tab" id="heading-k">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-k"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-k"
                              >
                                {ct.fieldVerificationChecklist}
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse-k"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-k"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Field verification checklist_for building plan
                                applications.pdf
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/Field verification checklist_for building plan applications.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/Field verification checklist_for building plan applications.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                SITE INSPECTION CHECKLIST DEMOLITION OF BUILDING.pdf
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/SITE INSPECTION CHECKLIST DEMOLITION OF BUILDING.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/SITE INSPECTION CHECKLIST DEMOLITION OF BUILDING.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Site inspection checklist for Occupancy
                                Applications.pdf
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/Site inspection checklist for Occupancy Applications.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/Site inspection checklist for Occupancy Applications.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Field verification checklist_for Addition and Alteration, Regularization.pdf
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/FieldVerificationChecklist.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/FieldVerificationChecklist.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="pane-l"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-l"
                        >
                          <div class="card-header" role="tab" id="heading-l">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-l"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-l"
                              >
                                {ct.rulesAndRegulations}
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse-l"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-l"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                OTPIT Planning & Building Standard rules,
                                2021.pdf
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/OTPIT Planning & Building Standard rules, 2021.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/OTPIT Planning & Building Standard rules, 2021.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                ODA CAF Rules, 2016.pdf
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/ODA CAF Rules, 2016.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/ODA CAF Rules, 2016.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                ODA Rules 2020.pdf
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/ODA Rules 2020.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/ODA Rules 2020.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="pane-m"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-m"
                        >
                          <div class="card-header" role="tab" id="heading-m">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-m"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-m"
                              >
                                {ct.procedure}
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse-m"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-m"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Building Permit Workflow – Addition &
                                Alteration.pdf
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/Building Permit Workflow – Addition & Alteration.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/Building Permit Workflow – Addition & Alteration.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Building Permit Workflow – New Construction.pdf
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/Building Permit Workflow – New Construction.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/Building Permit Workflow – New Construction.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Occupancy Certificate Workflow.pdf
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/Occupancy Certificate Workflow.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/Occupancy Certificate Workflow.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                Sujog OBPAS_Demolition Workflow.pdf
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/Sujog OBPAS_Demolition Workflow.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/Sujog OBPAS_Demolition Workflow.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div
                          id="pane-n"
                          class="card tab-pane fade"
                          role="tabpanel"
                          aria-labelledby="tab-n"
                        >
                          <div class="card-header" role="tab" id="heading-n">
                            <h5 class="mb-0">
                              <a
                                class="collapsed"
                                data-toggle="collapse"
                                href="#collapse-n"
                                data-parent="#content"
                                aria-expanded="false"
                                aria-controls="collapse-n"
                              >
                                {ct.listofliveOBPASServices}
                              </a>
                            </h5>
                          </div>
                          <div
                            id="collapse-n"
                            class="collapse"
                            role="tabpanel"
                            aria-labelledby="heading-n"
                          >
                            <div class="flex-grow-1 free-1">
                              <div class="small font-weight-bold text-primary mb-1">
                                List of services and Functionalities available in OBPAS
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/List of services and Functionalities available in OBPAS.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">Download</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/download.svg"
                                      class="fkdl"
                                    />
                                  </a>
                                </div>
                                <div class="h5 pull-right">
                                  <a
                                    href="Deshboard/images/List of services and Functionalities available in OBPAS.pdf"
                                    class="tooltip"
                                    target="_blank"
                                  >
                                    <span class="tooltiptext">View</span>
                                    <img
                                      alt="bpa"
                                      src="/Deshboard/images/view.svg"
                                      class="fkdl"
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
  );
}
const mapStateToProps = (state) => ({
  language: state.localization.language,
});

export default connect(mapStateToProps)(Dashboard);
