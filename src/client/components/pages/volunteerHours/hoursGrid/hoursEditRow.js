import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

import DateEditColumn from './dateEditColumn.js';
import StudentEditColumn from './studentEditColumn.js';
import DescriptionEditColumn from './descriptionEditColumn.js';
import HoursEditColumn from './hoursEditColumn.js';
import ActionsEditColumn from './ActionsEditColumn.js';

const HoursEditRow = ({hoursEntry, students, onCancelEdit, onSave, onDataChanged}) => {
	//Called when the student is changed
	let onStudentChange = selectedStudentId => {	
		//Find the name that corresponds to the student id
		//It's possible that no student is currently selected
		let selectedStudent = students
			.find(student => student.id == selectedStudentId)
			
		let selectedStudentName = selectedStudent ? selectedStudent.name : null;
				
		//Call the data changed event handler with the student ID and name
		onDataChanged(hoursEntry.id, 
			{studentId: selectedStudentId, studentName: selectedStudentName});
	};
	
	let onHoursChange = hours => {
		onDataChanged(hoursEntry.id, {hours});
	};

	//Called when the date is changed
	let onDateChange = date => {
		onDataChanged(hoursEntry.id, {date});
	};
	
	//Called when the description is changed
	let onDescriptionChange = description => {
		onDataChanged(hoursEntry.id, {description});
	};
	
	return (
		<tr>
			<StudentEditColumn 
				students={students} 
				selectedStudentId={hoursEntry.studentId}
				onChange={onStudentChange}
			/>
			<DateEditColumn 
				date={hoursEntry.date} 
				onChange={onDateChange} 
			/>
			<HoursEditColumn 
				hours={hoursEntry.hours} 
				onChange={onHoursChange}
			/>
			<DescriptionEditColumn 
				description={hoursEntry.description} 
				onChange={onDescriptionChange}
			/>
			<ActionsEditColumn
				recordId={hoursEntry.id}
				onCancelEdit={onCancelEdit}
				onSave={onSave}
			/>
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

HoursEditRow.defaultProps = {
	onCancelEdit: (()=>{}),
	onSave: (()=>{}),
	onDataChanged: (()=>{})
};

export default HoursEditRow;