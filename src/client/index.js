import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import volunteerApi from './api/volunteerApi';

ReactDOM.render(<App volunteerApi={volunteerApi} />, 
	document.getElementById("app"));