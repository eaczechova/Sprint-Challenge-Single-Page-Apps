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
	const Ul = styled.ul`
		display: flex;
		justify-content: center;
		list-style: none;
	`;

	const LI = styled.li`
		padding: 18px;
	`;

	return (
		<Main>
			<Nav>
				<Ul>
					<LI>
						<Link to="/">Home</Link>
					</LI>
					<LI>
						<Link to="/list">Charcaters</Link>
					</LI>
				</Ul>
			</Nav>
			<Header />
			<Route exact path="/" component={WelcomePage} />
			<Route path="/list" component={CharacterList} />
		</Main>
	);
}
