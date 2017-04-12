'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _reactIntl = require('react-intl');

var _en = require('react-intl/locale-data/en');

var _en2 = _interopRequireDefault(_en);

var _Locale = require('grommet/utils/Locale');

var _reactRedux = require('react-redux');

var _session = require('./actions/session');

var _store = require('./store');

var _store2 = _interopRequireDefault(_store);

var _routes = require('./routes');

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var locale = (0, _Locale.getCurrentLocale)();
(0, _reactIntl.addLocaleData)(_en2.default);
var messages = void 0;
try {
  messages = require('./messages/' + locale);
} catch (e) {
  messages = require('./messages/en-US');
}
var localeData = (0, _Locale.getLocaleData)(messages, locale);

_store2.default.dispatch((0, _session.initialize)(window.location.pathname));

exports.default = function () {
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: _store2.default },
    _react2.default.createElement(
      _reactIntl.IntlProvider,
      { locale: localeData.locale, messages: localeData.messages },
      _react2.default.createElement(_reactRouter.Router, { routes: _routes2.default, history: _reactRouter.browserHistory,
        onUpdate: function onUpdate() {
          return document.getElementById('content').focus();
        } })
    )
  );
};
//# sourceMappingURL=/Users/cm/_localgit/gromm-app/_Babeljs/_Maps/js/App.js.map