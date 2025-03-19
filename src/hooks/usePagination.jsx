import { useEffect, useState } from 'react';

export const usePagination = (items, maxItemsVisible = 6) => {
	const [page, setPage] = useState(1);

	useEffect(() => {
		setPage(1);
	}, [items]);

	const prev = () => {
		setPage(page - 1);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const next = () => {
		setPage(page + 1);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const itemsPages = items.slice((page - 1) * maxItemsVisible, page * maxItemsVisible);
	const totalPages = Math.ceil(items.length / maxItemsVisible);

	return {
		prev,
		next,
		itemsPages,
		totalPages,
		page,
	};
};
