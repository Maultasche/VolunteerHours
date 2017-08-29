import React from 'react';
import PropTypes from 'prop-types';
import HoursEditRow from './hoursEditRow';
import HoursViewRow from './hoursViewRow';

const HoursRows = ({hours, students, editId, onEdit, onCancelEdit, onSave, onRemove, onDataChanged}) => {
	let hourEntries = hours.map(hoursEntry => {
		let row = null;
		
		if(hoursEntry.id === editId) {
			row = (
				<HoursEditRow 
					key={hoursEntry.id} 
					hoursEntry={hoursEntry} 
					students={students} 
					onCancelEdit={onCancelEdit}
					onDataChanged={onDataChanged}
				/>
			);
		}
		else {
			row = (
				<HoursViewRow 
					key={hoursEntry.id} 
					hoursEntry={hoursEntry} 
					onEdit={onEdit}
					onRemove={onRemove}
				/>
			);
		}
		
		return row;
	});
	
	return (
		<tbody>
			{hourEntries}
		</tbody>
	);
};

HoursRows.propTypes = {
	hours: PropTypes.array.isRequired,
	students: PropTypes.array.isRequired,
	editId: PropTypes.number,
	onEdit: PropTypes.func,
	onCancelSave: PropTypes.func,
	onSave: PropTypes.func,
	onRemove: PropTypes.func,
	onDataChanged: PropTypes.func
};

export default HoursRows;