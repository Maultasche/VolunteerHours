webpackHotUpdate(0,{

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextField = function TextField(_ref) {
	var text = _ref.text;

	return _react2.default.createElement(
		'span',
		null,
		text
	);
};

TextField.propTypes = {
	text: _propTypes2.default.string.isRequired
};

exports.default = TextField;

/***/ }),

/***/ 399:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hoursEditRow = __webpack_require__(400);

var _hoursEditRow2 = _interopRequireDefault(_hoursEditRow);

var _hoursViewRow = __webpack_require__(401);

var _hoursViewRow2 = _interopRequireDefault(_hoursViewRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HoursRows = function HoursRows(_ref) {
	var hours = _ref.hours,
	    students = _ref.students,
	    editId = _ref.editId,
	    onEdit = _ref.onEdit,
	    onCancelEdit = _ref.onCancelEdit,
	    onSave = _ref.onSave,
	    onRemove = _ref.onRemove,
	    onDataChanged = _ref.onDataChanged;

	var hourEntries = hours.map(function (hoursEntry) {
		var row = null;

		if (hoursEntry.id === editId) {
			row = _react2.default.createElement(_hoursEditRow2.default, {
				key: hoursEntry.id,
				hoursEntry: hoursEntry,
				students: students,
				onCancelEdit: onCancelEdit,
				onDataChanged: onDataChanged
			});
		} else {
			row = _react2.default.createElement(_hoursViewRow2.default, {
				key: hoursEntry.id,
				hoursEntry: hoursEntry,
				onEdit: onEdit,
				onRemove: onRemove
			});
		}

		return row;
	});

	return _react2.default.createElement(
		'tbody',
		null,
		hourEntries
	);
};

HoursRows.propTypes = {
	hours: _propTypes2.default.array.isRequired,
	students: _propTypes2.default.array.isRequired,
	editId: _propTypes2.default.number,
	onEdit: _propTypes2.default.func,
	onCancelSave: _propTypes2.default.func,
	onSave: _propTypes2.default.func,
	onRemove: _propTypes2.default.func,
	onDataChanged: _propTypes2.default.func
};

exports.default = HoursRows;

/***/ }),

/***/ 400:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HoursEditRow = function HoursEditRow(props) {
	return _react2.default.createElement(
		'tr',
		null,
		_react2.default.createElement(
			'td',
			{ colSpan: '5' },
			'Edit Row'
		)
	);
};

HoursEditRow.PropTypes = {
	hoursEntry: _propTypes2.default.object.isRequired,
	students: _propTypes2.default.array.isRequired
};

exports.default = HoursEditRow;

/***/ }),

/***/ 401:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _studentViewColumn = __webpack_require__(402);

var _studentViewColumn2 = _interopRequireDefault(_studentViewColumn);

var _dateViewColumn = __webpack_require__(403);

var _dateViewColumn2 = _interopRequireDefault(_dateViewColumn);

var _hoursViewColumn = __webpack_require__(405);

var _hoursViewColumn2 = _interopRequireDefault(_hoursViewColumn);

var _descriptionViewColumn = __webpack_require__(407);

var _descriptionViewColumn2 = _interopRequireDefault(_descriptionViewColumn);

var _actionsViewColumn = __webpack_require__(408);

var _actionsViewColumn2 = _interopRequireDefault(_actionsViewColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HoursViewRow = function HoursViewRow(_ref) {
	var hoursEntry = _ref.hoursEntry,
	    onEdit = _ref.onEdit,
	    onRemove = _ref.onRemove;

	return _react2.default.createElement(
		'tr',
		null,
		_react2.default.createElement(_studentViewColumn2.default, { studentName: hoursEntry.studentName }),
		_react2.default.createElement(_dateViewColumn2.default, { date: hoursEntry.date }),
		_react2.default.createElement(_hoursViewColumn2.default, { hours: hoursEntry.hours }),
		_react2.default.createElement(_descriptionViewColumn2.default, { description: hoursEntry.description }),
		_react2.default.createElement(_actionsViewColumn2.default, {
			recordId: hoursEntry.id,
			onEdit: onEdit,
			onRemove: onRemove
		})
	);
};

HoursViewRow.PropTypes = {
	hoursEntry: _propTypes2.default.object.isRequired,
	onEdit: _propTypes2.default.func,
	onRemove: _propTypes2.default.func
};

exports.default = HoursViewRow;

/***/ }),

/***/ 402:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _textField = __webpack_require__(236);

var _textField2 = _interopRequireDefault(_textField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StudentViewColumn = function StudentViewColumn(_ref) {
	var studentName = _ref.studentName;

	return _react2.default.createElement(
		'td',
		{ className: 'namecolumn' },
		_react2.default.createElement(_textField2.default, { text: studentName })
	);
};

StudentViewColumn.PropTypes = {
	studentName: _propTypes2.default.string.isRequired
};

exports.default = StudentViewColumn;

/***/ }),

/***/ 403:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dateField = __webpack_require__(404);

var _dateField2 = _interopRequireDefault(_dateField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateViewColumn = function DateViewColumn(_ref) {
	var date = _ref.date;

	return _react2.default.createElement(
		'td',
		{ className: 'datecolumn' },
		_react2.default.createElement(_dateField2.default, { date: date, format: 'l' })
	);
};

DateViewColumn.propTypes = {
	date: _propTypes2.default.oneOfType([_propTypes2.default.string.isRequired, _propTypes2.default.object.isRequired])
};

exports.default = DateViewColumn;

/***/ }),

/***/ 404:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = __webpack_require__(0);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateField = function DateField(_ref) {
	var date = _ref.date,
	    format = _ref.format;

	return _react2.default.createElement(
		'span',
		null,
		(0, _moment2.default)(date).format(format)
	);
};

DateField.propTypes = {
	date: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
	format: _propTypes2.default.string
};

exports.default = DateField;

/***/ }),

/***/ 405:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _numberField = __webpack_require__(406);

var _numberField2 = _interopRequireDefault(_numberField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HoursViewColumn = function HoursViewColumn(_ref) {
	var hours = _ref.hours;

	return _react2.default.createElement(
		'td',
		{ className: 'hourscolumn' },
		_react2.default.createElement(_numberField2.default, { number: hours, formatOptions: { maximumFractionDigits: 2 } })
	);
};

HoursViewColumn.PropTypes = {
	hours: _propTypes2.default.number.isRequired
};

exports.default = HoursViewColumn;

/***/ }),

/***/ 406:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberField = function NumberField(_ref) {
	var number = _ref.number,
	    formatOptions = _ref.formatOptions;

	var numberFormatter = new Intl.NumberFormat([], formatOptions);
	var formattedNumber = numberFormatter.format(number);

	return _react2.default.createElement(
		'span',
		null,
		numberFormatter.format(number)
	);
};

NumberField.propTypes = {
	number: _propTypes2.default.number.isRequired,
	formatOptions: _propTypes2.default.object
};

exports.default = NumberField;

/***/ }),

/***/ 407:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _textField = __webpack_require__(236);

var _textField2 = _interopRequireDefault(_textField);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DescriptionViewColumn = function DescriptionViewColumn(_ref) {
	var description = _ref.description;

	return _react2.default.createElement(
		'td',
		{ className: 'descriptioncolumn' },
		_react2.default.createElement(_textField2.default, { text: description })
	);
};

DescriptionViewColumn.propTypes = {
	description: _propTypes2.default.string.isRequired
};

exports.default = DescriptionViewColumn;

/***/ }),

/***/ 408:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _actionButtons = __webpack_require__(409);

var _actionButtons2 = _interopRequireDefault(_actionButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionsViewColumn = function ActionsViewColumn(_ref) {
	var recordId = _ref.recordId,
	    onEdit = _ref.onEdit,
	    onRemove = _ref.onRemove;

	var actionButtons = [{
		text: "Remove",
		onClick: function onClick() {
			if (onRemove) {
				onRemove(recordId);
			}
		}
	}, {
		text: "Edit",
		onClick: function onClick() {
			if (onEdit) {
				onEdit(recordId);
			}
		}
	}];

	return _react2.default.createElement(
		'td',
		{ className: 'actionscolumn' },
		_react2.default.createElement(_actionButtons2.default, { buttonData: actionButtons })
	);
};

ActionsViewColumn.propTypes = {
	recordId: _propTypes2.default.number.isRequired,
	onEdit: _propTypes2.default.func,
	onRemove: _propTypes2.default.func
};

exports.default = ActionsViewColumn;

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(12);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ActionButtons = function ActionButtons(_ref) {
	var buttonData = _ref.buttonData;

	var actionButtons = buttonData.map(function (button, index) {
		return _react2.default.createElement(
			'button',
			{ key: index, onClick: button.onClick },
			button.text
		);
	});

	return _react2.default.createElement(
		'span',
		null,
		actionButtons
	);
};

ActionButtons.propTypes = {
	buttonData: _propTypes2.default.array.isRequired
};

exports.default = ActionButtons;

/***/ })

})
//# sourceMappingURL=bundle.map