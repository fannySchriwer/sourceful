/** @jsx jsx */
import { jsx } from 'theme-ui';

const Pagination = ({ factoriesPerPage, totalFactories, paginate }) => {
	const pageNumbers = [];

	for(let i = 1; i <= Math.ceil(totalFactories / factoriesPerPage); i++ ) {
		pageNumbers.push(i);
	}

	return(
		<div>
			<nav id="pagination">
				<ul sx={{
					display: 'flex',
					justifyContent: 'center'
				}}>
					{pageNumbers.map(number => (
						<li key={number} sx={{
							paddingY: 2,
							paddingX: 3,
							margin: 2,
							listStyle: 'none',
							backgroundColor: 'secondary'
						}}>
							<a onClick={() => paginate(number)} href="#pagination" sx={{
								textDecoration: 'none',
								color: 'black',
								':hover': {
									color: 'green'
								}
							}}>{number}</a>
						</li>
					))}
				</ul>
			</nav>
		</div>
	)};

export default Pagination;