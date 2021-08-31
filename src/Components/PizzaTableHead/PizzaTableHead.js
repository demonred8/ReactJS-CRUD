import React from "react";
import cl from './PizzaTableHead.module.css'

function PizzaTableHead({ ...headers }) {
  let inputs = headers.inputs.map((item, index) => {
    return <td key={index} className={cl.cell}>{item}</td>;
  })

  return (
      <thead>
        <tr>
          {inputs}
        </tr>
      </thead>
  );
}

export default PizzaTableHead;
