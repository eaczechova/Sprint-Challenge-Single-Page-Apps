import React, { useEffect, useState } from 'react';

export default function LocationsList(props) {
	console.log('LocationsList', props.location);

	return <p>{props.location.name}</p>;
}
