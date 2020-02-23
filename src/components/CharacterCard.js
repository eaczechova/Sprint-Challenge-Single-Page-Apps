import React from 'react';
import styled from 'styled-components';
import LocationsList from './LocationsList';
import { Route, Link } from 'react-router-dom';

export default function CharacterCard(props) {
	const Card = styled.div`
		display: flex;
		font-size: 14px;
    	height: 400px;
    	width: 50%
		padding: 0 20px;
		border-radius: 5px;
    	border: 1px solid lightgray;
    	box-shadow: 0 0 1em lightgray;
    	margin: 20px auto;
  `;

	const Heading2 = styled.h2`
		letter-spacing: 2px;
		font-weight: 300;
		padding: 10px;
		text-align: center;
	`;

	const Wrapper = styled.div`
		display: flex;
		flex-direction: column;
		width: 50%;
	`;

	const Image = styled.img`
		width: 150px;
		text-align: center;
		margin: 20px auto;
		border-radius: 50%;
	`;

	const Ul = styled.ul`
		list-style: none;
		padding: 0;
		text-align: center;
	`;

	const Li = styled.li`
		padding: 10px;
	`;

	const Label = styled.span`
		font-weight: 700;
	`;

	const StyledLink = styled(Link)`
		color: inherit;
		display: inline-block;
		text-decoration: none;
		border-bottom: 3px solid rgb(227, 219, 169);
		font-size: 14px;
		margin-top: 10px;
		padding: 10px;
		width: 100px;
		border-radius: 5px;
		cursor: pointer;
		transition: all 2s;

		&:hover {
			background: rgb(227, 219, 169);
		}
	`;

	const paramCharacterId = props.match.params.id;
	const character = props.characters.find(item => {
		return item.id === Number(paramCharacterId);
	});

	return (
		<Card>
			<Wrapper>
				<Heading2>{character.name}</Heading2>
				<Image src={character.image} />
			</Wrapper>
			<Wrapper>
				<Ul>
					<Li>
						<Label>Status: </Label>
						{character.status}
					</Li>
					<Li>
						<Label>Species: </Label>
						{character.species}
					</Li>
					<Li>
						<Label>Gender: </Label>
						{character.gender}
					</Li>
					<Li>
						<StyledLink to={`/list/${character.id}/location`}>
							Location Details
						</StyledLink>
					</Li>
				</Ul>

				<Route
					path="/list/:id/location"
					render={props => {
						return <LocationsList character={character} {...props} />;
					}}
				/>
			</Wrapper>
		</Card>
	);
}
