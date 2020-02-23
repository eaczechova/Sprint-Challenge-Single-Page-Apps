import React, { useState, useEffect } from 'react';
import styled, { css, keyframes } from 'styled-components';
import axios from 'axios';
import LocationCard from './LocationCard';

export default function LocationsList(props) {
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
	const [locations, setLocations] = useState([]);

	useEffect(() => {
		const getLocations = () => {
			axios
				.get(props.character.location.url)
				.then(response => {
					setLocations(response.data);
				})
				.catch(error => {
					console.error('Server Error', error);
				});
		};
		getLocations();
	}, []);

	return (
		<Div>
			<LocationCard
				name={locations.name}
				type={locations.type}
				residents={locations.residents}
				dimension={locations.dimension}
			/>
		</Div>
	);
}
