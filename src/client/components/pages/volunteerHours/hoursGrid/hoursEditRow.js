import React from 'react'
import PropTypes from 'prop-types'
import DateEditColumn from './dateEditColumn.js';

const HoursEditRow = ({hoursEntry, students, onCancelEdit=()=>{}, onSave=()=>{}, onDataChanged=()=>{}}) => {
	return (
		<tr>
			<td></td>
			<DateEditColumn date={hoursEntry.date} onChange={date => onDataChanged({date})} />
			<td colSpan="3"></td>
		</tr>
	)
};

HoursEditRow.PropTypes = {
	hoursEntry: PropTypes.object.isRequired,
	students: PropTypes.array.isRequired,
	onCancelEdit: PropTypes.func,
	onSave: PropTypes.func,
	onDataChanged: PropTypes.func
};

export default HoursEditRow;