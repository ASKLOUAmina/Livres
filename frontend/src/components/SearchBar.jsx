import React from 'react';

function SearchBar({ onChange, query }) {
	return (
		<input
			onChange={(e) => onChange(e.target.value)}
			value={query}
			type='text'
			autoFocus
			placeholder='Rechercher un étudiant'
		/>
	);
}

export default SearchBar;
