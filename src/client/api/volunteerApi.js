/*This module contains functionality for retrieving volunteer data*/

"use strict";

import volunteerData from './data/dataStore.js';

/*API Functions*/

function getVolunteerData() {
	return new Promise((resolve, reject) => {
		var obj = {...volunteerData};
		
		resolve(createSuccessResult({ ...volunteerData }));
	});
}

function getStudentData() {
	return new Promise((resolve, reject) => {
		resolve(createSuccessResult({...volunteerData.students}));
	});
}

function getHoursData() {
	return new Promise((resolve, reject) => {
		resolve(createSuccessResult({ ...volunteerData.hours }));
	});
}

function getHourEntry(hourEntryId) {
	return getHourEntryById(hourEntryId)
		.then(hourEntry => createSuccessResult(hourEntry))
		.catch(error => createErrorResult(error));
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
				targetHourEntry.date = hourEntry.date;
				targetHourEntry.hours = hourEntry.hours;
				targetHourEntry.description = hourEntry.description;
				
				resolve(createSuccessResult());
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
	getVolunteerData,
	getStudentData,
	getHoursData,
	getHourEntry,
	removeHourEntry,
	updateHourEntry
};