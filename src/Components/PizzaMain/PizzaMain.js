import { useEffect } from "react";
import AddPizza from "../AddPizza/AddPizza";
import PizzaTableBody from "../PizzaTableBody/PizzaTableBody";
import PizzaTableHead from "../PizzaTableHead/PizzaTableHead";
import cl from "./PizzaMain.module.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

const apiUrl = "http://localhost:3001";

const tHeads = ["Name", "Size", "Weight", "Price", "Ingridients", "Edit"];

function PizzaMain() {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state);

  const setPizza = (array) => {
    dispatch({ type: "UPDATE_PIZZAS", payload: array });
  };

  const getData = async () => {
    const { data } = await axios.get(apiUrl);
    return data;
  };
  useEffect(() => {
    async function fetchMyAPI() {
      const pizzas = await getData();
      setPizza(pizzas);
    }
    fetchMyAPI();
  }, []);

  const pushPizzas = async (pizza) => {
    const result = window.confirm("Are you sure you want to add Pizza?");
    if (result) {
      const res = await axios.post(apiUrl, pizza).catch(console.error);
      if (res) {
        setPizza([...pizzas, res.data]);
      }
      //    let response = await fetch(apiUrl, {
      //      method: "POST",
      //      body: JSON.stringify(pizza),
      //    }).catch((error) => {
      //      console.error("Error  dasdsad", error);
      //    });n
      //    if (response) {
      //      console.log(response);
      //      setPizza([...pizzas, pizza]);
      //    }
    }
  };

  const deletePizza = async (id) => {
    const result = window.confirm("Are you sure you want to delete?");
    if (result) {
      const response = await fetch(apiUrl + id, {
        method: "DELETE",
      }).catch((error) => console.error("Error", error));
      if (response) {
        setPizza(pizzas.filter((pizza) => pizza._id !== id));
      }
    }
  };

  const editPizza = async (newPizza) => {
    const result = window.confirm("Are you sure you want to edit?");
    const { _id: id } = newPizza;
    if (result) {
      const response = await fetch(apiUrl + id, {
        headers: { "Content-Type": "application/json; charset=utf-8" },
        method: "PUT",
        body: JSON.stringify(newPizza),
      }).catch((error) => console.error("Error", error));

      if (response) {
        setPizza(
          pizzas.map((v) => {
            if (v._id === id) {
              return newPizza;
            }
            return v;
          })
        );
      }
    }
  };

  return (
    <div className={cl.pizza_main}>
      <AddPizza pushPizzas={pushPizzas} />
      <div className={cl.table}>
        <table className={cl.table_container}>
          <PizzaTableHead inputs={tHeads} />
          <PizzaTableBody deletePizza={deletePizza} editPizza={editPizza} />
        </table>
      </div>
    </div>
  );
}

export default PizzaMain;
