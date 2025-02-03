import React, { Component } from "react";

class Header extends Component {

    render() {
        return <section id="topbar" className="top-header d-none d-lg-block">
            <div className="container clearfix">
                <div className="contact-info float-left">
                    <span><i className="icofont-phone"></i> 1800 121 6833</span>
                    <span><i className="icofont-envelope"></i><img src="/Deshboard/images/contact_email1.PNG" alt="Contact Email" /></span>

                </div>
            </div>
        </section>
    }
};
export default Header;