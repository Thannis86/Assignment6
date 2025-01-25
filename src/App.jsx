import React, { useState, useEffect } from "react";
import "./App.css";
import Shop1 from "./Shops/Shop1";
import Shop2 from "./Shops/Shop2";
import Cookie from "./Cookie/Cookie";
import Counter from "./Counter/Counter";
import AutoClicker from "./Counter/AutoClicker";

export default function App() {
  // Consts
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(0);
  const [shop1, setShop1] = useState(0);
  const [shop2, setShop2] = useState(0);
  const [shop1Count, setShop1Count] = useState(0);
  const [shop2Count, setShop2Count] = useState(0);
  const [cookieData, setCookieData] = useState(0);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://cookie-upgrade-api.vercel.app/api/upgrades"
        );
        const data = await response.json();
        console.log(`Data Received`);
        setItems(data);
        setShop1Count(data[0].increase);
        setShop2Count(data[1].increase);
        setCookieData(data);
      } catch (error) {
        console.error("Data failed");
      }
    }
    fetchData();
  }, []);
  console.log(cookieData);

  // AutoClicker

  useEffect(() => {
    const myInterval = setInterval(() => {
      console.log("Woooo! Timers yo!");
      setCount((currentCount) => {
        return currentCount + 1;
      });
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  //

  return (
    <div id="MainDiv">
      <div id="CounterDiv">
        <Counter counterValue={count} />
      </div>
      <div id="Shops">
        {items.map((item) => {
          return (
            <Shop1
              key={item.id}
              heading={item.name}
              shopValue={shop1}
              shopID={item.id}
              count={count}
              upgradeCost={item.cost}
            />
          );
        })}
        {items.map((item) => {
          return (
            <Shop2
              key={item.id}
              heading={item.name}
              shopValue={shop2}
              shopID={item.id}
              count={count}
              upgradeCost={item.cost}
            />
          );
        })}
      </div>
      <div id="AutoClicker">
        <AutoClicker />
      </div>
      <div id="MainCookie">
        <Cookie clicks={() => setCount(count + shop1Count)} count={count} />
      </div>
    </div>
  );
}
