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

	const Li = styled.li`
		padding: 18px;
	`;

	return (
		<Main>
			<Nav>
				<Ul>
					<Li>
						<Link to="/">Home</Link>
					</Li>
					<Li>
						<Link to="/list">Charcaters</Link>
					</Li>
				</Ul>
			</Nav>
			<Header />
			<Route exact path="/" component={WelcomePage} />
			<Route exact path="/list" component={CharacterList} />
		</Main>
	);
}
