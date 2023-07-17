import React, { useState } from "react";
import infoBtn from "../../assets/icons/info.svg"

type InfoPagesProps = {
    pages: number;
};

export const InfoPagesBtn: React.FC<InfoPagesProps> = ({ pages }) => {
    const [showPageModal, setShowPageModal] = useState(false);

    const handleModalOpen = (e: React.MouseEvent<HTMLImageElement>) => {
        e.stopPropagation()
        setShowPageModal(true);
    };

    const handleModalClose = () => {
        setShowPageModal(false);

    };

    return (
        <>
            <img
                src={infoBtn}
                alt=""
                onClick={(e) => handleModalOpen(e)}
                style={{ cursor: "pointer" }}
            />
            {showPageModal && (
                <div className="modal d-flex justify-content-center align-items-center" style={{ display: "block" }}>
                    <div className="modal-dialog row">
                        <div className="modal-content">
                            <div className="modal-body text-bg-light">
                                build a website with {pages} page(s)
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleModalClose}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

type InfoLanguagesProps = {
    languages: number;

};
export const InfoLanguagesBtn: React.FC<InfoLanguagesProps> = ({ languages }) => {
    const [showLanguageModal, setShowLanguageModal] = useState(false);

    const handleLanguageModalOpen = () => {
        setShowLanguageModal(true);
    };

    const handleLanguageModalClose = () => {
        setShowLanguageModal(false);
    };

    return (
        <>
            <img
                src={infoBtn}
                alt=""
                onClick={handleLanguageModalOpen}
                style={{ cursor: "pointer" }}
            />
            {showLanguageModal && (
                <div className="modal" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body text-bg-light">
                                build a website with {languages} pages
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-secondary"
                                    onClick={handleLanguageModalClose}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};