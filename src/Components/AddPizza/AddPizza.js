import React, { useRef } from "react";
import { useState } from "react";
import cl from "./AddPizza.module.css";
import Modal from "../Modal/Modal";

function AddPizza(props) {
  const [modal, setModal] = useState(false);

  const name = useRef(null);
  const size = useRef(null);
  const weight = useRef(null);
  const price = useRef(null);
  const ingridients = useRef(null);

  const modalInputs = [name, size, weight, ingridients, price];

  const { pushPizzas } = props;

  async function addPizzaToServer() {
    const pizzaObject = {
      name: name.current.value,
      size: size.current.value,
      weight: weight.current.value,
      price: price.current.value,
      ingridients: ingridients.current.value,
    };
    pushPizzas(pizzaObject);
    setModal(false);
    modalInputs.forEach((v) => (v.current.value = ""));
  }

  return (
    <div className={cl.add_pizza_container}>
      <div className={cl.add_pizza_buttons_container}>
        <button className={cl.add_pizza_button} onClick={() => setModal(true)}>
          Add Pizza
        </button>
      </div>
      <Modal title="Add Pizza" visible={modal} setVisible={setModal}>
        <div className={cl.add_pizza_window}>
          <input
            placeholder="Name"
            className={cl.add_pizza_input}
            ref={name}
          ></input>
          <input
            placeholder="Size"
            className={cl.add_pizza_input}
            ref={size}
          ></input>
          <input
            placeholder="Weight"
            className={cl.add_pizza_input}
            ref={weight}
          ></input>
          <input
            placeholder="Price"
            className={cl.add_pizza_input}
            ref={price}
          ></input>
          <input
            placeholder="Ingridients"
            className={cl.add_pizza_input}
            ref={ingridients}
          ></input>
          <button onClick={addPizzaToServer}>Add Pizza to server</button>
        </div>
      </Modal>
    </div>
  );
}

export default AddPizza;
