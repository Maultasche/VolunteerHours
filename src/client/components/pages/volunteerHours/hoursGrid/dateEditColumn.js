import React from 'react';
import PropTypes from 'prop-types';
import DateInputField from 'components/common/dateInputField.js';
import moment from 'moment';


/**
 * @callback changeCallback
 * @param {*} data
 */
 
/**
 * A date input field component
 * @param {(Object | string)} [date] - The date that the input field will initially be set to.
 *   The date can be a string, a Javascript Date, or a moment object: anything that moment.js 
 *   can parse.
 * @param (changeCallback} onChange - The function that will be called when the data is changed.
 *   The new date value will be passed in as the first parameter.
 */
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