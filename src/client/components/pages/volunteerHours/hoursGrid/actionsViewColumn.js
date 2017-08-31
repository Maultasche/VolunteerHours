import React from 'react';
import PropTypes from 'prop-types';
import ActionButtons from 'components/common/actionButtons.js';

const ActionsViewColumn = ({recordId, addingRow, onEdit, onRemove}) => {
	let actionButtons = [
		{ 
			text: "Remove",
			disabled: addingRow, 
			onClick: () => onRemove(recordId)
		},
		{ 
			text: "Edit", 
			disabled: addingRow,
			onClick: () => onEdit(recordId)
		}
	];
	
	return (
		<td className="actionscolumn">
			<ActionButtons buttonData={actionButtons} />
		</td>
	);
};

ActionsViewColumn.propTypes = {
	recordId: PropTypes.number.isRequired,
	onEdit: PropTypes.func,
	onRemove: PropTypes.func
};

ActionsViewColumn.defaultProps = {
	onCancelEdit: (()=>{}),
	onSave: (()=>{}),
	addingRow: false
};

export default ActionsViewColumn;