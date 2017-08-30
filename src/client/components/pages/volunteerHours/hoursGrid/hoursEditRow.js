import React from 'react'
import PropTypes from 'prop-types'
import DateEditColumn from './dateEditColumn.js';
import moment from 'moment';

const HoursEditRow = ({hoursEntry, students, onCancelEdit=()=>{}, onSave=()=>{}, onDataChanged=()=>{}}) => {
	let onChange = event => {
		onDataChanged(hoursEntry.id, 
			{date: moment(event.target.value, "l")});
	};

	return (
		<tr>
			<td></td>
			<DateEditColumn date={hoursEntry.date} 
				onChange={onChange} />
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