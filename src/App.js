import { Route, Routes } from "react-router-dom";
import { Header, Home, Cart } from "./components/index";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import {connect} from 'react-redux'
import { setPizzas  } from "./redux/actions/pizzas";



// function App() {
//   const[dataPizzas, setDataPizzas]=useState([])

//   useEffect(() => {
//     axios.get("http://localhost:3000/db.json").then(({data}) => {
//       setDataPizzas(data);
//     });
//   }, [])
  

//   // return (
//   //   <div className="wrapper">
//   //     <Header />

//   //     <div className="content">
//   //       <Routes>
//   //         <Route exact path="/" Component={()=><Home items={dataPizzas} />} />
//   //         <Route exact path="/cart" Component={Cart} />
//   //       </Routes>
        
//   //     </div>
//   //   </div>
//   // );
// }

class App extends React.Component {

  
  componentDidMount() {
    axios.get("http://localhost:3000/db.json").then(({ data }) => {
      this.props.setPizzas(data);
    });
  }

  render() {
    return (
      <div className="wrapper">
        <Header />

        <div className="content">
          <Routes>
            <Route exact path="/" Component={() => <Home items={this.props.items} />} />
            <Route exact path="/cart" Component={Cart} />
          </Routes>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    items: state.pizzas.items
  }
}
const mapDispatchToProps = dispatch => {
  return {
    setPizzas: (items) => dispatch(setPizzas(items)),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
