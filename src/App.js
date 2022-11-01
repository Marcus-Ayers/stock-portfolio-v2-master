import React, { useState } from "react";
import AddStock from "./components/AddStock";
import Text from "./components/text";
// import  from "react";

const App = () => {
  const [portfolio, setPortfolio] = useState([
    {
      id: 1,
      name: "Feetbook",
      shares_owned: 20,
      cost_per_share: 50,
      market_price: 130,
    },
    {
      id: 2,
      name: "Yamazon",
      shares_owned: 5,
      cost_per_share: 200,
      market_price: 500,
    },
    {
      id: 3,
      name: "Snoozechat",
      shares_owned: 100,
      cost_per_share: 20,
      market_price: 3,
    },
  ]);

  //CHANGE STOCK

  const handleChange = (e, index) => {
    //IF I USE THIS ONE IT SAYS PORTFOLIO.REDUCE ISN'T A FUNCTION

    // const target = e.target;
    // const value = target.type;
    // const name = target.name;
    // setPortfolio({ [name]: value });

    //IF I USE THIS IT SAYS I CANNOT ACCESS PORTFOLIO BEFORE INITIALIZATION
    // const portfolio = portfolio.slice(); // shallow copy
    const { name, value } = e.target;
    portfolio[index][name] = Number(value);
    setPortfolio([...portfolio]);
  };

  //ADD STOCK
  const addStock = (stock) => {
    const id = Math.floor(Math.random() * 10000) + 1;

    const newStock = { id, ...stock };
    setPortfolio([...portfolio, newStock]);
    //console.log(newStock);
  };

  //DELETE STOCK
  const deleteTask = (id) => {
    setPortfolio(portfolio.filter((portfolio) => portfolio.id !== id));
  };

  return (
    <div>
      <Text
        portfolio={portfolio}
        onDelete={deleteTask}
        onChange={handleChange}
      />
      <AddStock onAdd={addStock} />
    </div>
  );
};
export default App;
