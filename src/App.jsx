import { useState } from "react";
import Modal from "./components/Modal";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const handleCloseClick = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <div className={`modal ${isModalOpen ? "" : "fade-out"}`}>
        <Modal handleCloseClick={handleCloseClick} />
      </div>
      <button
        className="modal-btn"
        type="button"
        onClick={() => setIsModalOpen(true)}
      >
        Open Modal
      </button>
    </div>
  );
};

export default App;
