import React from 'react';
import PropTypes from 'prop-types';
// import DatePicker from 'components/common/react-datepicker/react-datepicker';
import moment from 'moment';

// import 'components/common/react-datepicker/react-datepicker.css';

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
 *   The new data value will be passed in as the first parameter.
 */
const DateInputField = ({date, onChange}) => {
	//If the date was not specified, set it to the current date
	if(!date) {
		date = moment();
	}

		return (<div></div>);
	// return (
		// <DatePicker selected={date} onChange={onChange} />
	// );
};

DateInputField.propTypes = {
	date: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	onChange: PropTypes.func
};

export default DateInputField;