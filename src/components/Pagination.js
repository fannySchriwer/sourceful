/** @jsx jsx */
import { jsx } from 'theme-ui';
import PrimaryButton from './PrimaryButton';

const Pagination = () => {
	
	function previusPage() {
		console.log('prev');
	}
	function paginateToNextPage() {
		console.log('next');
	}

	return(
		<div>
			<PrimaryButton propFunction={previusPage}>Previus page</PrimaryButton>
			<PrimaryButton propFunction={paginateToNextPage}>Next page</PrimaryButton>
		</div>
	)};

export default Pagination;