import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function SearchForm(props) {
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
			<Form inline onSubmit={event => handleSubmit(event)}>
				<FormGroup>
					<Label hidden>Search by name:</Label>
					<Input
						type="text"
						name="name"
						onChange={changeHandler}
						value={inputValue}
						placeholder="Search by name"
					/>
				</FormGroup>
				<Button style={{ backgroundColor: '#9BC9E4', border: '1px solid #9BC9E4' }}>
					Submit
				</Button>
			</Form>
		</section>
	);
}
