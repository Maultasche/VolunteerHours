import React from 'react';
import PropTypes from 'prop-types';

const ColumnHeaders = ({headers}) => {
	return (
		<thead>
			<tr>
				{headers.map((headerText, index) => 
					<th key={index}>{headerText}</th>)}
			</tr>
		</thead>
	);
};

ColumnHeaders.propTypes = {
	headers: PropTypes.array.isRequired
};

export default ColumnHeaders;