import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'components/common/textField.js';

const DescriptionViewColumn = ({description}) => {
	return (
		<td className="descriptioncolumn">
			<TextField text={description} />
		</td>
	);
};

DescriptionViewColumn.propTypes = {
	description: PropTypes.string.isRequired
};

export default DescriptionViewColumn;