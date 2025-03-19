import React from 'react';
import './Pagination.css';

export default function Pagination({ page, prev, next, totalPages }) {
	return (
		<div className="pagination-container">
			<button onClick={prev} disabled={page === 1} className="pagination-button">
				Prev
			</button>
			<span className="pagination-info">
				{page} of {totalPages}
			</span>
			<button onClick={next} disabled={page === totalPages} className="pagination-button">
				Next
			</button>
		</div>
	);
}
