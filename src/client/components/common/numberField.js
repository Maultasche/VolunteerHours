import React from 'react';
import PropTypes from 'prop-types';

const NumberField = ({number, formatOptions}) => {
	let numberFormatter = new Intl.NumberFormat([], formatOptions);
	let formattedNumber = numberFormatter.format(number);
	
	return (
		<span>{numberFormatter.format(number)}</span>
	);
};

NumberField.propTypes = {
	number: PropTypes.number,
	formatOptions: PropTypes.object
};

export default NumberField;