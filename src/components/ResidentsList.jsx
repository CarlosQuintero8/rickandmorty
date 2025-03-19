import { usePagination } from '../hooks/usePagination';
import Pagination from './Pagination';
import ResidentCard from './ResidentCard';
import './ResidentsList.css';

function ResidentsList({ residents }) {
	const { page, prev, next, itemsPages, totalPages } = usePagination(residents, 6);
	return (
		<>
			{residents.length === 0 && (
				<h2 style={{ textAlign: 'center' }}>(There are no residents to show in this episode.).</h2>
			)}

			<div className="residents">
				{itemsPages.map((resident) => (
					<ResidentCard key={resident} url={resident} />
				))}
			</div>

			{residents.length > 5 && <Pagination page={page} prev={prev} next={next} totalPages={totalPages} />}
		</>
	);
}

export default ResidentsList;
