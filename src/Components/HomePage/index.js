import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
//import $ from "jquery";
class HomePage extends React.Component {
  constructor() {
    super();
  }
  componentDidMount = () => {
    const script = document.createElement("script");
    script.src = "/assets/js/main.js";
    script.async = true;
    //script.onload = () => this.scriptLoaded();

    document.body.appendChild(script);
    var modal = document.getElementById("myModal");
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    img.onclick = function () {
      modal.style.display = "block";
      modalImg.src = this.src;
      captionText.innerHTML = this.alt;
    };
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
      modal.style.display = "none";
    };
    console.log(captionText, "Nero");
  };
  render() {
    return (
      <>
        <div className="container">
          <Helmet>
            <title>SUJOG</title>
          </Helmet>
          <div className="chif" data-aos="fade-up" data-aos-delay="100">
            <img alt="homepage" src="assets/img/Chif-minister-2.png" />
          </div>
          <section id="hero">
            <div className="hero-container">
              <div
                id="heroCarousel"
                className="carousel slide carousel-fade"
                data-ride="carousel"
              >
                <ol
                  className="carousel-indicators"
                  id="hero-carousel-indicators"
                ></ol>
                <div className="carousel-inner" role="listbox">
                  <div
                    className="carousel-item active"
                    style={{
                      backgroundImage: "url('assets/img/slide/slide-2.jpg')",
                    }}
                  >
                    <div className="carousel-container">
                      <div className="carousel-content container"></div>
                    </div>
                  </div>

                  <div
                    className="carousel-item"
                    style={{
                      backgroundImage: "url('assets/img/slide/slide-3.jpg')",
                    }}
                  >
                    <div className="carousel-container">
                      <div className="carousel-content container"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <main id="main">
          <div id="about" class="about about-pading">
            <div class="container">
              <div class="row no-gutters">
                <div
                  class="col-lg-5 col-md-6 video-box"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img src="assets/img/mobile.png" class="img-fluid" alt="" />
                </div>

                <div class="col-lg-7 col-md-6 d-flex flex-column">
                  <div
                    class="section-title"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h2>ABOUT SUJOG</h2>
                    <p>
                      H&UDD has launched ‘SUJOG - Sustainable Urban Services in
                      a Jiffy by Odisha Government’ to roll out e-governance
                      services across the ULBs in the state. SUJOG will make
                      urban governance transparent, technology enabled,
                      time-bound through teamwork, thereby leading to
                      transformation in the lives of citizens in all Urban Local
                      Bodies of the state.
                    </p>
                  </div>
                  <a
                    class="btn btn-primary width1"
                    data-toggle="collapse"
                    href="#collapseExample"
                    role="button"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    Read more +{" "}
                  </a>
                </div>

                <div class="col-lg-12 col-md-12 text1">
                  <div class="icon-box" data-aos="fade-up" data-aos-delay="100">
                    <div class="collapse" id="collapseExample">
                      <div class="card card-body">
                        <div
                          class="icon-box"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <div class="icon">
                            <img
                              src="assets/img/OBJECTIVE.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <h4 class="title">
                            <a href="about.html">Vision </a>
                          </h4>
                          <p class="description">
                            To keep citizens at the centre of the Digital
                            Transformation of urban services.
                          </p>
                        </div>

                        <div
                          class="icon-box"
                          data-aos="fade-up"
                          data-aos-delay="100"
                        >
                          <div class="icon">
                            <img
                              src="assets/img/vision.png"
                              class="img-fluid"
                              alt=""
                            />
                          </div>
                          <h4 class="title">
                            <a href="">Objective</a>
                          </h4>
                          <p class="description">
                            The broad objectives of the project include:{" "}
                            <br></br>
                            <strong>a.</strong> Provide enhanced quality of
                            urban services to citizens through online / single
                            window service delivery channel and ensure
                            accessible, convenient, transparent and timely
                            delivery of services. <br></br>
                            <strong>b.</strong> Minimize the number of visits
                            required by the citizens to the ULBs. <br></br>
                            <strong>c.</strong> Achieve internal efficiency &
                            effectiveness of the ULB by <br></br>
                            <i class="bx bx-wifi-0"></i> Automating and
                            optimizing their back-office processes, which helps
                            them, focus on their core functions and
                            responsibilities by freeing them from routine
                            operations. <br></br>
                            <i class="bx bx-wifi-0"></i> Integrating the
                            departments/functions within ULB for better
                            information flow and transparency. <br></br>
                            <strong>d. </strong> Integrate with the existing
                            software in place at H&UDD/ULB/Other urban
                            parastatals.<br></br>
                            <strong>e. </strong> Facilitate secure,
                            instantaneous and online payment options for the
                            taxes and statutory fees associated with services.
                            <br></br>
                            <strong>f. </strong> Reduce administrative burden
                            and be a cost-effective service delivery channel for
                            ULBs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="counts section-bg2">
            <div className="container">
              <div className="section-title">
                <h1>Services</h1>
                <p>
                  Efficiently aggregate end-to-end core competencies without
                  maintainable ideas. <br />
                  Dynamically foster tactical solutions without enabled value.
                </p>
              </div>
              <div className="row">
                <div
                  className="col-lg-6 col-md-6 content-item"
                  data-aos="fade-up"
                >
                  <div className="count-box">
                    <img src="assets/img/servic-1.png" alt="" />
                    <div className="servic-right">
                      <h4>
                        <a href="/obpas-dashboard" rel="noreferrer">
                          Building Permission Approval
                        </a>
                      </h4>
                      <p>
                        Online Building Permission System (OBPS) envisages
                        complete automation of all processes related to building
                        plan approval. All the processes and steps including
                        calculation of fee, payment of fee, receipt of approval
                        for the permission and certificates, etc. would be
                        delivered online through an integrated one stop
                        solution.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 content-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="count-box">
                    <img src="assets/img/servic-2.png" alt="" />
                    <div className="servic-right">
                      <h4>
                        <Link to="pgr">Public Grievance Redressal</Link>
                      </h4>
                      <p>
                        PGR system is an application in which citizens can lodge
                        complaints and track the status of redressal mechanism.
                        The Citizen or Citizen Service Representative (CSR) on
                        behalf of citizens can lodge civic works and
                        miscellaneous griverance elated complaints in the PGR
                        system.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 content-item"
                  data-aos="fade-up"
                >
                  <div className="count-box">
                    <img src="assets/img/servic-3.png" alt="" />
                    <div className="servic-right">
                      <h4>
                        <Link to="tl">Trade License</Link>
                      </h4>
                      <p>
                        The Trade License System provides a digital interface,
                        allowing citizens to apply for the Trade License and
                        subsequently make the payment online. Traders can apply
                        for new licenses, renewals, amendments, and supplemental
                        licenses. It streamlines and automates business
                        licensing processes and helps a business to be set up
                        quickly.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 content-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="count-box">
                    <img src="assets/img/servic-4.png" alt="" />
                    <div className="servic-right">
                      <h4>
                        <Link to="pt">Property Tax </Link>
                      </h4>
                      <p>
                        SUJOG's Property Tax service facilitates citizens to pay
                        their necessary Property Tax to their respective urban
                        Local bodies. Citizens can now apply for reassessment of
                        property, transfer of ownership of their properties
                        through SUJOG.
                      </p>
                      <p>
                        itizens do not have to physically visit the ULBs to pay
                        their taxes but rather access SUJOG remotely to avail
                        the services.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 content-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="count-box">
                    <img src="assets/img/water.png" alt="" />
                    <div className="servic-right">
                      <h4>
                        <Link to="wns">Water & Sewerage</Link>
                      </h4>
                      <p>
                        The Water and Sewerage (W&S) system provides a digital
                        interface to apply for water and sewerage connections,
                        pay the water and sewerage charges for connection(s). It
                        can be used by the citizens, Urban Local Body (ULB)
                        counter employees and field employees, and ULB
                        Administrators, PHEO and WATCO to accomplish their
                        specific tasks.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-6 col-md-6 content-item"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="count-box">
                    <img src="assets/img/finance.png" alt="" />
                    <div className="servic-right">
                      <h4>
                        <Link to="mr">Marriage Registration</Link>
                      </h4>
                      <p>
                        The Marriage registration Module allows the citizens of
                        Odisha state to apply for a marriage registration
                        certificate from any municipality through a website or a
                        mobile application remotely.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="counts section-bg3">
            <div className="container">
              <div className="row">
                <div
                  className="col-lg-7 col-md-6 text-center"
                  data-aos="fade-up"
                >
                  <div className="whats-new">
                    <div className="section-title">
                      <h4>What's New</h4>
                    </div>
                    <div className="body1-left-side">
                      <div className="block-hdnews">
                        <div className="list-wrpaaer">
                          <ul
                            className="list-aggregate"
                            id="marquee-vertical-2"
                          >
                            <li>
                              <div className="policy-img2">
                                {" "}
                                <h4>JAN</h4>
                                <span>2021</span>
                              </div>
                              <div className="buy-policy-2">
                                <h3>
                                  <a
                                    href="https://interviewtimes.net/odisha-bagged-two-national-awards-at-the-second-edition-of-the-janaagraha-city-governance-awards/"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    Odisha Bagged Two National Awards At The
                                    Second Edition Of The Janaagraha City
                                    Governance Awards
                                  </a>
                                </h3>
                                <p>
                                  The Housing and Urban Development (H&UDD) won
                                  the Best State Award for JAGA Mission for
                                  sanctioning of laws, drafting of policies,
                                  setting up of institutional mechanisms,
                                  programs, or schemes to successfully foster
                                  urban decentralization in the cities and
                                  State.
                                </p>
                              </div>
                            </li>

                            <li>
                              <div className="policy-img2">
                                {" "}
                                <h4>JAN</h4>
                                <span>2021</span>
                              </div>
                              <div className="buy-policy-2">
                                <h3>
                                  <a
                                    href="https://orissadiary.com/odisha-govt-to-built-inter-state-bus-terminal-in-cuttack-at-the-cost-of-rs-65-crore-to-be-named-after-netaji/"
                                    rel="noreferrer"
                                    target="_blank"
                                  >
                                    Odisha Govt to built Inter-State Bus
                                    Terminal in Cuttack at the cost of Rs 65
                                    crore, to be named after Netaji
                                  </a>
                                </h3>
                                <p>
                                  Chief Minister Naveen Patnaik announced that a
                                  state-of-the-art Bus Terminal will be
                                  constructed at Khannagar, Cuttack with an
                                  allocation of Rs. 65 Crore and this will be
                                  named after Netaji Subhash Chandra Bose.
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="col-lg-5 col-md-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <div className="ulb">
                    <h2>ULB Profile</h2>
                  </div>
                  <div className="odisha-map">
                    <img id="myImg" src="assets/img/map-2.jpg" alt="Snow" />
                  </div>
                </div>
                <div id="myModal" className="modal">
                  <span className="close">&times;</span>
                  <img className="modal-content" id="img01" />
                  <div id="caption"></div>
                </div>
              </div>
            </div>
          </section>
          <section className="counts section-bg">
            <div className="container">
              <div className="section-title">
                <h3>Important Links</h3>
              </div>

              <div className="row">
                <div
                  className="col-lg-3 col-md-6 text-center"
                  data-aos="fade-up"
                >
                  <a
                    href="https://odisha.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="count-box2">
                      <h4>Government of Odisha</h4>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-3 col-md-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <a
                    href="https://en.wikipedia.org/wiki/Odisha"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="count-box2">
                      <h4>About Odisha</h4>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-3 col-md-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <a
                    href="https://www.odishaonline.gov.in/site/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="count-box2">
                      <h4>Odisha Online</h4>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-3 col-md-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="http://www.urbanodisha.gov.in/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="count-box2">
                      <h4>HUDD</h4>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-3 col-md-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="https://mosarkar.odisha.gov.in/App/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="count-box2">
                      <h4>Mo Sarkar</h4>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-3 col-md-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="https://www.odishatourism.gov.in/content/tourism/en.html"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="count-box2">
                      <h4>Odisha Tourism</h4>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-3 col-md-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="https://pareshram-labour.odisha.gov.in/en/labour"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="count-box2">
                      <h4>Pareshram</h4>
                    </div>
                  </a>
                </div>

                <div
                  className="col-lg-3 col-md-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <a
                    href="https://www.tendersodisha.gov.in/nicgep/app"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <div className="count-box2">
                      <h4>Odisha Tender</h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
    );
  }
}

export default HomePage;
