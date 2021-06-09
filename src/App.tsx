// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
type FormElement = React.FormEvent<HTMLFormElement>;

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App() {
	const [value, setValue] = useState<string>('');

	const handeSubmit = (e: FormElement): void => {
		e.preventDefault();
		setValue('');
	};
	return (
		<>
			<h1>Todo List</h1>
			<form onSubmit={handeSubmit}>
				<input
					type="text"
					required
					value={value}
					onChange={e => setValue(e.target.value)}
				/>
				<button type="submit">Add Todo</button>
			</form>
		</>
	);
}
