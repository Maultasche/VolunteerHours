import React from 'react';
import PropTypes from 'prop-types';
import SelectInputField from 'components/common/selectInputField.js';

/**
 * @callback changeCallback
 * @param {*} data
 */
 
/**
 * The student edit column component
 * @param {[]} students - An array containing the available students. Each student
 *   is an object with a 'name' property with the name of the student and an 'id'
 *   property with the id of the student
 * @param (changeCallback} [onChange] - The function that will be called when the selected 
 *   student is changed. The new student id will be passed as the first parameter.
 * @param {number} selectedStudentId - The is of the student that is to be selected. Set to null
 *   if no student is to be initially selected
 */
const StudentEditColumn = ({students, onChange=()=>{}, selectedStudentId}) => {
	//Map the students to select options
	let studentOptions = students
		.map(student => ({ text: student.name, value: student.id }));
	
	//Called when the student is changed
	let onStudentChange = selectedStudentId => {
		selectedStudentId = (selectedStudentId !== null && selectedStudentId !== undefined) ?
			selectedStudentId = Number(selectedStudentId) : null;
			
		//Call the change event handler with the student ID
		onChange(selectedStudentId);
	};
	
	return (
		<td className="namecolumn">
			<SelectInputField options={studentOptions} selectedOption={selectedStudentId} onChange={onStudentChange} />
		</td>
	);
};

StudentEditColumn.propTypes = {
	students: PropTypes.array.isRequired,
	onChange: PropTypes.func,
	selectedStudentId: PropTypes.number,
};

export default StudentEditColumn;