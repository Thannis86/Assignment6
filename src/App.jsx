// import React, { useState, useEffect } from "react";
import "./App.css";
import Shop1 from "./Shops/Shop1";
import Shop2 from "./Shops/Shop2";
import Cookie from "./Cookie/Cookie";
import Counter from "./Counter/Counter";

export default function App() {
  // Consts
  // const [items, setItems] = useState([]);
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await fetch(
  //         "https://cookie-upgrade-api.vercel.app/api/upgrades"
  //       );
  //       const data = await response.json();
  //       console.log("Data Received");
  //       setItems(data);
  //     } catch (error) {
  //       console.error("Data failed");
  //     }
  //   }
  //   fetchData();
  // }, []);

  //   useEffect(()=>{
  // {async function fetchData(){

  //         const response = await fetch("https://cookie-upgrade-api.vercel.app/api/upgrades/");
  //         const data = await response.json();
  //         console.log("Data received");
  //         setItems(data);
  //       }
  //     }fetchData()
  //   },[refreshCount]);
  return (
    <div id="MainDiv">
      <div id="CounterDiv">
        <Counter />
      </div>
      <div id="Shops">
        <Shop1 />
        <Shop2 />
      </div>
      <div id="MainCookie">
        <Cookie />
      </div>
    </div>
  );
}
