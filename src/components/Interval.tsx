import { useEffect, useState } from "react";

const Interval = () => {
	const [count, setCount] = useState<number>(1);
	const [intervalId, setIntervalId] = useState<number>(0)

	const stopFunction = () => {
		// console.log('Stoppar intervallet ', intervalId)
		clearInterval(intervalId)
	}

	useEffect(() => {
		let id = setInterval(() => {
			setCount(count => count + 1)
		}, 500)
		setIntervalId(id)
		// console.log('Startar intervall... id', id)

		// State-variabeln fungerar inte pga closures
		const localStopFunction = () => {
			// console.log('Stoppar intervallet...')
			clearInterval(id)
		};
		return localStopFunction
	}, [])


  return (
    <div>
      <h3> Interval </h3>
      <p>
        <button onClick={stopFunction}> Stop </button>
      </p>
      <p> {count} </p>
    </div>
  );
};

export default Interval;
