import { useEffect, useState } from "react";

const AfterEvent = () => {
  const [data, setData] = useState<string>("No data");

  const getData = () => {
    setData("Loading...");

    // Simulate (slow) fetch request
    setTimeout(() => {
      setData("Data has arrived from API");
    }, 2000);
  }

  // console.log("AfterEvent rendering, data=", data);

  return (
    <div>
      <h3> useEffect, after event </h3>
			<p> <button onClick={getData}> Get data from (fake) API </button> </p>
      <p> {data} </p>
    </div>
  );
};

export default AfterEvent;
