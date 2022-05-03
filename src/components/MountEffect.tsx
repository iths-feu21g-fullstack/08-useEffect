import { useEffect, useState } from 'react'

const MountEffect = () => {
	const [data, setData] = useState<string>('No data')

	// [] för att bara köras 1 gång
	useEffect(() => {
		setData('Loading...')
		console.log(1)

		// Simulate (slow) fetch request
		setTimeout(() => {
			setData('Data has arrived from API')
			console.log(2)
		}, 1000)
	}, [])

	// console.log('MountEffect rendering, data=', data)

	return (
		<div>
			<h3> useEffect, mounting </h3>
			<p> {data} </p>
		</div>
	)
}

export default MountEffect
