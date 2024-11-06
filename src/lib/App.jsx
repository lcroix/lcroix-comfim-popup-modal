import React, { useState } from "react";
import ModalComponent from "./modale-component/modale-component";
import { useNavigate } from "react-router-dom";

function App({ message, navigatePage }) {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleButtonClick = () => {
    setTimeout(() => {
      setIsModalOpen(false);
      navigate(navigatePage);
    }, 500);
  };

  return (
    <div>
      {isModalOpen && (
        <ModalComponent
          message={message}
          buttonText="OK"
          onClose={handleClose}
          onButtonClick={handleButtonClick}
        />
      )}
    </div>
  );
}

export default App;
