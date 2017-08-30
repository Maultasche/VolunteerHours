import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

//TODO: Replace this with a datepicker control

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
const DateInputField = ({date, onChange}) => {
	//If the date was not specified, set it to the current date, otherwise
	//wrap it in a moment object
	if(!date) {
		date = moment();
	}
	else {
		date = moment(date);
	}

	//Event handler will convert the event to a value and then call
	//the parent handler
	let onDateChange = event => {
		onChange(moment(event.target.value, "l"));
	};
	
	return (
		<input className="input date" type="text" 
			value={date.format("l")} onChange={onDateChange}/>
	);
};

DateInputField.propTypes = {
	date: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	onChange: PropTypes.func
};

export default DateInputField;