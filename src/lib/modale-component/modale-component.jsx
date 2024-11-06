import React, { useEffect } from "react";
import "./modale-component.css";
function ModalComponent({
  icon,
  message,
  buttonText,
  onClose,
  onButtonClick,
  buttonColor,
  className,
}) {
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "Enter") {
        onButtonClick();
      }
    };
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onButtonClick, onClose]);

  return (
    <div className="modalOverlay">
      <div className={className || "modal"} tabIndex={-1}>
        <div className="modalHeader">
          <span className="closeBtn" onClick={onClose} tabIndex={0}>
            &times;
          </span>
        </div>
        <div className="modalBody">
          <span>{message}</span>
          {icon && <img src={icon} alt="Icon" className="closeIcon" />}
        </div>
        <div className="modalFooter">
          <button
            className="modalButton"
            onClick={onButtonClick}
            style={{ backgroundColor: buttonColor }}
            autoFocus
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
export default ModalComponent;