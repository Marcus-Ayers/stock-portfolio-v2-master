import { hasUnreliableEmptyValue } from "@testing-library/user-event/dist/utils";
import React from "react";

const Text = ({ portfolio, onDelete, handleChange, onChange }) => {
  const portfolio_market_value = portfolio.reduce(
    (sum, stock) => stock.shares_owned * stock.market_price + sum,
    0
  );
  const portfolio_cost = portfolio.reduce(
    (sum, stock) => stock.shares_owned * stock.cost_per_share + sum,
    0
  );
  const portfolio_gain_loss = portfolio_market_value - portfolio_cost;

  // const handleChange2 = (e) => {
  //   console.log(e);
  // };
  return (
    <>
      <div className="App">
        <div className="container">
          <h1 className="text-center my-4">Stock Portfolio</h1>
          <div className="row">
            <div className="col-12">
              <table className="table table-responsive">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Shares Owned</th>
                    <th scope="col">Cost per share ($)</th>
                    <th scope="col">Market Price ($)</th>
                    <th scope="col">Market Value ($)</th>
                    <th scope="col">Unrealized Gain/Loss ($)</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  {portfolio.map((stock, index) => {
                    const { name, shares_owned, cost_per_share, market_price } =
                      stock;
                    const market_value = shares_owned * market_price;
                    const unrealized_gain_loss =
                      market_value - shares_owned * cost_per_share;

                    return (
                      <tr
                        key={stock.id}
                        //onChange={() => onChange(stock.id)}
                      >
                        <td>{name}</td>
                        <td>
                          <input
                            type="number"
                            name="shares_owned"
                            defaultValue={shares_owned}
                            onChange={(e) => onChange(e, index)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            name="cost_per_share"
                            defaultValue={cost_per_share}
                            onChange={(e) => onChange(e, index)}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            name="market_price"
                            defaultValue={market_price}
                            onChange={(e) => onChange(e, index)}
                          />
                        </td>
                        <td>{market_value}</td>
                        <td>{unrealized_gain_loss}</td>
                        <td>
                          <button
                            className="btn btn-light btn-sm"
                            onClick={() => onDelete(stock.id)}
                          >
                            remove
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-12 col-md-6">
              <h4 className="mb-3">
                Portfolio value: $ {portfolio_market_value}
              </h4>
            </div>
            <div className="col-12 col-md-6">
              <h4 className="mb-3">
                Portfolio gain/loss: $ {portfolio_gain_loss}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Text;
