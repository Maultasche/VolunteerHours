import React from 'react';
import PropTypes from 'prop-types';

/**
 * @callback changeCallback
 * @param {*} data
 */
 
/**
 * A number input field component
 * @param {string} [text] - The number that the input field will initially 
 * be set to. To make the field be initially blank, set this parameter ot null.
 * @param (changeCallback} onChange - The function that will be called when the data is changed.
 *   The new number value will be passed in as the first parameter.
 */
const NumberInputField = ({number, onChange, onParseError}) => {
	//Convert a null number to an empty string
	number = (number === null ? "" : number);

	let onNumberChange = event => {
		let numberString = event.target.value;
		let parsedNumber = Number(numberString);

		if(!Number.isNaN(parsedNumber)) {
			onChange(parsedNumber);
		}
		else {
			onParseError(numberString);
		}
	};

	return (
		<input className="input number" type="number" 
			value={number} onChange={onNumberChange}/>
	);
};

NumberInputField.propTypes = {
	number: PropTypes.number,
	onChange: PropTypes.func
};

NumberInputField.defaultProps = {
	number: "",
	onChange: (()=>{}),
	onParseError: (()=>{})
};

export default NumberInputField;