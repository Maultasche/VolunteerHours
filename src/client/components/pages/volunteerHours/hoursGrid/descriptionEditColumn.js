import React from 'react';
import PropTypes from 'prop-types';
import TextInputField from 'components/common/textInputField.js';

/**
 * @callback changeCallback
 * @param {*} data
 */
 
/**
 * The description edit column component
 * @param {string} description - The description that is being edited
 * @param (changeCallback} [onChange] - The function that will be called when the
 *   description is changed. The new description will be passed as the first parameter.
 */
const DescriptionEditColumn = ({description, onChange=()=>{}}) => {
	let onTextChange = event => onChange(event.target.value);
	
	return (
		<td className="descriptioncolumn">
			<TextInputField text={description} maxLength={250} onChange={onTextChange} />
		</td>
	);
};

DescriptionEditColumn.propTypes = {
	description: PropTypes.string,
	onChange: PropTypes.func
};

export default DescriptionEditColumn;