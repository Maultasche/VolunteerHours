import React from 'react';
import moment from 'moment';
import _ from 'lodash';

import ColumnHeaders from './columnHeaders';
import GridFooter from './gridFooter';
import HoursRows from './hoursRows';
import ActionButtons from 'components/common/actionButtons';

import hourEntryValidator from 'logic/validators/hourEntryValidator';

class HoursGrid extends React.Component {
	constructor(props) {
		super(props);

		this.volunteerApi = props.volunteerApi;

		//Define the column headers
		this.headers = [
			"Student",
			"Date",
			"Hours",
			"Description",
			""
		];

		//Define the initial state
		this.state = {
			students: [],
			hours: [],				
			editId: null,
			addingRow: false
		};
		
		//Bind the member functions
		this.onAddRow = this.onAddRow.bind(this);
		this.onEdit = this.onEdit.bind(this);
		this.onCancelEdit = this.onCancelEdit.bind(this);
		this.onSave = this.onSave.bind(this);
		this.onRemove = this.onRemove.bind(this);
		this.onHourEntryDataChanged = this.onHourEntryDataChanged.bind(this);
	}

	componentWillMount() {
		//Retrieve the data, covert the date strings into moments, and then sort it by date
		this.volunteerApi.getVolunteerData()
			.then(result => {
				_.forEach(result.data.hours, hoursEntry => hoursEntry.date = moment(hoursEntry.date));
				return result.data;
			})
			.then(data => {
				data.hours = _.orderBy(data.hours, hoursEntry => hoursEntry.date);
				return data;
			})
			.then(data => this.setState({ 
				students: data.students, 
				hours: data.hours
			}));
	}

	render() {
		let footerActionButtons = [
			{ 
				text: "Add", 
				onClick: this.onAddRow
			}
		];

		return (
			<table className="hoursgrid" summary="Parent Volunteer Hours">
				<ColumnHeaders headers={this.headers} />
				<HoursRows 
					hours={this.state.hours} 
					students={this.state.students}
					editId={this.state.editId}
					addingRow={this.state.addingRow}
					onEdit={this.onEdit}
					onCancelEdit={this.onCancelEdit}
					onSave={this.onSave}
					onRemove={this.onRemove}
					onDataChanged={this.onHourEntryDataChanged}
				/>
				<GridFooter numOfColumns={this.headers.length}>
					<ActionButtons buttonData={footerActionButtons} />
				</GridFooter>
			</table>
		);
	}
	
	onAddRow() {		
		if(this.state.editId !== null) {
			//If we are currently editing, we have to save the current record
			//before adding
			this.onSave(recordId)
				.then(() => this._addNewRow());
		}
		else {
			//If we are not editing, just add the new row
			this._addNewRow();
		}
	}

	onEdit(recordId) {	
		//If we are currently editing, we have to save the current record
		if(this.state.editId !== null) {
			this.onSave(recordId)
				.then(() => this.setState({ editId: recordId }));
		}
		else {
			//Indicate that we are now editing a record
			this.setState({ editId: recordId });
		}
	}

	onCancelEdit(recordId) {
		if(this.state.addingRow) {
			this._cancelAdd();
		}
		else {
			this._cancelEdit(recordId);		
		}

	}
	
	onRemove(recordId) {
		if(this.state.editId !== null) {
			//If we are currently editing, we have to save the current record,
			//then remove the target record
			this.onSave(recordId).then(() => this._removeHourEntry(recordId));
		}
		else {
			//If we aren't currently editing, just remove the target
			//record
			this._removeHourEntry(recordId);
		}
	}

	onSave(recordId) {
		return new Promise((resolve, reject) => {
			//Get the hour entry from the current state
			let hourEntry = this._getHourEntryFromState(recordId);
			
			//Validate the record
			if(hourEntryValidator.validate(hourEntry)) {
				//Save the record
				let savePromise;

				if(this.state.addingRow) {
					resolve(this._addHourEntry(hourEntry)
						.then(result => this._clearAddState()));
				}
				else {
					resolve(this._updateHourEntry(recordId, hourEntry)
						.then(result => this._clearEditState()));
											
				}
			}
			else {
				reject(`The hour entry with an ID of ${recordId} did not pass validation`);
			}
		});
	}
	
	/**
	 * This function is called whenever the data for an hour entry has been updated
	 * (but not saved). This function will merge the updated data with the current 
	 * component state so only pass in the fields that have been updated
	 * @param {number} recordId - The ID for the hour entry record being updated
	 * @param {Object} updatedData - An object containing only the hour entry fields that
	 *   were updated
	 */
	onHourEntryDataChanged(recordId, updatedData) {
		//Retrieve the hour entry from the component state
		let hourEntry = this._getHourEntryFromState(recordId);

		//Merge the hour entry with the updated data
		hourEntry = {...hourEntry, ...updatedData};
		
		//Update the hour entry in the component state
		this._updateHourEntryInState(hourEntry);
	}
	
	/*Internal Functions*/
	
	/**
	 * Adds a new row to the grid and puts the grid into add mode
	 * @return {Object} A promise representing the operation
	 */
	_addNewRow() {
		let hours = this.state.hours;
	
		return this.volunteerApi.getNewHourEntry()
			.then(hourEntry => {
				this.setState({
					hours:[...this.state.hours, hourEntry],
					addingRow: true
				});
			});
	}

	/**
	 * Adds an hour entry to the data source and then updates
	 * the added entry in the component state
	 * @param {Object} hourEntry - The hour entry to be added
	 * @return {Object} A promise representing the operation
	 */
	_addHourEntry(hourEntry) {
		return this.volunteerApi
			.addHourEntry(hourEntry)
			.then(result => this._updateAddedHourEntryInState(result.data))
			.catch(error => console.error(error));
	}

	/**
	 * Cancels a row add
	 */
	_cancelAdd() {
		//Remove the add row from the state
		this._removeHourEntryFromState(null);

		//Clear the add state
		this._clearAddState();
	}

	/**
	 * Cancels a row edit
	 * @param  {number} recordId The ID of the record being edited
	 */
	_cancelEdit(recordId) {
		//Retrieve the original values for the record and store them
		//in the component state
		this.volunteerApi.getHourEntry(recordId)
			.then(result => this._updateHourEntryInState(result.data))
			.catch(error => console.error(error));
	
		//Clear the edit state
		this._clearEditState();	
	}

	_clearAddState() {
		//Indicate that we are no longer adding a record
		this.setState({addingRow: false});
	}

	_clearEditState() {
		//Indicate that we are no longer editing a record
		this.setState({editId: null});
	}
	
	_getHourEntryFromState(hourEntryId) {
		return this.state.hours
			.find(hourEntry => hourEntry.id === hourEntryId);
	}

	_removeHourEntry(hourEntryId) {
		return this._removeHourEntryFromDataSource(hourEntryId)
			.then(() => this._removeHourEntryFromState(hourEntryId));
	}

	_removeHourEntryFromDataSource(hourEntryId) {
		return this.volunteerApi.removeHourEntry(hourEntryId);			
	}

	_removeHourEntryFromState(hourEntryId) {
		//Remove the hour entry
		let hours = this.state.hours;

		_.remove(hours,	entry => entry.id === hourEntryId);

		//Update the state
		this.setState({ hours })
	}

	_updateHourEntry(hourEntryId, hourEntry) {
		return this.volunteerApi
			.updateHourEntry(hourEntryId, hourEntry)
			.then(result => this._updateHourEntryInState(result.data))
			.catch(error => console.error(error));
	}

	/**
	 * Updates an hour entry in the component sate
	 * @param  {Object} hourEntry - The hour entry that will replace the old entry
	 * @param  {number} [hourEntryId] - The ID of the hour entry to be updated.
	 *   This parameter defaults to hourEntry.id.
	 */
	_updateHourEntryInState(hourEntry, hourEntryId=hourEntry.id) {
		//Get the hours array
		let hours = this.state.hours;

		//Find the index that needs updating
		let entryIndex = _.findIndex(hours, 
			entry => entry.id === hourEntry.id);

		//Update the hour entry
		hours[entryIndex] = hourEntry;

		//Update the state
		this.setState({ hours });
	}

	/**
	 * Updates the added record in the component state (the record
	 * with an id of null) with a new hour entry record
	 * @param  {Object} hourEntry - The hour entry that will replace
	 * the added record
	 */
	_updateAddedHourEntryInState(hourEntry) {
		this._updateHourEntryInState(hourEntry, null);	
	}

	/*End Internal Functions*/
}

export default HoursGrid;