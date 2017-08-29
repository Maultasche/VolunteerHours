import React from 'react';
import PropTypes from 'prop-types';
import HoursGrid from './hoursGrid/hoursGrid.js';

//import 'public/styles/react-datepicker.css';

const VolunteerHoursPage = ({volunteerApi}) => {
	return (
		<HoursGrid volunteerApi={volunteerApi} />
	);
};

VolunteerHoursPage.propTypes = {
	volunteerApi: PropTypes.object.isRequired
};

export default VolunteerHoursPage;