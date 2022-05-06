import { useState, useEffect } from 'react'

interface Pokemon {
	name: string;
	url: string;
}
interface PokeInfo {
	name: string;
	sprites: {
		front_default: string;
	}
}

const Ajax = () => {
	// Obs! Skapa ett eget interface för att beskriva datan
	const [data, setData] = useState<null | Pokemon[]>(null)
	const [pokeInfo, setPokeInfo] = useState<null | PokeInfo>(null)
	
	// https://pokeapi.co/api/v2/pokemon?limit=10&offset=0
	// Hämta 10 Pokémons när komponenten blir mounted
	useEffect(() => {
		async function getData() {
			const response: Response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10&offset=0')
			const apiData: any = await response.json()
			// console.log('Data from API:', apiData)
			// { results: [ { name, url } ] }
			setData(apiData.results as Pokemon[])
		}
		getData()
	}, [])

	const getPokemon = async (url: string): Promise<void> => {
		const response = await fetch(url)
		const data = await response.json()
		setPokeInfo(data)
	}

	return (
		<div>
			<p> Here are some Pokémons: </p>
			<ul>
				{data ? data.map(pokemon => (
					<li key={pokemon.url}>
						{pokemon.name}
						<button onClick={() => getPokemon(pokemon.url)}> More info... </button>
					</li>
				)) : <li> No data (yet) </li>}
			</ul>
			<p>
				{pokeInfo ? (
					<> {pokeInfo.name} <img src={pokeInfo.sprites.front_default} /> </>
				) : 'No Pokémon selected.'}
			</p>
		</div>
	)
}

export default Ajax
