import React, { useEffect } from 'react';
import { useFetchApi } from '../hooks/useFetchApi';
import ResidentCardSkeleton from './ResidentCardSkeleton.jsx';
import './ResidentCard.css';

function ResidentCard({ url }) {
	const { data: resident, request, loading } = useFetchApi();

	useEffect(() => {
		request(url);
	}, [url]);

	if (loading) {
		return <ResidentCardSkeleton />;
	}

	const episodes = resident?.episode?.length || 1;

	return (
		<>
			{resident && (
				<div className="resident__card">
					<div className="resident__header">
						<img className="resident__img" src={resident.image} alt={resident.name} />
						<span className="resident__status">{resident.status}</span>
					</div>
					<div className="resident__body">
						<h2 className="resident__name">{resident.name}</h2>
						<ul className="resident__info">
							<li className="resident__item">
								<span className="resident__span">Specie:</span> {resident.species}
							</li>
							<li className="resident__item">
								<span className="resident__span">Origin:</span> {resident.origin.name}
							</li>
							<li className="resident__item">
								<span className="resident__span">Episodes where appear:</span> {episodes}
								{episodes === 1 ? ' episode' : ' episodes'}
							</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
}

export default ResidentCard;
