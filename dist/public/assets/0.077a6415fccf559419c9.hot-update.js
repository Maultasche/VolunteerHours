webpackHotUpdate(0,{

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
				onCancelEdit: onCancelEdit
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

/***/ })

})
//# sourceMappingURL=bundle.map