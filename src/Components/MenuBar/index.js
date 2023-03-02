import React from "react";
import { Link } from "react-router-dom";

function Menubar() {
    return <header id="header">
        <div className="container">

            <div className="logo float-left">
            <Link to="/home"><img src="assets/img/Sujog.jpg" alt="" className="img-fluid" /></Link>
            </div>

            <nav className="nav-menu float-right d-none d-lg-block">


                <ul>
                    <li className="active"><Link to="/home">Home</Link></li>
                    {/* <li><Link to="/aboutus" >About Us</Link></li> */}
                    <li className="drop-down"><Link to="/comingsoon">Services</Link>
                        <ul>
                            {/* <li><a href="https://sujog.odisha.gov.in/citizen/" rel="noreferrer">OBPAS</a></li> */}
                            {/* <li><a href="https://sujog.odisha.gov.in/citizen/" rel="noreferrer">Building Permission Approval</a></li> */}
                            <li><a href="/obpas-dashboard" rel="noreferrer">Building Permission Approval</a></li>
                            <li><Link to="/pgr">Public Grievance Redressal</Link></li>
                            <li><Link to="/pt">Property Tax</Link></li>
                            <li><Link to="/wns">Water & Sewerage</Link></li>
                            <li><Link to="/tl">Trade License</Link></li>
                            <li><Link to="/mr">Marriage Registration</Link></li>
                        </ul>
                    </li>
                    <li className="drop-down"><Link to="comingsoon">Information</Link>
                        <ul>
                            <li><Link to="rti">RTI</Link></li>
                            <li><Link to="comingsoon">Public Notice</Link></li>
                            <li><a rel="noreferrer" href="http://www.urbanodisha.gov.in/Admin/Upload_Files/Citizen%20Charter/Draft%20Citizen%20Charter_HUD_Final.pdf" target="_blank">Citizen Charter</a></li>
                            <li><Link to="privacy-policy">Privacy Policy</Link></li>
                        </ul>
                    </li>
                    {/* <li className="drop-down"><Link >ULBs</Link>
                        <ul>
                            <li><a rel="noreferrer" href="https://sujogportal.odisha.gov.in/cuttack">Cuttack</a></li>
                            <li><a rel="noreferrer" href="https://sujogportal.odisha.gov.in/berhampur">Berhampur</a></li>
                        </ul>
                    </li> */}
                    <li><Link to="/ulbs">ULBs</Link></li>
                    <li><Link to="/contactus">Helpdesk</Link></li>
                    {/* <li className="login"><a href="https://sujog.odisha.gov.in/citizen/" rel="noreferrer">login</a></li> */}
                    <li class="login">
                        <div class="dropdown">
                            <a class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                Log In
			  </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item d-none d-lg-block" href="https://sujog.odisha.gov.in/citizen/user/register">Citizen</a>
                                <a class="dropdown-item d-none d-lg-block" href="https://sujog.odisha.gov.in/employee/user/login">Department</a>
                                <a class="dropdown-item d-none d-lg-block" href="https://sujog.odisha.gov.in/digit-ui/citizen/login">others</a>
                                <a class="dropdown-item d-none d-lg-block" href="/tpa">TPA</a>
                            </div>
                        </div>
                    </li>
                </ul>


            </nav>


        </div>
    </header>
};
export default Menubar;