import React from 'react';
import styled from 'styled-components';

export default function WelcomePage() {
	const Header = styled.header`
		text-align: center;
	`;

	const Image = styled.img`
		width: 250px;
		text-align: center;
		margin: 20px auto;
		border-radius: 50%;
	`;
	return (
		<section className="welcome-page">
			<Header>
				<h1>Welcome to the ultimate fan site!</h1>
				<Image
					className="main-img"
					src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
					alt="rick"
				/>
			</Header>
		</section>
	);
}
