import React from 'react';
import PropTypes from 'prop-types';
import NumberField from 'components/common/numberField.js'

const HoursViewColumn = ({hours}) => {
	return (
		<td className="hourscolumn">
			<NumberField number={hours} formatOptions={{maximumFractionDigits: 2}} />
		</td>
	);
};

HoursViewColumn.PropTypes = {
	hours: PropTypes.number.isRequired
};

export default HoursViewColumn;