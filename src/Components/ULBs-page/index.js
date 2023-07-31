import React, { useState } from "react";
import { ULB_DISTRICT_LIST } from "../../utils/ulbDistrictList";
import { ULB_MICROSITES } from "../../utils/ulbMicrosites";
import Select from "react-select";

const districtList = ULB_DISTRICT_LIST.reduce((init, curr) => {
  if (init.includes(curr["district"])) return [...init];
  else return [...init, curr["district"]];
}, []);

const ulbDistrictMapping = ULB_DISTRICT_LIST.reduce((init, curr) => {
  const initCopy = { ...init };
  initCopy[curr["district"]] = initCopy[curr["district"]]
    ? [...initCopy[curr["district"]], curr["ulbName"]]
    : [curr["ulbName"]];
  return initCopy;
}, {});

const ulbDropdownOptions = Object.keys(ULB_MICROSITES).map((eachUlb) => ({
  value: eachUlb,
  label: eachUlb,
}));

const ULBSpage = () => {
  const [activeTab, setActiveTab] = useState({
    district: districtList[0],
    index: 0,
  });
  const [selectedUlb, setSelectedUlb] = useState("");
  const handleUlbSelct = (slctItem) => {
    const districtToShow = ULB_DISTRICT_LIST.find(
      (each) => slctItem.value === each.ulbName
    );
    const districtIndex = districtList.indexOf(districtToShow["district"]);
    setActiveTab({
      district: districtToShow["district"],
      index: districtIndex,
    });
    setSelectedUlb(slctItem);
  };
  return (
    <main id="main">
      <section class="breadcrumbs">
        <div class="container">
          <div class="d-flex justify-content-between align-items-center">
            <h2>ULBs</h2>
            <ol>
              <li>
                <a href="/home">Home</a>
              </li>
              <li>ULBs</li>
            </ol>
          </div>
        </div>
      </section>

      <section class="inner-page about ulb-screen-cntr">
        <div className="container">
          <div class="row ulb-srch-cntr">
            <Select
              className="ulb-dd"
              placeholder="Search ULB"
              value={selectedUlb}
              onChange={handleUlbSelct}
              options={ulbDropdownOptions}
            />
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-12 ulb-page">
              <div class="tabbable tabs-left">
                <ul class="nav nav-tabs ulb-nav-tab-cstm">
                  {districtList.map((each, index) => (
                    <li
                      className={activeTab["index"] === index ? "active" : ""}
                      onClick={() =>
                        setActiveTab({ index: index, district: each })
                      }
                    >
                      <a href={`#od-${each}`} data-toggle="tab">
                        {each}
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="tab-content ulb-tab-content">
                  {Object.keys(ulbDistrictMapping).map((eachKey, index) => (
                    <div
                      class={`tab-pane ${
                        activeTab["index"] === index ? "active" : ""
                      }`}
                      id={`od-${eachKey}`}
                    >
                      <div class="ulb-page-hdr">
                        <h1
                          className="tab-contentN"
                          // onClick={() =>
                          //   setActiveTab({ index: index, district: eachKey })
                          // }
                        >
                          {eachKey}
                        </h1>
                        <p
                        // className={`${
                        //   activeTab["index"] === index
                        //     ? "active"
                        //     : "ulb-display-none"
                        // }`}
                        >
                          <ul className="district-ul">
                            {ulbDistrictMapping[eachKey].map((eachUlb) => (
                              <>
                                {ULB_MICROSITES[eachUlb] ? (
                                  <li>
                                    {ULB_MICROSITES[eachUlb]["isActive"] ? (
                                      <a
                                        href={ULB_MICROSITES[eachUlb]["link"]}
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        {eachUlb}
                                      </a>
                                    ) : (
                                      eachUlb
                                    )}
                                  </li>
                                ) : null}
                              </>
                            ))}
                          </ul>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
export default ULBSpage;
