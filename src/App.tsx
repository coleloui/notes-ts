// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
type FormElement = React.FormEvent<HTMLFormElement>;
interface ITodo {
	text: string;
	complete: boolean;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function App() {
	const [value, setValue] = useState<string>('');
	const [todos, setTodos] = useState<ITodo[]>([]);

	const handeSubmit = (e: FormElement): void => {
		e.preventDefault();
		addTodo(value);
		setValue('');
	};

	const addTodo = (text: string) => {
		const newTodo: ITodo[] = [...todos, { text, complete: false }];
		console.log(newTodo);
		setTodos(newTodo);
		// localStorage.setItem('todo', JSON.stringify(newTodo));
	};
	// let test: ITodo[] = [...storage];
	// if (storage) {
	// 	test = [...storage];
	// 	setTodos(test);
	// }

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
			<div>
				{todos.map((todo: ITodo, index: number) =>
					todo.complete ? (
						''
					) : (
						<div key={index}>
							{todo.text}
							{todo.complete}
						</div>
					)
				)}
			</div>
		</>
	);
}
