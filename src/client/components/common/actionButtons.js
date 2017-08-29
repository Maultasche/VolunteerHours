import React from 'react';
import PropTypes from 'prop-types';

const ActionButtons = ({buttonData}) => {
	let actionButtons = buttonData.map((button, index) => 
		<button key={index} onClick={button.onClick}>{button.text}</button>);
		
	return (
		<span>{actionButtons}</span>
	);
};

ActionButtons.propTypes = {	
	buttonData: PropTypes.array.isRequired
};

export default ActionButtons;