import React from 'react';
import PropTypes from 'prop-types';

/*
The grid footer.
Parameters:
	* numOfColumns - the number of columns in the grid 
*/
const GridFooter = ({numOfColumns, children}) => {
	return (
		<tfoot>
			<tr>
				<td colSpan={numOfColumns}>
					{children}
				</td>
			</tr>
		</tfoot>
	);
};

GridFooter.propTypes = {
	numOfColumns: PropTypes.number
};

export default GridFooter;