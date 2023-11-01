import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './index.css';

const PreApprovedInfoPopUp = () => {
    const [lgShow, setLgShow] = useState(true);
    const [showOptions, setShowOptions] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);

    useEffect(() => {
        // Set a timeout to close the popup after 60 seconds
        const timeout = setTimeout(() => {
            closeModal();
        }, 60000);
        setTimeoutId(timeout);
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    const closeModal = () => {
        setLgShow(false);
    };

    const openOptions = () => {
        setShowOptions(true);
    };

    const closeOptions = () => {
        setShowOptions(false);
    };

    const handleEnglishVideo = () => {
        window.location.href = 'https://youtu.be/2V1ssVuTsKM?si=2dFR6DgVL-0PFVjj'; // Replace with the English YouTube URL
    };

    const handleOdiaVideo = () => {
        window.location.href = 'https://youtu.be/kIcorQHwHQA?si=OFjrfG6kgjA9DMg8'; // Replace with the Odia YouTube URL
    };

    const handleDownloadManual = () => {
        window.location.href = '/Deshboard/images/SUJOG Pre Approved Plans User Manual.pdf';
    };

    return (
        <>
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
                    <div style={{ position: 'relative' }}>
                        <button
                            onClick={closeModal}
                            style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                backgroundColor: 'transparent',
                                border: 'none',
                                cursor: 'pointer',
                            }}
                            className="close-btn"
                        >
                            <FontAwesomeIcon icon={faTimes} className="custom-icon" />
                        </button>
                        <img
                            src="assets/img/banner_v1.jpg"
                            alt="Image"
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <div style={{ position: 'absolute', top: '45%', left: '75%', transform: 'translate(-50%, -50%)', display: 'flex', flexDirection: 'column' }}>
                            <Button variant="primary" onClick={openOptions} className="custom-button btn-clr">
                                Watch Training Video
                            </Button>
                            <Button variant="secondary" onClick={handleDownloadManual} className="custom-button btn-clr">
                                <span class="tooltiptext">Download User Manual</span>
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
            
            {/* Options Modal */}
            <Modal
                size="lg"
                show={showOptions}
                onHide={closeOptions}
                backdropClassName="custom-modal"
                centered
            >
                <Modal.Body>
                    <div>
                        <h2>Watch Pre Approved Plan Tutorial in English or Odia language.</h2>
                        <Button variant="success" onClick={handleEnglishVideo} className="custom-button btn-clr mt-3">
                            English Video
                        </Button>
                        <Button variant="success" onClick={handleOdiaVideo} className="custom-button btn-clr mt-3 ml-3">
                            Odia Video
                        </Button>
                    </div>
                </Modal.Body>
            </Modal>

        </>
    );
}

export default PreApprovedInfoPopUp;
