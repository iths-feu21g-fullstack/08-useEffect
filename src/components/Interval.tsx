import { useEffect, useState } from "react";

const Interval = () => {
  const [count, setCount] = useState<number>(1);

	useEffect(() => {
		let intervalId = setInterval(() => {
			setCount(count => count + 1)
		}, 500)
		const stopFunction = () => clearInterval(intervalId);
		return stopFunction
	}, [])


  return (
    <div>
      <h3> Interval </h3>
      <p>
        <button> Stop </button>
      </p>
      <p> {count} </p>
    </div>
  );
};

export default Interval;
