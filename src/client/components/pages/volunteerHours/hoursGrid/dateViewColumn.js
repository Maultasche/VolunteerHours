import React from 'react';
import PropTypes from 'prop-types';
import DateField from 'components/common/dateField.js';

const DateViewColumn = ({date}) => {
	return (
		<td className="datecolumn">
			<DateField date={date} format="l" />
		</td>
	);
};

DateViewColumn.propTypes = {
	date: PropTypes.oneOfType([
		PropTypes.string.isRequired,
		PropTypes.object.isRequired
	])
};

export default DateViewColumn;