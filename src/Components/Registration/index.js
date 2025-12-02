import React, {  useState } from "react";
import {  useSelector } from "react-redux";
import usePageLocalization from "../../utils/usePageLocalization";
import {  Modal } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//function Registration() {
const Registration = () => {
  const language = useSelector((state) => state.localization.language);
  const t = usePageLocalization(language, "registaer");
  const [lgShow, setLgShow] = useState(true);

  const closeModal = () => {
    setLgShow(false);
  };

  return (
    <div className="container">
      <Modal
        size="lg"
        show={lgShow}
        onHide={closeModal}
        backdropClassName="custom-modal"
        aria-labelledby="example-modal-sizes-title-sm"
        className="custom-modal-size"
        centered
      >
        <Modal.Body>
          <div>
            <div style={{ position: "relative", textAlign: "center" }}>
              <button
                onClick={closeModal}
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  backgroundColor: "transparent",
                  border: "none",
                  cursor: "pointer",
                }}
                className="close-btn"
              >
                <FontAwesomeIcon icon={faTimes} className="custom-icon" />
              </button>
              <img
                src="assets/img/Conclave_pop.png"
                alt="Image"
                style={{ width: "60%", height: "auto", alignContent: "center" }}
              />
              {/* <div style={{ position: 'absolute', top: '45%', left: '75%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column' }}>
                                                {
                                                  t.Success
                                                }
                                            </div> */}
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Registration;
