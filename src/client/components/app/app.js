import React from 'react';
import AppHeader from './appHeader';
import VolunteerHoursPage from '../pages/volunteerHours/volunteerHoursPage';
import PropTypes from 'prop-types';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.volunteerApi = props.volunteerApi;
	}

	render() {
		return (
			<div className="container">
				<AppHeader />
				<VolunteerHoursPage volunteerApi={this.volunteerApi} />
			</div>
		);
	}
}

App.propTypes = {
	volunteerApi: PropTypes.object.isRequired
};

export default App;