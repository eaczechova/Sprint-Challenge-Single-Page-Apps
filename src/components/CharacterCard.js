import React from 'react';
import styled from 'styled-components';
import LocationsList from './LocationsList';

export default function CharacterCard(props) {
	const Card = styled.div`
		font-size: 14px;
    height: 300px;
    width: 90%
		padding: 0 20px;
		border-radius: 5px;
    border: 1px solid gray;
    box-shadow: 0 0 1em lightgray;
    margin: 20px auto;
  `;

	const Heading2 = styled.h2`
		letter-spacing: 2px;
		font-weight: 300;
	`;
	const Image = styled.img`
		width: 20%;
	`;

	return (
		<Card>
			<Heading2>{props.character.name}</Heading2>
			<Image src={props.character.image} />
			<LocationsList location={props.character.location} />
		</Card>
	);
}
