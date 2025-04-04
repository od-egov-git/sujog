import React, { Component } from "react";
import LanguageSwitcher from "../LanguageSwitcher";
class Header extends Component {

    render() {
        return <section id="topbar" className="top-header d-none d-lg-block">
            <div className="container clearfix">
                <div className="contact-info float-left">
                    <span style={{ fontSize: "16px" }}><i className="icofont-phone"></i> 1800 121 6833</span>
                    <span><i className="icofont-envelope"></i><img src="/assets/img/email_header.png" alt="Contact Email" style={{width: "65%"}}/></span>
                </div>
                {/* <nav className="nav-menu float-right d-none d-lg-block">
                    <ul>
                        <li className="language-switcher">
                            <LanguageSwitcher />
                        </li>
                    </ul>
                </nav> */}
            </div>
        </section>
    }
};
export default Header;