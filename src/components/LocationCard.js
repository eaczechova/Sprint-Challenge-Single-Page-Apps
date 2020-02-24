import React from 'react';
import styled from 'styled-components';

export default function LocationCard({ name, type, dimension, residents }) {
	const Ul = styled.ul`
		list-style: none;
		padding: 0;
		text-align: center;
	`;

	const Li = styled.li`
		padding: 5px;
	`;

	const Label = styled.span`
		font-weight: 700;
	`;
	return (
		<Ul>
			<Li>
				<Label>Name: </Label>
				{name}
			</Li>
			<Li>
				<Label>Type: </Label>
				{type}
			</Li>
			<Li>
				<Label>Dimension: </Label>
				{dimension}
			</Li>
			{residents && (
				<Li>
					<Label>Number of residents: </Label>
					{residents.length}
				</Li>
			)}
		</Ul>
	);
}
