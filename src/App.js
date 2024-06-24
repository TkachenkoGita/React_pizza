import { Route, Routes } from "react-router-dom";
import { Header, Home, Cart } from "./components/index";
import { useEffect, useState } from "react";
import axios from 'axios'


function App() {
  const[dataPizzas, setDataPizzas]=useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/db.json").then(({data}) => {
      setDataPizzas(data);
    });
  }, [])
  

  return (
    <div className="wrapper">
      <Header />

      <div className="content">
        <Routes>
          <Route exact path="/" Component={()=><Home items={dataPizzas} />} />
          <Route exact path="/cart" Component={Cart} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
