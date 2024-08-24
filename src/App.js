import React from "react";

import { Route, Routes } from "react-router-dom";
import { Header, Home, Cart } from "./components/index";

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/cart" Component={Cart} />
        </Routes>
      </div>
    </div>
  );
}
export default App;

// export default connect(
// (state) => {
//   return {
//     items: state.pizzas.items,
//     filters: state.filters,
//   };
//   },
//   (dispatch) => {
//     return {
//       setPizzas: (items) => dispatch(setPizzas(items)),
//     };
//   }
// )(App);
