import React from 'react';
import PropTypes from 'prop-types';
import NumberInputField from 'components/common/numberInputField.js';

/**
 * @callback changeCallback
 * @param {*} data
 */
 
/**
 * The hours edit column component
 * @param {number} [hours] - The hours being edited
 * @param (changeCallback} [onChange] - The function that will be called when the
 *   hours are changed. The new hours number will be passed as the first parameter.
 */
const NumberEditColumn = ({hours, onChange}) => {
	return (
		<td className="hourscolumn">
			<NumberInputField number={hours} onChange={onChange} />
		</td>
	);
};

NumberEditColumn.propTypes = {
	number: PropTypes.number,
	onChange: PropTypes.func
};

NumberEditColumn.defaultProps = {
	hours: null,
	onChange: (()=>{})
};

export default NumberEditColumn;