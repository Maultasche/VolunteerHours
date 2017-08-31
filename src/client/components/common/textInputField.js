import React from 'react';
import PropTypes from 'prop-types';

/**
 * @callback changeCallback
 * @param {*} data
 */
 
/**
 * A date input field component
 * @param {string} [text] - The text that the input field will initially be set to.
 * @param {number{ [maxLength] - The maxumum allowed length of the text field
 * @param (changeCallback} onChange - The function that will be called when the data is changed.
 *   The new data value will be passed in as the first parameter.
 */
const TextInputField = ({text, maxLength, onChange}) => {
	let onTextChange = event => onChange(event.target.value);

	return (
		<input className="input text" type="text" 
			value={text} maxLength={maxLength} onChange={onTextChange}/>
	);
};

TextInputField.propTypes = {
	text: PropTypes.string,
	maxLength: PropTypes.number,
	onChange: PropTypes.func
};

export default TextInputField;