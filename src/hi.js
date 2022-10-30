// import { useState } from "react";

// const App = () => {
//   const [portfolio, setPortfolio] = useState([
//     {
//       name: 'Feetbook',
//       shares_owned: 20,
//       cost_per_share: 50,
//       market_price: 130
//     },{
//       name: 'Yamazon',
//       shares_owned: 5,
//       cost_per_share: 200,
//       market_price: 500
//     },{
//       name: 'Snoozechat',
//       shares_owned: 100,
//       cost_per_share: 20,
//       market_price: 3
//     }
//   ]);
  

//   const form = {
//     name: '',
//     shares_owned: 0,
//     cost_per_share: 0,
//     market_price: 0
//   }

//   return (
//     <div className="App">
//       <div className="container">
//         <h1 className="text-center my-4">Stock Portfolio</h1>
//         <div className="row">
//           <div className="col-12">
//             <table className="table table-responsive">
//               <thead>
//                 <tr>
//                   <th scope="col">Name</th>
//                   <th scope="col">Shares Owned</th>
//                   <th scope="col">Cost per share ($)</th>
//                   <th scope="col">Market Price ($)</th>
//                   <th scope="col">Market Value ($)</th>
//                   <th scope="col">Unrealized Gain/Loss ($)</th>
//                   <th scope="col"></th>
//                 </tr>
//               </thead>
//               <tbody>
//               {portfolio.map((stock, index) => {
//                 const {
//                   name,
//                   shares_owned,
//                   cost_per_share,
//                   market_price,
//                 } = stock;
//                 const market_value = shares_owned * market_price;
//                 const unrealized_gain_loss = market_value - shares_owned * cost_per_share;
//                 return (
//                   <tr key={index}>
//                     <td>{name}</td>
//                     <td><input type="number" name="shares_owned" defaultValue={shares_owned} /></td>
//                     <td><input type="number" name="cost_per_share" defaultValue={cost_per_share} /></td>
//                     <td><input type="number" name="market_price" defaultValue={market_price} /></td>
//                     <td>{market_value}</td>
//                     <td>{unrealized_gain_loss}</td>
//                     <td><button className="btn btn-light btn-sm">remove</button></td>
//                   </tr>
//                 )
//               })}
//               </tbody>
//             </table>
//           </div>
//         </div>
//       </div>    
//     </div>
//   );
// }

// export default App;
