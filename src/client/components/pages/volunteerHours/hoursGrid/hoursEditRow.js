import React from 'react'
import PropTypes from 'prop-types'

const HoursEditRow = (props) => {
	return (
		<tr><td colSpan="5">Edit Row</td></tr>
	)
};

HoursEditRow.PropTypes = {
	hoursEntry: PropTypes.object.isRequired,
	students: PropTypes.array.isRequired,
};

export default HoursEditRow;