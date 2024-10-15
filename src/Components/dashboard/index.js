import React from "react";
import { Helmet } from "react-helmet";
import { showFormattedCurrentDate } from "../../Actions/CommonFunctions";
import "./index.css";

function Dashboard() {
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
        <title>Welcome to ODISHA DIGIT</title>
      </Helmet>
      <main>
        <header class="page-header page-header-dark bg-gradient-primary-to-secondary">
          <div class="container-fluid">
            <div class="page-header-content">
              <div class="row align-items-center justify-content-between">
                <div class="col-auto">
                  <h1 class="page-header-title">
                    <div class="page-header-icon">
                      <i data-feather="activity"></i>
                    </div>
                    Welcome to Online Building Plan Approval
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div class="obps-sec-cntr">
          <div class="col-xl-12 col-md-12 mb-4 card">
            <div className="obps-notice-cntr">
              <div class="card-header">OBPAS Notice board</div>
              <div className="obps-notice-card-cntr">
                <div class="card obps-notice-card">
                  <div class="card-header">
                    <h6>SUJOG OBPAS Training/Doubt Clearing Weekly Session</h6>
                  </div>
                  <div class="card-body obps-notice-card-body">
                    <p>{"Every Tuesday · 4:30 pm - 6:30 pm"}</p>
                    <p>
                      Google Meet joining link:{" "}
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href="https://meet.google.com/cva-wxrd-yvc"
                      >
                        https://meet.google.com/cva-wxrd-yvc
                      </a>
                    </p>
                  </div>
                </div>
                <div class="card obps-notice-card">
                  <div class="card-header">
                    <h6>Latest News</h6>
                  </div>
                  <div class="card-body obps-notice-card-body obps-news-scrl">
                    <p>List of Services currently live in SUJOG OBPAS</p>
                    <ul>
                      <li>New Construction</li>
                      <li>Addition & Alteration</li>
                      <li>Occupancy Certificate</li>
                      <li>Pre-Approved Plans Approval</li>
                      <li>Approval By Accredited Person</li>
                      <li>Architect Registration & Renewal</li>
                      <li>
                        Approval of areas under OTPIT (Odisha Town Planning and
                        improvement Trust)
                      </li>
                      <li>Revocation of Building Permit</li>
                    </ul>

                    <p>Important functionalities currently live:</p>
                    <ul>
                      <li>Typical Floor Plans</li>
                      <li>Drawing Rework</li>
                      <li>Road widening provision</li>
                      <li>TDR provision</li>
                      <li>Mixed-Use projects</li>
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
                  Public Dashboard{" "}
                  <span class="lart1">
                    Last Update: {showFormattedCurrentDate()}
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
                              <h6>Building Plan Application Approval</h6>
                            </a>
                          </div>
                          <div
                            id="collapseOne"
                            class="collapse show"
                            data-parent="#accordion"
                          >
                            <div class="card-body">
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
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/19465 Notification of HandUD services under ORTPSA 2012001.pdf')}>15 Days</a></td>
                                  </tr>
                                  <tr>
                                    <td>Total Number of applications received</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/BPA_July 2024.pdf')}>2909</a></td>
                                  </tr>
                                  <tr>
                                    <td>Total Number of applications approved</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/BPA_July 2024.pdf')}>2909</a></td>
                                  </tr>
                                  <tr>
                                    <td>Average time taken to obtain registration/renewal</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr>
                                    <td>Median time taken to obtain registration/renewal</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr>
                                    <td>Minimum time taken to obtain registration/renewal</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr>
                                    <td>Maximum time taken to obtain registration/renewal</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr>
                                    <td>"Average fee" taken by the Department for completion of entire process of obtaining approval/certificate</td>
                                    <td><a href="#" style={{whiteSpace:'nowrap'}} onClick={() => downloadExcel('/Deshboard/images/BPA_July 2024.pdf')}>₹ 134,981</a></td>
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
                              <h6>Occupancy certificate</h6>
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
                                <thead style={{ backgroundColor: '#0061f2', color: 'white' }}>
                                  <tr>
                                    <th scope="col">Particulars</th>
                                    <th scope="col">Details</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Time Limit prescribed as per the Public Service Guarantee Act</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/19465 Notification of HandUD services under ORTPSA 2012001.pdf')}>30 Days</a></td>
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
                              <h6>Plinth Approval</h6>
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
                                <thead style={{ backgroundColor: '#0061f2', color: 'white' }}>
                                  <tr>
                                    <th scope="col">Particulars</th>
                                    <th scope="col">Details</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Time Limit prescribed as per the Public Service Guarantee Act</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/19465 Notification of HandUD services under ORTPSA 2012001.pdf')}>30 Days</a></td>
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
                              <h6>Alteration and Addition/Revision/Revalidation of Building Plan</h6>
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
                                <thead style={{ backgroundColor: '#0061f2', color: 'white' }}>
                                  <tr>
                                    <th scope="col">Particulars</th>
                                    <th scope="col">Details</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <td>Time Limit prescribed as per the Public Service Guarantee Act</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/19465 Notification of HandUD services under ORTPSA 2012001.pdf')}>15 Days</a></td>
                                  </tr>
                                  <tr>
                                    <td>Total Number of applications received</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/Addition Alteration Revision Revalidation_July 2024.pdf')}>249</a></td>
                                  </tr>
                                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <td>Total Number of applications approved</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/Addition Alteration Revision Revalidation_July 2024.pdf')}>249</a></td>
                                  </tr>
                                  <tr>
                                    <td>Average time taken to obtain registration/renewal</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <td>Median time taken to obtain registration/renewal</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr>
                                    <td>Minimum time taken to obtain registration/renewal</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr style={{ backgroundColor: '#f8f9fa' }}>
                                    <td>Maximum time taken to obtain registration/renewal</td>
                                    <td>15 Days</td>
                                  </tr>
                                  <tr>
                                    <td>"Average fee" taken by the Department for completion of entire process of obtaining approval/certificate</td>
                                    <td><a href="#" style={{whiteSpace:'nowrap'}} onClick={() => downloadExcel('/Deshboard/images/Addition Alteration Revision Revalidation_July 2024.pdf')}>₹ 42,744</a></td>
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
                              <h6>Demolition and Reconstruction of Building</h6>
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
                                <thead style={{ backgroundColor: '#0061f2', color: 'white' }}>
                                  <tr>
                                    <th scope="col">Particulars</th>
                                    <th scope="col">Details</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>Time Limit prescribed as per the Public Service Guarantee Act</td>
                                    <td><a href="#" onClick={() => downloadExcel('/Deshboard/images/19465 Notification of HandUD services under ORTPSA 2012001.pdf')}>30 Days</a></td>
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
                  Information related to Building Plan Application Approval
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
                            Documents required in OBPAS
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
                            Fee Estimate
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
                            Field Verification checklist
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
                            Rules and Regulations
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
                            Procedure
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
                            OBPAS Training Videos
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
                            Drawing Manual
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
                            Drawing Template
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
                            Project Risk Criterias{" "}
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
                            Reference Files
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
                            Practice Files
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
                            User Manuals
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
                            NOC list
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
                            List of live OBPAS Services
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
                                Drawing Manual
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
                                Drawing Manual_Odisha OBPS_v1.6
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Drawing Manual_Odisha OBPS_v1.6.pdf"
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
                                    href="/Deshboard/images/Drawing Manual_Odisha OBPS_v1.6.pdf"
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
                                Layout Approval Drawing Manual v1
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Layout Approval Drawing Manual v1.pdf"
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
                                    href="/Deshboard/images/Layout Approval Drawing Manual v1.pdf"
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
                                Drawing Template
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
                                Odisha OBPS Drawing Template_v1.6(DWG)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Odisha OBPS Drawing Template_v1.6.dwg"
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
                                    href="/Deshboard/images/Odisha OBPS Drawing Template_v1.6.dwg"
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
                                Layout Approval Drawing Template v1(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Layout Approval Drawing Template v1.dxf"
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
                                    href="/Deshboard/images/Layout Approval Drawing Template v1.dxf"
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
                                Odisha OBPS Drawing Template_v1.6(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Odisha OBPS Drawing Template_v1.6.dxf"
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
                                    href="/Deshboard/images/Odisha OBPS Drawing Template_v1.6.dxf"
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
                                Project Risk Criterias
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
                                Reference Files
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
                                OBPS Reference files - Apartment and Housing projects(DWG)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPS Reference files - Apartment and Housing projects.dwg"
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
                                    href="/Deshboard/images/OBPS Reference files - Apartment and Housing projects.dwg"
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
                                OBPS Reference files - Apartment and Housing projects(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPS Reference files - Apartment and Housing projects.dxf"
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
                                    href="/Deshboard/images/OBPS Reference files - Apartment and Housing projects.dxf"
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
                                OBPS Reference File - Typical Floor Plan(DWG)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPS Reference File - Typical Floor Plan.dwg"
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
                                    href="/Deshboard/images/OBPS Reference File - Typical Floor Plan.dwg"
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
                                OBPS Reference File - Typical Floor Plan(DXF)
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/OBPS Reference File - Typical Floor Plan.dxf"
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
                                    href="/Deshboard/images/OBPS Reference File - Typical Floor Plan.dxf"
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
                                Practice Files
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
                                User Manuals
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
                                    href="/Deshboard/images/OBPAS User Manual_Architect & Technical Person_1.8.pdf"
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
                                    href="/Deshboard/images/OBPAS User Manual_Architect & Technical Person_1.8.pdf"
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
                                Building Regularization_User Manual_Architect & Technical Person
                                <div class="h5 pull-right">
                                  <a
                                    href="/Deshboard/images/Building Regularization_User Manual_Architect & Technical Person.pdf"
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
                                    href="/Deshboard/images/Building Regularization_User Manual_Architect & Technical Person.pdf"
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
                                NOC list
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
                                Documents required in OBPAS
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
                                Fee Estimate
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
                                Field Verification checklist
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
                                Rules and Regulations
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
                                Procedure
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
                                List of live OBPAS Services
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
export default Dashboard;
