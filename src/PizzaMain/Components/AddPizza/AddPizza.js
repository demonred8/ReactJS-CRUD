import { useState } from "react";
import Modal from "../../../Modal/Modal";
import cl from "./AddPizza.module.css";

function AddPizza() {
  const [modal, setModal] = useState(false);

  const addPizzaToServer = () => {

    // Do this, after successfully POST request
    setModal(false);
    let inputsToClear = document.getElementsByClassName(cl.add_pizza_input);
    for (let i = 0; i < inputsToClear.length; i++) {
      inputsToClear[i].value = "";
    }
  };

  return (
    <div
      style={{ display: "flex", justifyContent: "center", marginTop: "30px" }}
      className="AddPizza"
    >
      <button style={{ fontSize: "1.5rem" }} onClick={() => setModal(true)}>
        Add Pizza
      </button>
      <Modal title="Add Pizza" visible={modal} setVisible={setModal}>
        <div className={cl.add_pizza_window}>
          <input placeholder="Name" className={cl.add_pizza_input}></input>
          <input placeholder="Size" className={cl.add_pizza_input}></input>
          <input placeholder="Weight" className={cl.add_pizza_input}></input>
          <input placeholder="Price" className={cl.add_pizza_input}></input>
          <input
            placeholder="Ingridients"
            className={cl.add_pizza_input}
          ></input>
          <button onClick={addPizzaToServer}>Add Pizza to server</button>
        </div>
      </Modal>
    </div>
  );
}

export default AddPizza;
