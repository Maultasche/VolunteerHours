import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'components/common/textField.js'

const StudentViewColumn = ({studentName}) => {
	return (
		<td className="namecolumn">
			<TextField text={studentName} />
		</td>
	);
};

StudentViewColumn.PropTypes = {
	studentName: PropTypes.string.isRequired
};

export default StudentViewColumn;