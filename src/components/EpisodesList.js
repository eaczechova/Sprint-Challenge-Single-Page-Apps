import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import axios from 'axios';
import EpisodesCard from './EpisodesCard';

export default function EpisodesList(props) {
	const animation = keyframes`
		0% {
		 	opacity: 0;
		}

		100 {
			opacity: 1;
		}
	`;

	const animationRule = css`
		${animation} 1s 1;
	`;

	const Div = styled.div`
		animation: ${animationRule};
	`;
	const [episodes, setEpisodes] = useState([]);
	const episodesList = props.episode.map(item => {
		return item
			.slice(item.length - 2)
			.split('/')
			.join('');
	});

	useEffect(() => {
		const getEpisodes = () => {
			axios
				.get(`https://rickandmortyapi.com/api/episode/${episodesList}`)
				.then(response => {
					setEpisodes(response.data);
				})
				.catch(error => {
					console.error('Server Error', error);
				});
		};
		getEpisodes();
	}, []);

	return (
		<Div>
			<EpisodesCard episodes={episodes} />
		</Div>
	);
}
