import React from "react";
import { Helmet } from "react-helmet";
import { showFormattedCurrentDate } from "../../Actions/CommonFunctions";

function MR() {
	return <div className="container">
		<div id="layoutSidenav_content">
		<Helmet>
			<title>Marriage Registration</title>
		</Helmet>
			<main>
				<header className="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
					<div className="container-fluid">
						<div className="page-header-content">
							<div className="row align-items-center justify-content-between">
								<div className="col-auto">
									<h1 className="page-header-title">
										<div className="page-header-icon"><i data-feather="activity"></i></div>
										Services / Marriage Registration
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
								<div class="card-header">Public Dashboard <span class="lart1">Last Update: {showFormattedCurrentDate()}</span></div>
								<div class="row card-body">
									<div class="container">
										<div class="row">
											<div id="accordion" class="width2">
												<div class="card">
													<div class="card-header">
														<a class="card-link text-dark" data-toggle="collapse" href="#collapseOne"><span class="float-right"><i class="fa fa-arrow-down"></i></span>
															<h6>Marriage Registration</h6>
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
																					<h6>Service Delivery Time</h6>
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
																					<div class="small font-weight-bold text-secondary mb-1">Total Number of Applications Received</div>
																					<div class="h5">1067</div>
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
																					<div class="small font-weight-bold text-success mb-1">Number of Applications Approved</div>
																					<div class="h5">961</div>
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
																					<div class="small font-weight-bold text-info mb-1">Number of Applications Rejected</div>
																					<div class="h5">13</div>
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
																					<div class="small font-weight-bold text-primary mb-1">Total Number of Applications Pending</div>
																					<div class="h5">93</div>
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
																					<div class="small font-weight-bold text-secondary mb-1">Mean/Average Number of Days for Approval</div>
																					<div class="h5">20</div>
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
																					<div class="small font-weight-bold text-success mb-1">Median Number of Days for Approval</div>
																					<div class="h5">7</div>
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
																					<div class="small font-weight-bold text-info mb-1">Minimum Number of Days for Approval</div>
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
																					<div class="small font-weight-bold text-success mb-1">Maximum Number of Days for Approval</div>
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
								<div className="card-header">Information related to Marriage Registration</div>
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
													<a id="tab-d" href="#pane-d" className="nav-link" data-toggle="tab" role="tab">User Manual</a>
												</li>

												<li className="nav-item">
													<a id="tab-e" href="#pane-e" className="nav-link" data-toggle="tab" role="tab">Registration Fees</a>
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
															<p>The Marriage registration Module allows the citizens of Odisha state to apply for a marriage registration
																certificate from any municipality through a website or a mobile application remotely. </p>
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
																1. Apply for Marriage registration Certificate <br></br>
																2. Receive prompt notifications and updates <br></br>
																3. Modify your Marriage Certificate if required
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

													</div>
												</div>


												<div id="pane-d" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-d">

													<div className="card-header" role="tab" id="heading-d">
														<h5 className="mb-0">
															<a className="collapsed" data-toggle="collapse" href="#collapse-d" data-parent="#content" aria-expanded="false" aria-controls="collapse-d">
																User Manual
															</a>
														</h5>
													</div>

													<div id="collapse-d" className="collapse" role="tabpanel" aria-labelledby="heading-d">

														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">Marriage Registration User Manual for Citizen
																<div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_Marriage Registration_Citizen User Manual.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt ="" className="fkdl" /></a>
																</div>

																<div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_Marriage Registration_Citizen User Manual.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img src="/assets/img/view.svg" alt ="" className="fkdl" /></a>
																</div>
															</div>
														</div>

														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">SUJOG FAQ document
																<div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt ="" className="fkdl" /></a>
																</div>

																<div className="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img src="/assets/img/view.svg" alt ="" className="fkdl" /></a>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div id="pane-e" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-e">

													<div className="card-header" role="tab" id="heading-e">
														<h5 className="mb-0">
															<a className="collapsed" data-toggle="collapse" href="#collapse-e" data-parent="#content" aria-expanded="false" aria-controls="collapse-e">
																Marriage Registration Fees
															</a>
														</h5>
													</div>

													<div id="collapse-e" className="collapse" role="tabpanel" aria-labelledby="heading-e">

														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">Marriage Registration Fees
																<div className="h5 pull-right"><a href="/Deshboard/images/Marriage Registration Fees.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt ="" className="fkdl" /></a>
																</div>

																<div className="h5 pull-right"><a href="/Deshboard/images/Marriage Registration Fees.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img src="/assets/img/view.svg" alt ="" className="fkdl" /></a>
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