import React from 'react';
import PropTypes from 'prop-types';
import DateInputField from 'components/common/dateInputField.js';
import moment from 'moment';

const DateEditColumn = ({date, onChange}) => {
	return (
		<td className="datecolumn">
			<DateInputField date={moment(date)} onChange={onChange} />
		</td>
	);
};

DateEditColumn.propTypes = {
	date: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	onChange: PropTypes.func
};

export default DateEditColumn;