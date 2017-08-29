import React from 'react';
import PropTypes from 'prop-types';
import StudentViewColumn from './studentViewColumn.js';
import DateViewColumn from './dateViewColumn.js';
import HoursViewColumn from './hoursViewColumn.js';
import DescriptionViewColumn from './descriptionViewColumn.js';
import ActionsViewColumn from './actionsViewColumn.js';

const HoursViewRow = ({hoursEntry, onEdit, onRemove}) => {
	return (
		<tr>
			<StudentViewColumn studentName={hoursEntry.studentName} />
			<DateViewColumn date={hoursEntry.date} />
			<HoursViewColumn hours={hoursEntry.hours} />
			<DescriptionViewColumn description={hoursEntry.description} />
			<ActionsViewColumn 
				recordId={hoursEntry.id} 
				onEdit={onEdit}
				onRemove={onRemove} 
			/>
		</tr>	
	)
};

HoursViewRow.PropTypes = {
	hoursEntry: PropTypes.object.isRequired,
	onEdit: PropTypes.func,
	onRemove: PropTypes.func
};

export default HoursViewRow;