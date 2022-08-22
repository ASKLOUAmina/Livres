import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Students from './components/Students.jsx';
import './App.css';

function App() {
	const [query, setQuery] = useState('');

	function handleChange(value) {
		setQuery(value);
	}
	return (
		<>
			<SearchBar onChange={handleChange} query={query} />
			<Students query={query} />
		</>
	);
}

export default App;
