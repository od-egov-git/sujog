import React from "react";
import { Helmet } from "react-helmet";

function Dashboard() {
	return <div id="layoutSidenav_content">
		<Helmet>
			<title>Welcome to ODISHA DIGIT</title>
		</Helmet>
		<main>
			<header class="page-header page-header-dark bg-gradient-primary-to-secondary pb-10">
				<div class="container-fluid">
					<div class="page-header-content">
						<div class="row align-items-center justify-content-between">
							<div class="col-auto">
								<h1 class="page-header-title">
									<div class="page-header-icon"><i data-feather="activity"></i></div>
                                            Welcome to Online Building Plan Approval
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


							<div class="card-header">Public Dashboard <span class="lart1">Last Update: 07.12.2021</span></div>

							<div class="row card-body">

								<div class="container">
									<div class="row">

										<div id="accordion" class="width2">

											<div class="card">
												<div class="card-header">
													<a class="card-link text-dark" data-toggle="collapse" href="#collapseOne"><span class="float-right"><i class="fa fa-arrow-down"></i></span>
														<h6>Building Plan Application Approval</h6>

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
																				<div class="small font-weight-bold text-primary mb-1">Low Risk Approval</div>
																				<div class="h5">7 Days</div>
																				<div class="small font-weight-bold text-primary mb-1">Other than Low Risk Approval </div>
																				<div class="h5">60 Days</div>
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
																				<div class="h5">1729</div>
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
																				<div class="h5">533</div>
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
																				<div class="h5">25</div>
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
																				<div class="h5">1171</div>
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
																				<div class="h5">42.45</div>
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
																				<div class="h5">30</div>
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
																				<div class="h5">209</div>

																			</div>

																		</div>
																	</div>
																</div>
															</div>

														</div>
													</div>
												</div>
											</div>

											<div class="card">
												<div class="card-header">
													<a class="collapsed card-link text-dark" data-toggle="collapse" href="#collapseThree"><span class="float-right"><i class="fa fa-arrow-down"></i></span>
														<h6>Occupancy certificate

</h6>
														<span class="float-right"><i class="ti-plus"></i></span>
													</a>
												</div>
												<div id="collapseThree" class="collapse" data-parent="#accordion">
													<div class="row card-body">

														<div class="col-xl-4 col-md-6 mb-4">

															<div class="card border-top-0 border-bottom-0 border-right-0 border-left-lg border-primary h-100">
																<div class="card-body">
																	<div class="d-flex align-items-center">
																		<div class="flex-grow-1">
																			<div class="small font-weight-bold text-primary mb-1">Occupancy Application
</div>
																			<div class="h5">30 Days</div>

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
																			<div class="small font-weight-bold text-secondary mb-1">Total Number of Applications Received
</div>
																			<div class="h5">0</div>

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
																			<div class="small font-weight-bold text-success mb-1">Number of Applications Approved
</div>
																			<div class="h5">0</div>

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
																			<div class="small font-weight-bold text-info mb-1">Number of Applications Rejected
</div>
																			<div class="h5">0</div>

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
																			<div class="h5">0</div>

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
																			<div class="h5">0</div>

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
																			<div class="small font-weight-bold text-success mb-1">Median Number of Days for Approval

</div>
																			<div class="h5">0</div>

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
																			<div class="small font-weight-bold text-info mb-1">Minimum Number of Days for Approval

</div>
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
																			<div class="small font-weight-bold text-success mb-1">Maximum Number of Days for Approval
</div>
																			<div class="h5">0</div>

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
							<div class="card-header">Information related to Building Plan Application Approval</div>
							<div class="row card-body">
								<div class="col-md-12">
									<div class="d-flex">

										<ul id="tabs" class="nav nav-tabs" role="tablist">
											<li class="nav-item">
												<a id="tab-A" href="#pane-A" class="nav-link active" data-toggle="tab" role="tab">OBPAS Training Videos</a>
											</li>
											<li class="nav-item">
												<a id="tab-B" href="#pane-B" class="nav-link" data-toggle="tab" role="tab">Drawing Manual</a>
											</li>
											<li class="nav-item">
												<a id="tab-C" href="#pane-C" class="nav-link" data-toggle="tab" role="tab">Drawing Template</a>
											</li>

											<li class="nav-item">
												<a id="tab-d" href="#pane-d" class="nav-link" data-toggle="tab" role="tab">Project Risk Criterias </a>
											</li>

											<li class="nav-item">
												<a id="tab-e" href="#pane-e" class="nav-link" data-toggle="tab" role="tab">Reference Files</a>
											</li>

											<li class="nav-item">
												<a id="tab-f" href="#pane-f" class="nav-link" data-toggle="tab" role="tab">Practice Files</a>
											</li>

											<li class="nav-item">
												<a id="tab-g" href="#pane-g" class="nav-link" data-toggle="tab" role="tab">User Manuals</a>
											</li>

											<li class="nav-item">
												<a id="tab-h" href="#pane-h" class="nav-link" data-toggle="tab" role="tab">NOC list</a>
											</li>


										</ul>

										<div id="content" class="tab-content" role="tablist">
											<div id="pane-A" class="card tab-pane fade show active" role="tabpanel" aria-labelledby="tab-A">

												<div class="card-header" role="tab" id="heading-A">
													<h5 class="mb-0">
														<a data-toggle="collapse" href="#collapse-A" data-parent="#content" aria-expanded="true" aria-controls="collapse-A">
														OBPAS Training Videos
												  </a>
													</h5>
												</div>

												<div id="collapse-A" class="collapse show" role="tabpanel" aria-labelledby="heading-A">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">
															<div class=" pull-right">
																<a href="https://www.youtube.com/channel/UCMF4tn_dSwgRuiCuPsvEosg" class="tooltip" target="_blank">
																	Go to Training Videos</a>
															</div>
															
														</div>
													</div>

													

												</div>
											</div>

											<div id="pane-B" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-B">

												<div class="card-header" role="tab" id="heading-B">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-B" data-parent="#content" aria-expanded="false" aria-controls="collapse-B">
															Drawing Manual
											  </a>
													</h5>
												</div>

												<div id="collapse-B" class="collapse" role="tabpanel" aria-labelledby="heading-B">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Drawing Manual_Odisha OBPS
											<div class="h5 pull-right"><a href="/Deshboard/images/Drawing Manual_Odisha OBPS_v1.2.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Drawing Manual_Odisha OBPS_v1.2.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													

												</div>
											</div>

											<div id="pane-C" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-C">

												<div class="card-header" role="tab" id="heading-C">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-C" data-parent="#content" aria-expanded="false" aria-controls="collapse-C">
														Drawing Template
											  </a>
													</h5>
												</div>

												<div id="collapse-C" class="collapse" role="tabpanel" aria-labelledby="heading-C">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Odisha OBPS Drawing Template(DWG)
											<div class="h5 pull-right"><a href="/Deshboard/images/Odisha OBPS Drawing Template_v1.2.dwg" class="tooltip"
																target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Odisha OBPS Drawing Template_v1.2.dwg" class="tooltip">
																<span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Odisha OBPS Drawing Template(DXF)
												<div class="h5 pull-right"><a href="/Deshboard/images/Odisha OBPS Drawing Template_v1.2.dxf" class="tooltip"
																target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Odisha OBPS Drawing Template_v1.2.dxf" class="tooltip">
																<span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>


												</div>
											</div>

											<div id="pane-d" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-d">

												<div class="card-header" role="tab" id="heading-d">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-d" data-parent="#content" aria-expanded="false" aria-controls="collapse-d">
														Project Risk Criterias
												  </a>
													</h5>
												</div>

												<div id="collapse-d" class="collapse" role="tabpanel" aria-labelledby="heading-d">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Low & Other Than Low Risk Criterias
												<div class="h5 pull-right"><a href="/Deshboard/images/Low & Other Than Low Risk Criterias.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Low & Other Than Low Risk Criterias.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													

												</div>
											</div>

											<div id="pane-e" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-e">

												<div class="card-header" role="tab" id="heading-e">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-e" data-parent="#content" aria-expanded="false" aria-controls="collapse-e">
														Reference Files
												  </a>
													</h5>
												</div>

												<div id="collapse-e" class="collapse" role="tabpanel" aria-labelledby="heading-e">
													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Apartment & Housing Projects(DWG)
												<div class="h5 pull-right"><a href="/Deshboard/images/OBPS Reference File - Apartment & Housing Projects.dwg" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/OBPS Reference File - Apartment & Housing Projects.dwg" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Apartment & Housing Projects(DXF)
										<div class="h5 pull-right"><a href="/Deshboard/images/OBPS Reference File - Apartment & Housing Projects.dxf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/OBPS Reference File - Apartment & Housing Projects.dxf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>

														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Commercial(DWG)
										<div class="h5 pull-right"><a href="/Deshboard/images/OBPS Reference File - Commercial.dwg" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/OBPS Reference File - Commercial.dwg" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>

														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Commercial(DXF)
										<div class="h5 pull-right"><a href="/Deshboard/images/OBPS Reference File - Commercial.dxf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/OBPS Reference File - Commercial.dxf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>

														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Residential Detached(DWG)
										<div class="h5 pull-right"><a href="/Deshboard/images/OBPS Reference File - Residential Detached.dwg" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/OBPS Reference File - Residential Detached.dwg" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>

														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Residential Detached(DXF)
										<div class="h5 pull-right"><a href="/Deshboard/images/OBPS Reference File - Residential Detached.dxf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/OBPS Reference File - Residential Detached.dxf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>

														</div>
													</div>

												</div>
											</div>


											<div id="pane-f" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-f">

												<div class="card-header" role="tab" id="heading-f">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-f" data-parent="#content" aria-expanded="false" aria-controls="collapse-f">
														Practice Files
												  </a>
													</h5>
												</div>

												<div id="collapse-f" class="collapse" role="tabpanel" aria-labelledby="heading-f">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Apartment Bldgs & Housing Projects
													<div class="h5 pull-right"><a href="/Deshboard/images/Apartment Bldgs & Housing Projects - Practice File.dxf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Apartment Bldgs & Housing Projects - Practice File.dxf" class="tooltip">
																<span class="tooltiptext">View</span><imgv src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Commercial Drawing
													<div class="h5 pull-right"><a href="/Deshboard/images/Commercial Drawing - Practice File.dxf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/Commercial Drawing - Practice File.dxf" class="tooltip">
																<span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">Residential Detached

												   <div class="h5 pull-right"><a href="/Deshboard/images/Residential Detached - Practice File.dxf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>

															<div class="h5 pull-right"><a href="/Deshboard/images/Residential Detached - Practice File.dxf" class="tooltip"><span class="tooltiptext">View</span>
																<img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

												</div>
											</div>


											<div id="pane-g" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-g">

												<div class="card-header" role="tab" id="heading-g">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-g" data-parent="#content" aria-expanded="false" aria-controls="collapse-g">
														User Manuals
											  </a>
													</h5>
												</div>

												<div id="collapse-g" class="collapse" role="tabpanel" aria-labelledby="heading-g">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">OBPS User Manual_Architect & Technical Person
													<div class="h5 pull-right"><a href="/Deshboard/images/OBPS User Manual_Architect & Technical Person.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/OBPS User Manual_Architect & Technical Person.pdf" class="tooltip">
																<span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">OBPS User Manual_Citizen

												   <div class="h5 pull-right"><a href="/Deshboard/images/OBPS User Manual_Citizen.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>

															<div class="h5 pull-right"><a href="/Deshboard/images/OBPS User Manual_Citizen.pdf" class="tooltip"><span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
															</div>
														</div>
													</div>

												</div>
											</div>

											<div id="pane-h" class="card tab-pane fade" role="tabpanel" aria-labelledby="tab-h">

												<div class="card-header" role="tab" id="heading-h">
													<h5 class="mb-0">
														<a class="collapsed" data-toggle="collapse" href="#collapse-h" data-parent="#content" aria-expanded="false" aria-controls="collapse-h">
														NOC list
	  </a>
													</h5>
												</div>

												<div id="collapse-h" class="collapse" role="tabpanel" aria-labelledby="heading-h">

													<div class="flex-grow-1 free-1">
														<div class="small font-weight-bold text-primary mb-1">NOC Mapping for all occuppancies
			<div class="h5 pull-right"><a href="/Deshboard/images/NOC Mapping for all occuppancies.pdf" class="tooltip" target="_blank">
																<span class="tooltiptext">Download</span><img alt="bpa" src="/Deshboard/images/download.svg" class="fkdl" /></a>
															</div>
															<div class="h5 pull-right"><a href="/Deshboard/images/NOC Mapping for all occuppancies.pdf" class="tooltip">
																<span class="tooltiptext">View</span><img alt="bpa" src="/Deshboard/images/view.svg" class="fkdl" /></a>
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
};
export default Dashboard;
