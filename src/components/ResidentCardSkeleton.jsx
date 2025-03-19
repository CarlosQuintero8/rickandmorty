import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './ResidentCard.css';

function ResidentCardSkeleton() {
	return (
		<div className="resident__card skeleton-card">
			<div className="resident__header">
				<Skeleton width={300} height={400} />
			</div>
			<div className="resident__body">
				<Skeleton width={200} height={30} />
				<Skeleton width={150} height={20} />
				<Skeleton width={180} height={20} />
				<Skeleton width={120} height={20} />
			</div>
		</div>
	);
}

export default ResidentCardSkeleton;
