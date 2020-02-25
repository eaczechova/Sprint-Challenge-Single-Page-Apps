import React from 'react';
import styled from 'styled-components';

export default function EpisodesCard(props) {
	const Ol = styled.ol`
		// list-style: none;
		padding: 0;
	`;

	const Li = styled.li`
		padding: 2px;
	`;

	return (
		<Ol>
			{props.episodes.length > 0 ? (
				props.episodes.map(item => {
					return <Li key={item.id}>{item.name}</Li>;
				})
			) : (
				<p>No episodes to display</p>
			)}
		</Ol>
	);
}
