import React from 'react';
import Header from './components/Header.js';
import WelcomePage from './components/WelcomePage.js';
import CharacterList from './components/CharacterList.js';
import { Route, Link } from 'react-router-dom';
import styled from 'styled-components';

export default function App() {
	const Main = styled.main``;
	const Nav = styled.nav`
		width: 100%;
	`;
	const StyledLink = styled(Link)`
		color: inherit;
		display: inline-block;
		text-decoration: none;
		border-bottom: 3px solid rgb(155, 201, 228);
		font-size: 14px;
		margin-top: 10px;
		padding: 10px;
		width: 100px;
		border-radius: 5px;
		cursor: pointer;
		transition: all 1s;
		text-align: center;

		&:hover {
			background: rgb(155, 201, 228);
		}
	`;
	const Ul = styled.ul`
		display: flex;
		justify-content: center;
		list-style: none;
	`;

	const Li = styled.li`
		padding: 18px;
	`;

	return (
		<Main>
			<Nav>
				<Ul>
					<Li>
						<StyledLink to="/">Home</StyledLink>
					</Li>
					<Li>
						<StyledLink to="/list">Charcaters</StyledLink>
					</Li>
				</Ul>
			</Nav>
			<Header />
			<Route exact path="/" component={WelcomePage} />
			<Route path="/list" component={CharacterList} />
		</Main>
	);
}
