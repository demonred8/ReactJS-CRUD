import React, { useRef } from "react";
import { useState } from "react";
import cl from "./EditPizza.module.css";
import Modal from "../Modal/Modal";

function EditPizza(props) {
  const [modal, setModal] = useState(false);

  const name = useRef(null);
  const size = useRef(null);
  const weight = useRef(null);
  const price = useRef(null);
  const ingridients = useRef(null);

  const modalInputs = [name, size, weight, ingridients, price];

  const { item, editPizza } = props;

  const updatePizza = () => {
    console.log(item);
    const pizzaObject = {
      _id: item._id,
      name: name.current.value,
      size: size.current.value,
      weight: weight.current.value,
      price: price.current.value,
      ingridients: ingridients.current.value,
    };
    editPizza(pizzaObject);
    setModal(false);
    modalInputs.forEach((v) => (v.current.defaultValue = ""));
  };

  return (
    <div className={cl.edit_pizza_container}>
        <button className={cl.edit_pizza_button} onClick={() => setModal(true)}>
          Edit Pizza
        </button>
      <Modal title="Edit Pizza" visible={modal} setVisible={setModal}>
        <div className={cl.add_pizza_window}>
          <input
            defaultValue={item.name}
            className={cl.add_pizza_input}
            ref={name}
          ></input>
          <input
            defaultValue={item.size}
            className={cl.add_pizza_input}
            ref={size}
          ></input>
          <input
            defaultValue={item.weight}
            className={cl.add_pizza_input}
            ref={weight}
          ></input>
          <input
            defaultValue={item.price}
            className={cl.add_pizza_input}
            ref={price}
          ></input>
          <input
            defaultValue={item.ingridients}
            className={cl.add_pizza_input}
            ref={ingridients}
          ></input>
          <button onClick={updatePizza}>Edit pizza</button>
        </div>
      </Modal>
    </div>
  );
}

export default EditPizza;
