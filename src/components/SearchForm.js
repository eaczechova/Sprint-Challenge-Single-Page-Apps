import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export default function SearchForm(props) {
	// const Form = styled.form`
	// 	display: flex;
	// 	justify-content: space-around;
	// 	align-items: center;
	// 	height: 50px;
	// `;

	const Section = styled.section`
		display: flex;
		justify-content: space-around;
	`;

	const Button = styled.button`
		background: rgb(155, 201, 228);
		font-size: 14px;
		height: 30px;
		padding: 0 20px;
		width: 100px;
		outline: none;
		border-radius: 5px;
		border: none;
		cursor: pointer;
	`;

	// const Label = styled.label`
	// 	font-weight: 700;
	// 	padding: 0 20px;
	// `;

	// const Input = styled.input`
	// 	margin: 0 20px;
	// 	height: 20px;
	// 	border: none;
	// 	border-bottom: 2px solid lightgray;
	// 	display: inline-block;
	// `;

	const [inputValue, setInputValue] = useState('');
	const [searchValue, setSearchValue] = useState('');

	const changeHandler = event => {
		setInputValue(event.target.value);
	};

	const handleSubmit = event => {
		event.preventDefault();
		setSearchValue(inputValue);
		setInputValue('');
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
					<input
						type="text"
						name="name"
						onChange={changeHandler}
						value={inputValue}
					/>
				</label>
				<Button>Search</Button>
			</form>
		</section>
	);
}
