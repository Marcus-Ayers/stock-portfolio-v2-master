import { useState } from "react";
import React from "react";

const AddStock = ({ onAdd }) => {
  const [name, setName] = useState("");
  const [shares_owned, setShares_owned] = useState("");
  const [cost_per_share, setCost_per_share] = useState("");
  const [market_price, setMarket_price] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    onAdd({ name, shares_owned, cost_per_share, market_price });

    setName("");
    setShares_owned("");
    setCost_per_share("");
    setMarket_price("");
  };

  return (
    <div className="container">
      <form className="col-12 mt-2 mb-4" onSubmit={onSubmit}>
        <input
          className="mx-2"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          className="mx-2"
          type="number"
          placeholder="Shares"
          value={shares_owned}
          onChange={(e) => setShares_owned(e.target.value)}
        />
        <input
          className="mx-2"
          type="number"
          placeholder="Cost"
          value={cost_per_share}
          onChange={(e) => setCost_per_share(e.target.value)}
        />
        <input
          className="mx-2"
          type="number"
          placeholder="Price"
          value={market_price}
          onChange={(e) => setMarket_price(e.target.value)}
        />
        <input
          className="btn btn-primary btn-sm"
          type="submit"
          placeholder="add"
        />
      </form>
    </div>
  );
};
export default AddStock;
