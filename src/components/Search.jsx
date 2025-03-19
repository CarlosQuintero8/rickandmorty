import React, { useState, useRef, useEffect } from 'react';
import { useFetchApi } from '../hooks/useFetchApi';
import './Search.css';

function Search({ setLocationId }) {
	const [query, setQuery] = useState('');
	const { suggestions, searchLocations } = useFetchApi();
	const [showSuggestions, setShowSuggestions] = useState(false);
	const inputRef = useRef(null);

	useEffect(() => {
		if (showSuggestions) {
			const handleClickOutside = (event) => {
				if (inputRef.current && !inputRef.current.contains(event.target)) {
					setShowSuggestions(false);
				}
			};
			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}
	}, [showSuggestions]);

	const handleChange = (e) => {
		const value = e.target.value;
		setQuery(value);
		searchLocations(value);
		setShowSuggestions(true);
	};

	const handleSuggestionClick = (id) => {
		setLocationId(id);
		setQuery('');
		setShowSuggestions(false);
	};

	const handleKeyPress = (e) => {
		if (e.key === 'Enter') {
			if (suggestions.length > 0) {
				handleSuggestionClick(suggestions[0].id);
			}
		}
	};

	return (
		<div className="search">
			<div className="search__container">
				<input
					type="text"
					value={query}
					onChange={handleChange}
					onKeyPress={handleKeyPress}
					placeholder="Enter location name"
					className="search__input"
					ref={inputRef}
				/>
			</div>
			{showSuggestions && suggestions.length > 0 && (
				<ul className="suggestions__list">
					{suggestions.map((suggestion) => (
						<li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion.id)} className="suggestion__item">
							{suggestion.name}
						</li>
					))}
				</ul>
			)}
		</div>
	);
}

export default Search;
