import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

//TODO: Replace this with a datepicker control

/**
 * @callback changeCallback
 * @param {*} data
 */
 
/**
 * A date input field component
 */
class DateInputField extends React.Component {
	/**
	 * Constructs a date input field component
	 * @param {(Object | string)} [date] - The date that the input field will initially be set to.
	 *   The date can be a string, a Javascript Date, or a moment object: anything that moment.js 
	 *   can parse.
	 * @param (changeCallback} onChange - The function that will be called when the data is changed.
	 *   The new date value will be passed in as the first parameter.
	 */
	constructor(props) {
		super(props);

		let {date} = props;
		let dateString = null;

		//If we received a date property, wrap it in a moment object
		if(date) {
			dateString = moment(date).format("l");
		}
		else {
			dateString = "";
		}

		//The state holds the date string because the state of the input
		//control will always be a string. Sometimes it will be a valid
		//date and sometimes it won't
		this.state = {dateString};

		this.onDateChange = this.onDateChange.bind(this);
	}

	/** Renders the data input field */
	render() {
		return (
			<input className="input date" type="text" 
				value={this.state.dateString} 
				onChange={this.onDateChange}
			/>
		);
	}

	/**
	 * This function is called when the value of the date field is changed
	 * @param  {Object} event The input field's change event
	 */
    onDateChange(event) {
    	//Extract the date string from the event and parse it with moment
    	let dateString = event.target.value;

    	if(moment(dateString, "l", true).isValid())
    	{
    		//If this is a valid date string, call the parent change event
    		//handler
    		this.props.onChange(moment(dateString, "l"));

    		//Update the state
    		this.setState({dateString});
    	}
		else {
			//If this is an invalid date string, update the state and
			//call the parent parse error event handler
			this.setState({dateString});

			this.props.onParseError(dateString);
		}
	}
}

DateInputField.propTypes = {
	date: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	]),
	onChange: PropTypes.func,
	onParseError: PropTypes.func
};

DateInputField.defaultProps = {
	onChange: ()=>{},
	onParseError: ()=>{}
};

export default DateInputField;