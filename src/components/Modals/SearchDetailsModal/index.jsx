import React, { memo } from "react";
import { NavigationButton } from "../../Buttons";
import { useHistory } from "react-router-dom";
import "./style.css";

import closeIcon from "../../../assets/icons/close.svg";

const SearchDetailsModal = ({ closeModal }) => {
  const navigation = useHistory();

  return (
    <div className="search-details-modal">
      <div className="modal-content">
        <img
          onClick={() => closeModal(false)}
          className="close-icon"
          src={closeIcon}
          alt="Close"
        />

        <div className="modal-header"></div>

        <div className="modal-body"></div>
      </div>
    </div>
  );
};

export default memo(SearchDetailsModal);
