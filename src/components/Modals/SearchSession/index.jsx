import React, { memo } from "react";

import "./style.css";

import closeIcon from "../../../assets/icons/close.svg";

const SearchSession = ({ closeModal }) => {
  return (
    <div className="search-details-modal">
      <div className="modal-content">
        <img
          onClick={() => closeModal(false)}
          className="close-icon"
          src={closeIcon}
          alt="Close"
        />
      </div>
    </div>
  );
};

export default memo(SearchSession);
