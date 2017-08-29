webpackHotUpdate(0,{

/***/ 394:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

var _lodash = __webpack_require__(396);

var _lodash2 = _interopRequireDefault(_lodash);

var _columnHeaders = __webpack_require__(397);

var _columnHeaders2 = _interopRequireDefault(_columnHeaders);

var _gridFooter = __webpack_require__(398);

var _gridFooter2 = _interopRequireDefault(_gridFooter);

var _hoursRows = __webpack_require__(399);

var _hoursRows2 = _interopRequireDefault(_hoursRows);

var _hourEntryValidator = __webpack_require__(410);

var _hourEntryValidator2 = _interopRequireDefault(_hourEntryValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HoursGrid = function (_React$Component) {
	_inherits(HoursGrid, _React$Component);

	function HoursGrid(props) {
		_classCallCheck(this, HoursGrid);

		var _this = _possibleConstructorReturn(this, (HoursGrid.__proto__ || Object.getPrototypeOf(HoursGrid)).call(this, props));

		_this.volunteerApi = props.volunteerApi;

		//Define the column headers
		_this.headers = ["Student", "Date", "Hours", "Description", ""];

		//Define the initial state
		_this.state = {
			students: [],
			hours: [],
			editId: null
		};

		//Bind the member functions
		_this.onEdit = _this.onEdit.bind(_this);
		_this.onCancelEdit = _this.onCancelEdit.bind(_this);
		_this.onSave = _this.onSave.bind(_this);
		_this.onRemove = _this.onRemove.bind(_this);
		return _this;
	}

	_createClass(HoursGrid, [{
		key: 'componentWillMount',
		value: function componentWillMount() {
			var _this2 = this;

			//Retrieve the data, covert the date strings into moments, and then sort it by date
			this.volunteerApi.getVolunteerData().then(function (result) {
				_lodash2.default.forEach(result.data.hours, function (hoursEntry) {
					return hoursEntry.date = (0, _moment2.default)(hoursEntry.date);
				});
				return result.data;
			}).then(function (data) {
				data.hours = _lodash2.default.orderBy(data.hours, function (hoursEntry) {
					return hoursEntry.date;
				});
				return data;
			}).then(function (data) {
				return _this2.setState({
					students: data.students,
					hours: data.hours
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'table',
				{ className: 'hoursgrid', summary: 'Parent Volunteer Hours' },
				_react2.default.createElement(_columnHeaders2.default, { headers: this.headers }),
				_react2.default.createElement(_hoursRows2.default, {
					hours: this.state.hours,
					students: this.state.students,
					editId: this.state.editId,
					onEdit: this.onEdit,
					onCancelEdit: this.onCancelEdit,
					onSave: this.onSave,
					onRemove: this.onRemove
				}),
				_react2.default.createElement(
					_gridFooter2.default,
					{ numOfColumns: this.headers.length },
					'[Add]'
				)
			);
		}
	}, {
		key: 'onEdit',
		value: function onEdit(recordId) {
			var _this3 = this;

			//If we are currently editing, we have to save the current record
			if (this.state.editId !== null) {
				this.onSave(recordId).then(function () {
					return _this3.setState({ editId: recordId });
				});
			} else {
				//Indicate that we are now editing a record
				this.setState({ editId: recordId });
			}
		}
	}, {
		key: 'onCancelEdit',
		value: function onCancelEdit(recordId) {
			var _this4 = this;

			//Retrieve the original values for the record and store them
			//in the component state
			this.volunteerApi.getHourEntry(recordId).then(function (result) {
				return _this4._updateHourEntryInState(result.data);
			}).catch(function (error) {
				return console.error(error);
			});

			//Clear the edit state
			this._clearEditState();
		}
	}, {
		key: 'onRemove',
		value: function onRemove(recordId) {
			var _this5 = this;

			if (this.state.editId !== null) {
				//If we are currently editing, we have to save the current record,
				//then remove the target record
				this.onSave(recordId).then(function () {
					return _this5._removeHourEntry(recordId);
				});
			} else {
				//If we aren't currently editing, just remove the target
				//record
				this._removeHourEntry(recordId);
			}
		}
	}, {
		key: 'onSave',
		value: function onSave(recordId) {
			var _this6 = this;

			return new Promise(function (resolve, reject) {
				//Get the hour entry from the current state
				var hourEntry = _this6._getHourEntryFromState(recordId);

				//Validate the record
				if (_hourEntryValidator2.default.validate(hourEntry)) {
					//Save the record
					resolve(_this6.volunteerApi.updateHourEntry(recordId, hourEntry).then(function (result) {
						return _this6._clearEditState();
					}).catch(function (error) {
						return console.error(error);
					}));
				} else {
					reject('The hour entry with an ID of ' + recordId + ' did not pass validation');
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

	}, {
		key: 'onHourEntryDataChanged',
		value: function onHourEntryDataChanged(recordId, updatedData) {
			//Retrieve the hour entry from the component state
			var hourEntry = _getHourEntryFromState(recordId);

			//Merge the hour entry with the updated data
			hourEntry = _extends({}, hourEntry, updatedData);

			//Update the hour entry in the component state
			_updateHourEntryInState(hourEntry);
		}

		/*Internal Functions*/

	}, {
		key: '_clearEditState',
		value: function _clearEditState() {
			//Indicate that we are no longer editing a record
			this.setState({ editId: null });
		}
	}, {
		key: '_getHourEntryFromState',
		value: function _getHourEntryFromState(hourEntryId) {
			return this.state.hours.find(function (hourEntry) {
				return hourEntry.id === hourEntryId;
			});
		}
	}, {
		key: '_removeHourEntry',
		value: function _removeHourEntry(hourEntryId) {
			var _this7 = this;

			return this._removeHourEntryFromDataSource(hourEntryId).then(function () {
				return _this7._removeHourEntryFromState(hourEntryId);
			});
		}
	}, {
		key: '_removeHourEntryFromDataSource',
		value: function _removeHourEntryFromDataSource(hourEntryId) {
			return this.volunteerApi.removeHourEntry(hourEntryId);
		}
	}, {
		key: '_removeHourEntryFromState',
		value: function _removeHourEntryFromState(hourEntryId) {
			//Remove the hour entry
			var hours = this.state.hours;

			_lodash2.default.remove(hours, function (entry) {
				return entry.id === hourEntryId;
			});

			//Update the state
			this.setState({ hours: hours });
		}
	}, {
		key: '_updateHourEntryInState',
		value: function _updateHourEntryInState(hourEntry) {
			//Get the hours array
			var hours = this.state.hours;

			//Find the index that needs updating
			var entryIndex = _lodash2.default.findIndex(hours, function (entry) {
				return entry.id === hourEntry.id;
			});

			//Update the hour entry
			hours[entryIndex] = hourEntry;

			//Update the state
			this.setState({ hours: hours });
		}

		/*End Internal Functions*/

	}]);

	return HoursGrid;
}(_react2.default.Component);

exports.default = HoursGrid;

/***/ })

})
//# sourceMappingURL=bundle.map