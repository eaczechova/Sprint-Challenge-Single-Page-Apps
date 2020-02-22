import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function SearchForm(props) {
	// const Form = styled.form`
	// 	display: flex;
	// 	justify-content: space-around;
	// 	align-items: center;
	// 	height: 50px;
	// `;

	const Button = styled.button`
		background: rgb(227, 219, 169);
		font-size: 14px;
		height: 30px;
		padding: 0 20px;
		width: 100px;
		outline: none;
		border-radius: 5px;
		border: none;
		cursor: pointer;
	`;

	const [inputValue, setInputValue] = useState('');
	const [searchValue, setSearchValue] = useState('');

	const changeHandler = event => {
		setInputValue(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		setSearchValue(inputValue);
	};

	const searchResult = props.characters.filter(character => {
		return character['name'].toLowerCase().includes(searchValue.toLowerCase());
	});

	useEffect(() => {
		props.setResult(searchResult);
	}, [searchValue]);

	return (
		<section className="search-form">
			<form onSubmit={event => handleSubmit(event)}>
				<label>
					Search charcter by name:
					<input type="text" onChange={changeHandler} />
				</label>
				<Button>Search</Button>
			</form>
		</section>
	);
}
