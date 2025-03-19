// App.jsx
import { useEffect, useState } from 'react';
import { useFetchApi } from './hooks/useFetchApi';
import Hero from './components/Hero';
import Search from './components/Search';
import LocationInfo from './components/LocationInfo';
import ResidentsList from './components/ResidentsList';
import './App.css';

const baseURL = 'https://rickandmortyapi.com/api/location';

function App() {
	const { data: location, request, loading } = useFetchApi();
	const [locationId, setLocationId] = useState(Math.floor(Math.random() * 126) + 1);

	useEffect(() => {
		request(`${baseURL}/${locationId}`);
	}, [locationId]);

	return (
		<div>
			<Hero />
			<h1 className="app-title">Rick and Morty</h1>
			<Search setLocationId={setLocationId} />
			{loading ? <p style={{ textAlign: 'center' }}>Cargando...</p> : location && <LocationInfo location={location} />}
			{location && <ResidentsList residents={location.residents} />}
		</div>
	);
}

export default App;
