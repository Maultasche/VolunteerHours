import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

const DateField = ({date, format}) => {
	return (
		<span>{moment(date).format(format)}</span>
	);
};

DateField.propTypes = {
	date: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	format: PropTypes.string
};

export default DateField;