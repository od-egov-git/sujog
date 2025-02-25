import React from "react";
import { Helmet } from "react-helmet";
import { connect, useSelector } from "react-redux";
import { showFormattedCurrentDate } from "../../Actions/CommonFunctions";
import usePageLocalization from "../../utils/usePageLocalization";

function TL({language}) {
  const translations = usePageLocalization(language, 'tl');
	const ct = usePageLocalization(language, 'common');
  const downloadExcel = (fileName) => {
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return <div className="container">
    <div id="layoutSidenav_content">
      <Helmet><title>{translations.helmetTitle}</title></Helmet>
      <main>
        <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
          <div className="container-fluid">
            <div className="page-header-content">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <h1 className="page-header-title">
                    <div className="page-header-icon"><i data-feather="activity"></i></div>
                    {translations.headerContent}
                  </h1>

                </div>

              </div>
            </div>
          </div>
        </header>

        <div className="container-fluid mt-n10">
          <div className="col">
            <div className="row">

              <div className="col-xl-6 col-md-6 mb-4 card">
                <div className="card-header">{translations.publicDashboard} <span className="lart1">{translations.lastUpdate}: {showFormattedCurrentDate()}</span></div>
                <div className="row card-body">
                  <div className="container">
                    <div className="row">
                      <div id="accordion" className="width2">
                        <div className="card">
                          <div className="card-header">
                            <a className="card-link text-dark" data-toggle="collapse" href="#collapseOne"><span className="float-right"><i className="fa fa-arrow-down"></i></span>
                              <h6>{translations.helmetTitle}</h6>
                            </a>
                          </div>
                          <div id="collapseOne" className="collapse show" data-parent="#accordion">
                            <div className="card-body">
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
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/19465 Notification of HandUD services under ORTPSA 2012001.pdf')}>1 Day</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.totalApplication}</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/Trade License Applications_July 2024.pdf')}>3035</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.totalApproved}</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/Trade License Applications_July 2024.pdf')}>3035</a></td>
                                  </tr>
                                  <tr>
                                    <td>{translations.avgTime}</td>
                                    <td>1 Day</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.medianTime}</td>
                                    <td>1 Day</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.minTime}</td>
                                    <td>1 Day</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.maxTime}</td>
                                    <td>1 Day</td>
                                  </tr>
                                  <tr>
                                    <td>{translations.avgFeeTakenByDept}</td>
                                    <td><a href="#" style={{whiteSpace:'nowrap'}} onClick={() => downloadExcel('/Deshboard/images/Trade License Applications_July 2024.pdf')}>₹ 3851</a></td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2" style={{ backgroundColor: '#f1f1f1',fontWeight:'Bold', textAlign: 'center', fontStyle: 'italic', color:"#F47216" }}>
                                      **{translations.certificateIssueDesc}
                                    </td>
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

              <div className="col-xl-6 col-md-6 mb-4 card card2">
                <div className="card-header">{translations.tlInfo}</div>
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
                          <a id="tab-d" href="#pane-d" className="nav-link" data-toggle="tab" role="tab">{ct.tariff}</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-e" href="#pane-e" className="nav-link" data-toggle="tab" role="tab">{ct.userManual}</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-f" href="#pane-f" className="nav-link" data-toggle="tab" role="tab">{ct.rulesAndRegulations}</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-g" href="#pane-g" className="nav-link" data-toggle="tab" role="tab">{ct.procedure}</a>
                        </li>




                      </ul>

                      <div id="content" className="tab-content" role="tablist">
                        <div id="pane-A" className="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">

                          <div className="card-header" role="tab" id="heading-A">
                            <h5 className="mb-0">
                              <a data-toggle="collapse" href="#collapse-A" data-parent="#content" aria-expanded="true" aria-controls="collapse-A">
                                {ct.about}
                              </a>
                            </h5>
                          </div>

                          <div id="collapse-A" className="collapse show" role="tabpanel" aria-labelledby="heading-A">

                            <div className="flex-grow-1 free-1">
                              <p>{translations.tradeLicenseSystemDescription}</p>
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
                                1. {translations.applyForPermanentLicense} <br></br>
                                2. {translations.applyForTemporaryLicense} <br></br>
                                3. {translations.renewTradeLicense} <br></br>
                                4. {translations.downloadProvisionalLicense}  <br></br>
                                5. {translations.makeOnlinePayments} <br></br>
                                6. {translations.trackApplicationStatus} <br></br>
                                7.{translations.referTradeTariffChart} <br></br>
                                8. {translations.renewOldLicense}

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
                              <div className="small font-weight-bold text-primary mb-1">List of Documents required for new trade license
                                <div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for new Trade License.pdf" className="tooltip"
                                  target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for new Trade License.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>

                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">List of Documents required for temporary trade license
                                <div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for Temporary Trade License.pdf" className="tooltip"
                                  target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for Temporary Trade License.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>

                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">List of Documents required for renewal of trade license
                                <div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for renewal of Trade License.pdf" className="tooltip"
                                  target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/List of Documents required for renewal of Trade License.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div id="pane-d" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-d">

                          <div className="card-header" role="tab" id="heading-C">
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" href="#collapse-C" data-parent="#content" aria-expanded="false" aria-controls="collapse-C">
                                {ct.tariff}
                              </a>
                            </h5>
                          </div>

                          <div id="collapse-d" className="collapse" role="tabpanel" aria-labelledby="heading-d">
                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">Trade Tariff.pdf
                                <div className="h5 pull-right"><a href="/Deshboard/images/Trade Tariffs for Odisha ULBs.pdf" className="tooltip"
                                  target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/Trade Tariffs for Odisha ULBs.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div id="pane-g" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-g">

                          <div className="card-header" role="tab" id="heading-C">
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" href="#collapse-C" data-parent="#content" aria-expanded="false" aria-controls="collapse-C">
                                {ct.procedure}
                              </a>
                            </h5>
                          </div>

                          <div id="collapse-d" className="collapse" role="tabpanel" aria-labelledby="heading-d">

                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">Trade License - Workflow
                                <div className="h5 pull-right"><a href="/Deshboard/images/Trade License - Workflow.pdf" className="tooltip"
                                  target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/Trade License - Workflow.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>

                          </div>
                        </div>

                        <div id="pane-e" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-e">
                          <div className="card-header" role="tab" id="heading-e">
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" href="#collapse-e" data-parent="#content" aria-expanded="false" aria-controls="collapse-e">
                                {ct.userManual}
                              </a>
                            </h5>
                          </div>
                          <div id="collapse-e" className="collapse" role="tabpanel" aria-labelledby="heading-e">
                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">Trade License User Manual for Citizen
                                <div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_Trade License_Citizen User Manual_July 2024.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_Trade License_Citizen User Manual_July 2024.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>
                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">SUJOG FAQ document
                                <div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" className="tooltip" target="_blank"><span className="tooltiptext">View</span><img alt="Trade License" src="/assets/img/view.svg" className="fkdl" /></a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* Rules and Regulations Section */}
                        <div id="pane-f" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-e">
                          <div className="card-header" role="tab" id="heading-e">
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" href="#collapse-e" data-parent="#content" aria-expanded="false" aria-controls="collapse-e">
                                {ct.rulesAndRegulations}
                              </a>
                            </h5>
                          </div>
                          <div id="collapse-e" className="collapse" role="tabpanel" aria-labelledby="heading-e">
                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">Odisha Municipal Act_ Trade License Amendment 2020
                                <div className="h5 pull-right"><a href="/Deshboard/images/Odisha Municipal Act_ Trade License Amendment 2020.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/Odisha Municipal Act_ Trade License Amendment 2020.pdf" className="tooltip" target="_blank">
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
const mapStateToProps = (state) => ({
	language: state.localization.language,
});

export default connect(mapStateToProps)(TL);