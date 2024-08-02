import React from "react";
import { Helmet } from "react-helmet";
import { showFormattedCurrentDate } from "../../Actions/CommonFunctions";

function TL() {
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
      <Helmet><title>Trade License</title></Helmet>
      <main>
        <header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
          <div className="container-fluid">
            <div className="page-header-content">
              <div className="row align-items-center justify-content-between">
                <div className="col-auto">
                  <h1 className="page-header-title">
                    <div className="page-header-icon"><i data-feather="activity"></i></div>
                    Services / Trade License
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
                <div className="card-header">Public Dashboard <span className="lart1">Last Update: {showFormattedCurrentDate()}</span></div>
                <div className="row card-body">
                  <div className="container">
                    <div className="row">
                      <div id="accordion" className="width2">
                        <div className="card">
                          <div className="card-header">
                            <a className="card-link text-dark" data-toggle="collapse" href="#collapseOne"><span className="float-right"><i className="fa fa-arrow-down"></i></span>
                              <h6>Trade License</h6>
                            </a>
                          </div>
                          <div id="collapseOne" className="collapse show" data-parent="#accordion">
                            <div className="card-body">
                              <table className="table table-bordered table-striped">
                                <thead style={{ backgroundColor: '#0061f2', color: 'white' }}>
                                  <tr>
                                    <th scope="col">Particulars</th>
                                    <th scope="col">Details</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Time Limit prescribed as per the Public Service Guarantee Act</td>
                                    <td><a href="#" onClick={() => downloadExcel('time_limit.xlsx')}>0</a></td>
                                  </tr>
                                  <tr>
                                    <td>Total Number of applications received</td>
                                    <td><a href="#" onClick={() => downloadExcel('applications_received.xlsx')}>0</a></td>
                                  </tr>
                                  <tr>
                                    <td>Total Number of applications approved</td>
                                    <td><a href="#" onClick={() => downloadExcel('applications_approved.xlsx')}>0</a></td>
                                  </tr>
                                  <tr>
                                    <td>Average time taken to obtain registration/renewal</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>Median time taken to obtain registration/renewal</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>Minimum time taken to obtain registration/renewal</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>Maximum time taken to obtain registration/renewal</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td>"Average fee" taken by the Department for completion of entire process of obtaining approval/certificate</td>
                                    <td>0</td>
                                  </tr>
                                  <tr>
                                    <td colSpan="2" style={{ backgroundColor: '#f1f1f1',fontWeight:'Bold', textAlign: 'center', fontStyle: 'italic', color:"rgb(0, 97, 242)" }}>
                                      **Certificate is issued instantly right after the payment of the application fee
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
                <div className="card-header">Information related to Trade License</div>
                <div className="row card-body">
                  <div className="col-md-12">
                    <div className="d-flex">

                      <ul id="tabs" className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                          <a id="tab-A" href="#pane-A" className="nav-link active" data-toggle="tab" role="tab">About</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-B" href="#pane-B" className="nav-link" data-toggle="tab" role="tab">Facilities</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-C" href="#pane-C" className="nav-link" data-toggle="tab" role="tab">List of Documents</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-d" href="#pane-d" className="nav-link" data-toggle="tab" role="tab">Tariff</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-e" href="#pane-e" className="nav-link" data-toggle="tab" role="tab">User Manual</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-f" href="#pane-f" className="nav-link" data-toggle="tab" role="tab">Rules & Regulations</a>
                        </li>
                        <li className="nav-item">
                          <a id="tab-g" href="#pane-g" className="nav-link" data-toggle="tab" role="tab">Procedure</a>
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
                              <p>The Trade License System provides a digital interface, allowing citizens to apply for the Trade License and
                                subsequently make the payment online. Traders can apply for new licenses, renewals, amendments, and supplemental
                                licenses. It streamlines and automates business licensing processes and helps a business to be set up quickly.</p>
                            </div>
                          </div>
                        </div>


                        <div id="pane-B" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
                          <div className="card-header" role="tab" id="heading-B">
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" href="#collapse-B" data-parent="#content" aria-expanded="false" aria-controls="collapse-B">
                                Facilities
                              </a>
                            </h5>
                          </div>
                          <div id="collapse-B" className="collapse" role="tabpanel" aria-labelledby="heading-B">
                            <div className="flex-grow-1 free-1">
                              <p>
                                1. Apply for new Permanent Trade License <br></br>
                                2. Apply for new Temporary Trade License <br></br>
                                3. Appy for renewal of Trade License. <br></br>
                                4. Download a Provisional Trade License.  <br></br>
                                5. Make Online payments <br></br>
                                6. Track application Status <br></br>
                                2.Refer to the Trade Tariffs Chart for the particular ULB <br></br>
                                3. Renewal your old trade license for more than 1 year upto 5 years at a time

                              </p>
                            </div>
                          </div>

                        </div>



                        <div id="pane-C" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">

                          <div className="card-header" role="tab" id="heading-C">
                            <h5 className="mb-0">
                              <a className="collapsed" data-toggle="collapse" href="#collapse-C" data-parent="#content" aria-expanded="false" aria-controls="collapse-C">
                                List of Documents
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
                                TARIFF
                              </a>
                            </h5>
                          </div>

                          <div id="collapse-d" className="collapse" role="tabpanel" aria-labelledby="heading-d">
                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">Trade Tariff.pdf
                                <div className="h5 pull-right"><a href="/Deshboard/images/Trade Tariffs for Odisha ULBs_ July 2024.pdf" className="tooltip"
                                  target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/Trade Tariffs for Odisha ULBs_ July 2024.pdf" className="tooltip" target="_blank">
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
                                PROCEDURE
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
                                User Manual
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
                                RULES & REGULATIONS
                              </a>
                            </h5>
                          </div>
                          <div id="collapse-e" className="collapse" role="tabpanel" aria-labelledby="heading-e">
                            <div className="flex-grow-1 free-1">
                              <div className="small font-weight-bold text-primary mb-1">Odisha Municipal Act_ Trade License Amendment 2020 1
                                <div className="h5 pull-right"><a href="/Deshboard/images/Odisha Municipal Act_ Trade License Amendment 2020 1.pdf" className="tooltip" target="_blank">
                                  <span className="tooltiptext">Download</span><img alt="Trade License" src="/assets/img/download.svg" className="fkdl" /></a>
                                </div>
                                <div className="h5 pull-right"><a href="/Deshboard/images/Odisha Municipal Act_ Trade License Amendment 2020 1.pdf" className="tooltip" target="_blank">
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
export default TL;