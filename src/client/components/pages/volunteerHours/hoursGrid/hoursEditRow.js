import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment';

import DateEditColumn from './dateEditColumn.js';
import StudentEditColumn from './studentEditColumn.js';
import DescriptionEditColumn from './descriptionEditColumn.js';

const HoursEditRow = ({hoursEntry, students, onCancelEdit=()=>{}, onSave=()=>{}, onDataChanged=()=>{}}) => {
	//Called when the student is changed
	let onStudentChange = selectedStudentId => {	
		//Find the name that corresponds to the student id
		//It's possible that no student is currently selected
		let selectedStudent = students
			.find(student => student.id == selectedStudentId)
			
		let selectedStudentName = selectedStudent ? selectedStudent.name : null;
		
		console.log(JSON.stringify({studentId: selectedStudentId, studentName: selectedStudentName}));
		
		//Call the data changed event handler with the student ID and name
		onDataChanged(hoursEntry.id, 
			{studentId: selectedStudentId, studentName: selectedStudentName});
	};
	
	//Called when the date is changed
	let onDateChange = date => {
		onDataChanged(hoursEntry.id, 
			{date: date.format("YYYY-MM-DD")});
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
			<DateEditColumn date={hoursEntry.date} onChange={onDateChange} />
			<td colSpan="1"></td>
			<DescriptionEditColumn 
				description={hoursEntry.description} 
				onChange={onDescriptionChange}
			/>
			<td colSpan="1"></td>
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