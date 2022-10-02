import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [advice, setAdvice] = useState("");

  const fetchData = async () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => {
        const advice = response.data.slip;
        // console.log({ advice });
        setAdvice(advice.advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="app">
      {/* {console.log(advice)} */}
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchData}>
          <span>Give me advice</span>
        </button>
      </div>
    </div>
  );
}

export default App;
