import React from 'react';
import PropTypes from 'prop-types';

/**
 * @callback changeCallback
 * @param {*} data
 */
 
/**
 * A select input field component
 * @param {[]} options - An array containing the select options. Each option is an object
 *   with a "text" property that identifies the text to be displayed for the option and a "value"
 *   property that identifies the value of the option
 * @param {*} selectedOption - The value of the option that is to be selected. If this parameter
 *   is null, then no option will be selected.
 * @param (changeCallback} [onChange] - The function that will be called when the selection 
 *   is changed. The new data value will be passed as the first parameter.
 */
const SelectInputField = ({options, selectedOption, onChange=()=>{}}) => {
	let optionElements = options.map((option, index) => 
		<option key={index} value={option.value}>{option.text}</option>);
	
	//Event handler will convert the event to a value and then call
	//the parent handler
	let onTextChange = event => onChange(event.target.value);
	
	//If the selected option was not specified, choose the first option
	if(selectedOption === null || selectedOption === undefined) {
		selectedOption = options[0].value;
	}

	return (
		<select className="input date" onChange={onTextChange} value={selectedOption}>
			{optionElements}
		</select>
	);
};

SelectInputField.propTypes = {
	options: PropTypes.array.isRequired,
	selectedOption: PropTypes.any,
	onChange: PropTypes.func
};

export default SelectInputField;