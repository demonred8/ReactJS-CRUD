import React, { useState } from "react";
import cl from "./PizzaTableBody.module.css";
import EditPizza from "../EditPizza/EditPizza";
import { useSelector } from "react-redux";

function PizzaTableBody(props) {
  const { deletePizza, editPizza } = props;

  const pizzas = useSelector(state => state)

  return (
    <tbody>
      {pizzas.map((item) => {
        return (
          <tr key={item._id}>
            <td className={cl.cell}>
              <span>{item.name}</span>
            </td>
            <td className={cl.cell}>
              <span>{item.size}</span>
            </td>
            <td className={cl.cell}>
              <span>{item.weight}</span>
            </td>
            <td className={cl.cell}>
              <span>{item.price}</span>
            </td>
            <td className={cl.cell}>
              <span>{item.ingridients}</span>
            </td>
            <td className={cl.cell}>
              <div className={cl.main_buttons_container}>
                <EditPizza item={item} editPizza={editPizza} />
                <button
                  className={cl.button}
                  onClick={() => deletePizza(item._id)}
                >
                  Delete
                </button>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default PizzaTableBody;
