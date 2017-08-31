/*This module contains functionality for retrieving volunteer data*/

"use strict";

import volunteerData from './data/dataStore.js';
import moment from 'moment';

const dateFormat = "YYYY-MM-DD";

/*API Functions*/

/**
 * Adds a new hour entry to the hours data
 * @param {Object} hourEntry - The hour entry to be added
 */
function addHourEntry(hourEntry) {
	return new Promise((resolve, reject) => {
		//Find an ID to use for the new entry
		const maxId = volunteerData.hours
			.reduce((maxId, hourEntry) => {
				return hourEntry.id > maxId ? hourEntry.id : maxId; 
			}, -1);

		const newId = maxId + 1;

		hourEntry.id = newId;

		//Convert the moment object to a date string
		hourEntry.date = hourEntry.date.format(dateFormat);

		//Add the new entry to the volunteer hours data
		volunteerData.hours.push(hourEntry);

		resolve(createSuccessResult(hourEntry));
	});
}

function getVolunteerData() {
	return new Promise((resolve, reject) => {
		const data = { ...volunteerData, 
				hours: momentizeHourEntries(volunteerData.hours) };
		
		resolve(createSuccessResult(data));
	});
}

function getStudentData() {
	return new Promise((resolve, reject) => {
		resolve(createSuccessResult([...volunteerData.students]));
	});
}

function getHoursData() {
	return new Promise((resolve, reject) => {
		resolve(createSuccessResult(momentizeHourEntries(volunteerData.hours)));
	});
}

function getHourEntry(hourEntryId) {
	return getHourEntryById(hourEntryId)
		.then(hourEntry => momentizeHourEntry(hourEntry))
		.then(hourEntry => createSuccessResult(hourEntry))
		.catch(error => createErrorResult(error));
}

function getNewHourEntry() {
	return new Promise((resolve, reject) => {
		let hourEntry = {
			id: null, 
			studentId: null, 
			studentName: "",
			date: moment(),
			hours: null,
			description: ""						
		};

		resolve(hourEntry);
	});
}

function removeHourEntry(hourEntryId) {
	return new Promise((resolve, reject) => {
		//Find whether the entry exists
		let entryExists = _.some(volunteerData.hours, { "id": hourEntryId});

		if(entryExists) {
			//If the entry does exist, remove it
			_.remove(volunteerData.hours, 
				entry => entry.id === hourEntryId);

			resolve(createSuccessResult());			
		}
		else {
			//If the entry doesn't exist, reject with an error
			reject(`The hour entry with an ID of ${hourEntryId} could not be found`);
		}

	});
}

function updateHourEntry(hourEntryId, hourEntry) {
	return new Promise((resolve, reject) => {
		Promise.all([getHourEntryById(hourEntryId), getStudentById(hourEntry.studentId)])
			.then(([targetHourEntry, targetStudent]) => {
				targetHourEntry.studentId = hourEntry.studentId;
				targetHourEntry.studentName = targetStudent.name;
				targetHourEntry.date = moment(hourEntry.date).format(dateFormat);
				targetHourEntry.hours = hourEntry.hours;
				targetHourEntry.description = hourEntry.description;
				
				const updatedHourEntry = momentizeHourEntry({ ...targetHourEntry});
				
				resolve(createSuccessResult(updatedHourEntry));
			})
			.catch(error => reject(createErrorResult(error)));
	});	
}

/*End API Functions */

/*Internal Functions*/

function getHourEntryById(hourEntryId) {
	return new Promise((resolve, reject) => {
		let targetHourEntry = volunteerData.hours.find(entry => entry.id === hourEntryId);
		
		if(targetHourEntry) {
			resolve(targetHourEntry);
		}
		else {
			reject(`The hour entry with an ID of ${hourEntryId} could not be found`);
		}
	});
}

function getStudentById(studentId) {
	return new Promise((resolve, reject) => {
		let targetStudent = volunteerData.students
				.find(student => student.id === studentId);
		
		if(targetStudent) {
			resolve(targetStudent);
		}
		else {
			reject(`The student with an ID of ${studentId} could not be found`);
		}
	});	
}

/**
 * Transforms hour entries into hour entries with the date as a moment
 * object instead of a date string
 * @param  {[]} hourEntries - The hour entries to be transformed
 * @return {[]} The hour entries with moment objects for dates
 */
function momentizeHourEntries(hourEntries) {
	const transformedHourEntries = hourEntries
		.map(momentizeHourEntry);

	return transformedHourEntries;
}

/**
 * Transforms an hour entry into an hour entry with the date as a moment
 * object instead of a date string
 * @param  {Object} hourEntry - The hour entry to be transformed
 * @return {Object} The hour entry with moment objects for dates
 */
function momentizeHourEntry(hourEntry) {
	return {date: moment(hourEntry.date), ...hourEntry};
}

function createErrorResult(message, code = 400) {
	let errorResult = { code, message };
	
	return errorResult;
}

function createSuccessResult(data) {
	let successResult = {
		code: 200,
		data: data
	};
	
	return successResult;
}

/*End Internal Functions*/

export default {
	addHourEntry,
	getVolunteerData,
	getStudentData,
	getHoursData,
	getHourEntry,
	getNewHourEntry,
	removeHourEntry,
	updateHourEntry
};