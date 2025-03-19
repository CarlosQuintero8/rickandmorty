import { useState, useEffect } from 'react';

export const useFetchApi = () => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);
	const [suggestions, setSuggestions] = useState([]);

	const request = async (url) => {
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(url);
			if (!response.ok) {
				throw new Error(`HTTP error! status: ${response.status}`);
			}
			const result = await response.json();
			setData(result);
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	const searchLocations = async (query) => {
		if (!query) {
			setSuggestions([]);
			return;
		}
		setLoading(true);
		setError(null);
		try {
			const response = await fetch(`https://rickandmortyapi.com/api/location/?name=${query}`);
			if (!response.ok) {
				if (response.status === 404) {
					setSuggestions([]);
					setError('No se encontraron ubicaciones con ese nombre.');
				} else {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
			} else {
				const result = await response.json();
				if (result.results && result.results.length > 0) {
					setSuggestions(result.results);
				} else {
					setSuggestions([]);
					setError('No se encontraron ubicaciones con ese nombre.');
				}
			}
		} catch (err) {
			setError(err);
		} finally {
			setLoading(false);
		}
	};

	return { data, loading, error, request, suggestions, searchLocations };
};
