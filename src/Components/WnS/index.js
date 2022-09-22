import React from "react";
import { Helmet } from "react-helmet";
import { showFormattedCurrentDate } from "../../Actions/CommonFunctions";

function WnS() {
	return <div class="container">
		<div id="layoutSidenav_content">
			<Helmet><title>Water & Sewerage</title> </Helmet>
			<main>
				<header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
					<div class="container-fluid">
						<div class="page-header-content">
							<div class="row align-items-center justify-content-between">
								<div class="col-auto">
									<h1 class="page-header-title">
										<div class="page-header-icon"><i data-feather="activity"></i></div>
										Services / Water & Sewerage
									</h1>

								</div>

							</div>
						</div>
					</div>
				</header>

				<div class="container-fluid mt-n10">
					<div class="col">
						<div class="row">
							<div class="col-xl-6 col-md-6 mb-4 card">
								<div class="card-header">Public Dashboard <span class="lart1">Last Update: {showFormattedCurrentDate()}</span></div>
								<div class="row card-body">
									<div class="container">
										<div class="row">
											<div id="accordion" class="width2">
												<div class="card">
													<div class="card-header">
														<a class="card-link text-dark" data-toggle="collapse" href="#collapseOne"><span class="float-right"><i class="fa fa-arrow-down"></i></span>
															<h6>Water & Sewerage</h6>
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
																					<div class="h5">23867</div>
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
																					<div class="h5">23096</div>
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
																					<div class="h5">130</div>
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
																					<div class="h5">641</div>
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
																					<div class="small font-weight-bold text-success mb-1">Median Number of Days for Approval</div>
																					<div class="h5">1</div>
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
																					<div class="h5">226</div>
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

							<div class="col-xl-6 col-md-6 mb-4 card card2">
								<div class="card-header">Information related to Water & Sewerage</div>
								<div class="row card-body">
									<div class="col-md-12">
										<div class="d-flex">

											<ul id="tabs" class="nav nav-tabs" role="tablist">
												<li class="nav-item">
													<a id="tab-A" href="#pane-A" class="nav-link active" data-toggle="tab" role="tab">About</a>
												</li>
												<li class="nav-item">
													<a id="tab-B" href="#pane-B" class="nav-link" data-toggle="tab" role="tab">Facilities</a>
												</li>
												<li class="nav-item">
													<a id="tab-C" href="#pane-C" class="nav-link" data-toggle="tab" role="tab">List of Documents</a>
												</li>
												<li className="nav-item">
													<a id="tab-e" href="#pane-e" className="nav-link" data-toggle="tab" role="tab">Rules and Regulations</a>
												</li>
												<li class="nav-item">
													<a id="tab-d" href="#pane-d" class="nav-link" data-toggle="tab" role="tab"> User Manual </a>
												</li>




											</ul>

											<div id="content" class="tab-content" role="tablist">
												<div id="pane-A" class="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">

													<div class="card-header" role="tab" id="heading-A">
														<h5 class="mb-0">
															<a data-toggle="collapse" href="#collapse-A" data-parent="#content" aria-expanded="true" aria-controls="collapse-A">
																About
															</a>
														</h5>
													</div>

													<div id="collapse-A" class="collapse show" role="tabpanel" aria-labelledby="heading-A">

														<div class="flex-grow-1 free-1">
															<p>The Water and Sewerage (W&S) system provides a digital interface to apply for water and sewerage connections,
																pay the water and sewerage charges for connection(s). It can be used by the citizens, Urban Local Body (ULB)
																counter employees and field employees, and ULB Administrators, PHEO and WATCO to accomplish their specific tasks.</p>
														</div>
													</div>
												</div>


												<div id="pane-B" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">
													<div class="card-header" role="tab" id="heading-B">
														<h5 class="mb-0">
															<a class="collapsed" data-toggle="collapse" href="#collapse-B" data-parent="#content" aria-expanded="false" aria-controls="collapse-B">
																Facilities
															</a>
														</h5>
													</div>
													<div id="collapse-B" class="collapse" role="tabpanel" aria-labelledby="heading-B">
														<div class="flex-grow-1 free-1">
															<p>
																1. No waiting period to receive Water bills. Realtime bill generation facility as per meter reading.<br></br>
																2. Apply for new Water or Sewerage Connecti on <br></br>
																3. Apply for Disconnection or reconnection <br></br>
																4. Transfer of connection <br></br>
																5. Make Online payments <br></br>
															</p>
														</div>
													</div>

												</div>



												<div id="pane-C" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">

													<div class="card-header" role="tab" id="heading-C">
														<h5 class="mb-0">
															<a class="collapsed" data-toggle="collapse" href="#collapse-C" data-parent="#content" aria-expanded="false" aria-controls="collapse-C">
																List of Documents
															</a>
														</h5>
													</div>

													<div id="collapse-C" class="collapse" role="tabpanel" aria-labelledby="heading-C">

														<div class="flex-grow-1 free-1">
															<div class="small font-weight-bold text-primary mb-1">List of Documents required for adding new Connection
																<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for adding new water or sewerage connection.pdf" class="tooltip"
																	target="_blank">
																	<span class="tooltiptext">Download</span><img alt="Water & Sewerage" src="/assets/img/download.svg" class="fkdl" /></a>
																</div>
																<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for adding new water or sewerage connection.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">View</span><img alt="Water & Sewerage" src="/assets/img/view.svg" class="fkdl" /></a>
																</div>
															</div>
														</div>

														<div class="flex-grow-1 free-1">
															<div class="small font-weight-bold text-primary mb-1">List of Documents required for Ownership transfer of Connection.
																<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for transfer of Water connection.pdf" class="tooltip"
																	target="_blank">
																	<span class="tooltiptext">Download</span><img alt="Water & Sewerage" src="/assets/img/download.svg" class="fkdl" /></a>
																</div>
																<div class="h5 pull-right"><a href="/Deshboard/images/List of Documents required for transfer of Water connection.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">View</span><img alt="Water & Sewerage" src="/assets/img/view.svg" class="fkdl" /></a>
																</div>
															</div>
														</div>



													</div>
												</div>


												<div id="pane-d" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-d">

													<div class="card-header" role="tab" id="heading-d">
														<h5 class="mb-0">
															<a class="collapsed" data-toggle="collapse" href="#collapse-d" data-parent="#content" aria-expanded="false" aria-controls="collapse-d">
																User Manual
															</a>
														</h5>
													</div>

													<div id="collapse-d" class="collapse" role="tabpanel" aria-labelledby="heading-d">

														<div class="flex-grow-1 free-1">
															<div class="small font-weight-bold text-primary mb-1">Water & Sewerage User Manual for Citizen

																<div class="h5 pull-right"><a href="/Deshboard/images/SUJOG_WS_Citizen User Manual.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">Download</span><img alt="Water & Sewerage" src="/assets/img/download.svg" class="fkdl" /></a>
																</div>
																<div class="h5 pull-right"><a href="/Deshboard/images/SUJOG_WS_Citizen User Manual.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">View</span><img alt="Water & Sewerage" src="/assets/img/view.svg" class="fkdl" /></a>
																</div>
															</div>
														</div>

														<div class="flex-grow-1 free-1">
															<div class="small font-weight-bold text-primary mb-1">SUJOG FAQ document
																<div class="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" class="tooltip" target="_blank">
																	<span class="tooltiptext">Download</span><img alt="Water & Sewerage" src="/assets/img/download.svg" class="fkdl" /></a>
																</div>
																<div class="h5 pull-right"><a href="/Deshboard/images/SUJOG_FAQ Document.pdf" class="tooltip" target="_blank"><span class="tooltiptext">View</span><img alt="Water & Sewerage" src="/assets/img/view.svg" class="fkdl" /></a>
																</div>

															</div>
														</div>

													</div>
												</div>

												<div id="pane-e" className="card tab-pane fade" role="tabpanel" aria-labelledby="tab-e">
													<div className="card-header" role="tab" id="heading-e">
														<h5 className="mb-0">
															<a className="collapsed" data-toggle="collapse" href="#collapse-e" data-parent="#content" aria-expanded="false" aria-controls="collapse-e">
																Rules and Regulations
															</a>
														</h5>
													</div>

													<div id="collapse-e" className="collapse" role="tabpanel" aria-labelledby="heading-e">
														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">1948 H&UD Deptt._Water Rule.pdf
																<div className="h5 pull-right"><a href="Deshboard/images/1948 H&UD Deptt._Water Rule.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt ="" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="Deshboard/images/1948 H&UD Deptt._Water Rule.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">View</span><img src="/assets/img/view.svg" alt ="" className="fkdl" /></a>
																</div>
															</div>
														</div>

														<div className="flex-grow-1 free-1">
															<div className="small font-weight-bold text-primary mb-1">Odisha State Urban Water Supply Policy-2013.pdf
																<div className="h5 pull-right"><a href="Deshboard/images/Odisha State Urban Water Supply Policy-2013.pdf" className="tooltip" target="_blank">
																	<span className="tooltiptext">Download</span><img src="/assets/img/download.svg" alt ="" className="fkdl" /></a>
																</div>
																<div className="h5 pull-right"><a href="Deshboard/images/Odisha State Urban Water Supply Policy-2013.pdf" className="tooltip" target="_blank">
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
export default WnS;