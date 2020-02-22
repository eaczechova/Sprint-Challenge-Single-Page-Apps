import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

export default function CharacterList() {
	const Ul = styled.ul`
		list-style: none;
	`;

	const Li = styled.li`
		padding: 10px;
	`;

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
	console.log('characters', characters);
	return (
		<div>
			<SearchForm
				characters={characters}
				setCharacters={setCharacters}
				result={result}
				setResult={setResult}
			/>
			<section className="character-list">
				<Ul>
					{result.length > 0
						? result.map(character => {
								return (
									<Li>
										<CharacterCard character={character} />
									</Li>
								);
						  })
						: characters.map(character => {
								return (
									<Li>
										<CharacterCard character={character} />
									</Li>
								);
						  })}
				</Ul>
			</section>
		</div>
	);
}
