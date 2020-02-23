import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

export default function CharacterList() {
	const Ul = styled.ul`
		list-style: none;
	`;

	const Li = styled.li`
		padding: 10px;
	`;

	const Section = styled.section`
		display: flex;
	`;

	const StyledLink = styled(Link)`
		color: inherit;
		display: inline-block;
		text-decoration: none;
		border: 2px solid rgb(227, 219, 169);
		font-size: 14px;
		margin-top: 10px;
		padding: 10px;
		width: 100px;
		border-radius: 5px;
		cursor: pointer;
		transition: all 1s;
		text-align: center;

		&:hover {
			background: rgb(227, 219, 169);
		}
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
	console.log(characters);
	return (
		<div>
			<SearchForm
				characters={characters}
				setCharacters={setCharacters}
				result={result}
				setResult={setResult}
			/>
			<Section className="character-list">
				{result.length > 0 ? (
					<Ul>
						{result.map(character => {
							return (
								<Li>
									<StyledLink to={`/list/${character.id}`}>{character.name}</StyledLink>
								</Li>
							);
						})}
					</Ul>
				) : (
					<Ul>
						{characters.map(character => {
							return (
								<Li>
									<StyledLink to={`/list/${character.id}`}>{character.name}</StyledLink>
								</Li>
							);
						})}
					</Ul>
				)}
				<Route
					path="/list/:id"
					render={props => {
						return <CharacterCard characters={characters} {...props} />;
					}}
				/>
			</Section>
		</div>
	);
}
