import React from 'react';
import PropTypes from 'prop-types';
import ActionButtons from 'components/common/actionButtons.js';

const ActionsViewColumn = ({recordId, onEdit, onRemove}) => {
	let actionButtons = [
		{ 
			text: "Remove", 
			onClick: () => {
				if(onRemove) {
					onRemove(recordId);
				}
				
			}
		},
		{ 
			text: "Edit", 
			onClick: () => {
				if(onEdit) {
					onEdit(recordId);
				}
			}
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

export default ActionsViewColumn;