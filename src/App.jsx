import React, { useState, useEffect } from "react";
import "./App.css";
import Shop1 from "./Shops/Shop1";
import Shop2 from "./Shops/Shop2";
import Cookie from "./Cookie/Cookie";
import Counter from "./Counter/Counter";
import Save from "./Save/Save";
import Load from "./Save/Load";

export default function App() {
  // Consts
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [shop1, setShop1] = useState(0);
  const [shop2, setShop2] = useState(0);
  const [shop1Count, setShop1Count] = useState(0);
  const [shop2Count, setShop2Count] = useState(0);
  const [cookieData, setCookieData] = useState(0);
  console.log(shop1);
  console.log(shop2);
  console.log(shop1Count);
  console.log(shop2Count);

  //

  //

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://cookie-upgrade-api.vercel.app/api/upgrades"
        );
        const data = await response.json();
        console.log(`Data Received`);
        setItems(data);
        setShop1Count(data[shop1].increase);
        setShop2Count(data[shop2 - 1].increase);
        setCookieData(data);
      } catch (error) {
        console.error("Data failed");
      }
    }
    fetchData();
  }, [shop1, shop2]);
  console.log(cookieData);

  //

  // AutoClicker

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount((prevCount) => prevCount + shop2Count);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [shop2Count]);

  //

  return (
    <div id="MainDiv">
      <div id="CounterDiv">
        <Counter counterValue={count} />
      </div>
      <div id="Shops">
        {items.map((item) => {
          return (
            item.id == shop1 + 1 && (
              <Shop1
                key={item.id}
                heading={item.name}
                shopValue={shop1}
                setShop={setShop1}
                setCount={setCount}
                shopID={item.id}
                count={count}
                upgradeCost={item.cost}
                clicks={() => setShop1(item.id)}
              />
            )
          );
        })}
        {items.map((item) => {
          return (
            item.id == shop2 + 1 && (
              <Shop2
                key={item.id}
                heading={item.name}
                shopValue={shop2}
                setCount={setCount}
                shopID={item.id}
                count={count}
                upgradeCost={item.cost}
                clicks={() => setShop2(item.id)}
              />
            )
          );
        })}
      </div>
      <div id="MainCookie">
        <Cookie clicks={() => setCount(count + shop1Count)} count={count} />
      </div>
      <div id="saveSection">
        <Save count={count} shop1={shop1} shop2={shop2} />
        <Load count={setCount} shop1={setShop1} shop2={setShop2} />
      </div>
    </div>
  );
}
