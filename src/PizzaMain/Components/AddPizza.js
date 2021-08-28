import { useState } from "react";
import Modal from "../../Modal/Modal";

function AddPizza() {
  const [modal, setModal] = useState(false);

  return (
    <div
      style={{ display: "flex", justifyContent: "center" }}
      className="AddPizza"
    >
      <button
        style={{ fontSize: "1.5rem", marginTop: "30px" }}
        onClick={() => setModal(true)}
      >
        Add Pizza
      </button>
      <Modal title="Add Pizza" visible={modal} setVisible={setModal}>
        <h1>Test</h1>
      </Modal>
    </div>
  );
}

export default AddPizza;
