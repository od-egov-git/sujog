import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./index.css"

const ServiceTab = ({ label, active, onClick }) => {
    return (
        <div
            className={`service-tab ${active ? "active" : ""}`}
            onClick={onClick}
        >
            {label}
        </div>
    );
};

class ServicesCarousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: 0,
            tabIndex: 0,
            itemsPerView: this.getItemsPerView(),
            pillsPerView: 4
        };
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateItemsPerView);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateItemsPerView);
    }

    handleTabClick = (i) => {
        this.setState({ index: i });
    };

    nextSlideTab = () => {
        const { tabIndex, pillsPerView } = this.state;
        const maxIndex = 8 - pillsPerView;
        if (tabIndex < maxIndex) {
            this.setState({ tabIndex: tabIndex + 1 });
        }
    };
    
    prevSlideTab = () => {
        const { tabIndex } = this.state;
        if (tabIndex > 0) {
            this.setState({ tabIndex: tabIndex - 1 });
        }
    };

    getItemsPerView = () => {
        if (window.innerWidth < 600) return 1; 
        if (window.innerWidth < 992) return 1; 
        return 1; 
    };

    updateItemsPerView = () => {
        this.setState({
            itemsPerView: this.getItemsPerView(),
            index: 0,
        });
    };

    nextSlide = () => {
        const { index, itemsPerView } = this.state;

        const maxIndex = 8 - itemsPerView;   
        if (index < maxIndex) {
            this.setState({ index: index + 1 });
        }
    };

    prevSlide = () => {
        const { index } = this.state;
        if (index > 0) {
            this.setState({ index: index - 1 });
        }
    };

    render() {
        const { translations } = this.props;
        const { index, itemsPerView } = this.state;
        const translateX = (index * (100 / itemsPerView));
        const items = [
            {
                img: "assets/img/slide/features-illustration-1.webp",
                width: "13%",
                title: translations.buildingPermissionTitle,
                desc: translations.buildingPermissionDescription,
                link: "/obpas-dashboard",
                label: "OBPAS",
            },
            {
                img: "assets/img/slide/features-illustration-2.webp",
                width: "15%",
                title: translations.pgrTitle,
                desc: translations.pgrDescription,
                link: "pgr",
                label: "Grievance Redressal"
            },
            {
                img: "assets/img/slide/features-illustration-3.webp",
                width: "13%",
                title: translations.tradeLicenseTitle,
                desc: translations.tradeLicenseDescription,
                link: "tl",
                label: "Trade License"
            },
            {
                img: "assets/img/slide/features-illustration-1.webp",
                width: "15%",
                title: translations.propertyTaxTitle,
                desc: (
                    <>
                        {translations.propertyTaxDescription1}
                        <br />
                        {translations.propertyTaxDescription2}
                    </>
                ),
                link: "pt",
                label: "Property Tax"
            },
            {
                img: "assets/img/slide/features-illustration-2.webp",
                width: "17%",
                title: translations.waterSewerageTitle,
                desc: translations.waterSewerageDescription,
                link: "wns",
                label: "Water & Sewerage"
            },
            {
                img: "assets/img/slide/features-illustration-3.webp",
                width: "15%",
                title: translations.marriageRegistrationTitle,
                desc: translations.marriageRegistrationDescription,
                link: "mr",
                label: "Marriage Registration"
            },
            {
                img: "assets/img/slide/features-illustration-1.webp",
                width: "15%",
                title: translations.layoutApprovalTitle,
                desc: translations.layoutApprovalDescription,
                link: "home",
                label: "Layout Approval"
            },
            {
                img: "assets/img/slide/features-illustration-2.webp",
                width: "15%",
                title: translations.fssmTitle,
                desc: translations.fssmDescription,
                link: "home",
                label: "FSSM"
            },
        ];
        const activeItem = items[index];
        return (
            <div className="service-section">
                {/* Tabs */}
                <div className="service-tabs-wrapper">
                    <button className="tab-arrow" onClick={this.prevSlideTab}>
                        ‹
                    </button>
                    <div className="service-tabs-viewport">
                        <div
                            className="service-tabs"
                            style={{
                                transform: `translateX(-${this.state.tabIndex * (100 / 3)}%)`,
                            }}
                        >
                            {items.map((item, i) => (
                                <div
                                    key={i}
                                    className={`service-tab-pill ${this.state.index === i ? "active" : ""}`}
                                    onClick={() => this.handleTabClick(i)}
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    </div>
                    <button className="tab-arrow" onClick={this.nextSlideTab}>
                        ›
                    </button>
                </div>

                {/* Content Section */}
                <div className="service-content">
                    <div className="service-left">
                        <h1 className="service-title">{activeItem.title}</h1>
                        <div className="service-title-underline"></div>
                        <p className="service-desc">{activeItem.desc}</p>
                    </div>
                    <div className="service-right">
                        <img src={activeItem.img} alt="" />
                    </div>
                </div>
            </div>

        );
    }
}

export default ServicesCarousel;
