import logo from './logo.svg';
import './App.css';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
	const sum = (a: number, b: number): number => {
		return a + b;
	};
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>
					Edit <code>src/App.js</code> and save to reload.{' '}
					{sum(2, 15)}
				</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}

export default App;
