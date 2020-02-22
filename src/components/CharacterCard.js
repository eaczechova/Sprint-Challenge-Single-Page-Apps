import React from 'react';
import styled from 'styled-components';
import LocationsList from './LocationsList';

export default function CharacterCard(props) {
	console.log(props.characters);

	const Card = styled.div`
		font-size: 14px;
    height: 300px;
    width: 300px
		padding: 0 20px;
		border-radius: 5px;
    border: 1px solid gray;
    box-shadow: 0 0 1em lightgray;
    text-align: center;
    margin: 20px auto;
  `;

	const Image = styled.img`
		width: 150px;
	`;

	return (
		<div>
			{props.result.length === 0
				? props.characters.map(character => {
						return (
							<Card>
								<h2>{character.name}</h2>
								<Image src={character.image} />
								<LocationsList location={character.location} />
							</Card>
						);
				  })
				: props.result.map(character => {
						return (
							<Card>
								<h2>{character.name}</h2>
								<Image src={character.image} />
								<LocationsList location={character.location} />
							</Card>
						);
				  })}
		</div>
	);
}
