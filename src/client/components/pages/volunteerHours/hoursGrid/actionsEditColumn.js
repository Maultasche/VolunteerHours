import React from 'react';
import PropTypes from 'prop-types';
import ActionButtons from 'components/common/actionButtons.js';

const ActionsEditColumn = ({recordId, onCancelEdit, onSave}) => {
	let actionButtons = [
		{ 
			text: "Cancel", 
			onClick: () => onCancelEdit(recordId)
		},
		{ 
			text: "Save", 
			onClick: () => onSave(recordId)
		}
	];
	
	return (
		<td className="actionscolumn">
			<ActionButtons buttonData={actionButtons} />
		</td>
	);
};

ActionsEditColumn.propTypes = {
	recordId: PropTypes.number,
	onCancelEdit: PropTypes.func,
	onSave: PropTypes.func
};

ActionsEditColumn.defaultProps = {
	onCancelEdit: (()=>{}),
	onSave: (()=>{})
};

export default ActionsEditColumn;