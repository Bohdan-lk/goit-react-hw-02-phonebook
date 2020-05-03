import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilterChange }) => {
	return (
		<div>
			<h3>Find your contact:</h3>
			<input type="text" onChange={handleFilterChange} />
		</div>
	);
};

export default Filter;

Filter.propTypes = {
	handleFilterChange: PropTypes.func.isRequired,
};
