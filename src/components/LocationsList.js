import React from 'react';
import styled from 'styled-components';

export default function LocationsList(props) {
	const Div = styled.div``;
	const Paras = styled.div``;

	console.log(props.location.url);
	return (
		<Div>
			<Paras>{props.location.name}</Paras>
		</Div>
	);
}
