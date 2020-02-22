import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

export default function CharacterList() {
	const [characters, setCharacters] = useState([]);
	const [result, setResult] = useState([]);

	useEffect(() => {
		const getCharacter = () => {
			axios
				.get('https://rickandmortyapi.com/api/character/')
				.then(response => {
					setCharacters(response.data.results);
				})
				.catch(error => {
					console.error('Server Error', error);
				});
		};

		getCharacter();
	}, []);

	// useEffect(() => {
	// 	// TODO: Add API Request here - must run in `useEffect`
	// 	//  Important: verify the 2nd `useEffect` parameter: the dependancies array!
	// }, []);

	return (
		<div>
			<SearchForm
				characters={characters}
				setCharacters={setCharacters}
				result={result}
				setResult={setResult}
			/>
			<section className="character-list">
				<ul>
					{result.length > 0
						? result.map(character => {
								return <li>{character.name}</li>;
						  })
						: characters.map(character => {
								return <li>{character.name}</li>;
						  })}
				</ul>
			</section>
		</div>
	);
}
