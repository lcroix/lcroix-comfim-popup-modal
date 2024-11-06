"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _modaleComponent = _interopRequireDefault(require("./modale-component/modale-component"));
var _reactRouterDom = require("react-router-dom");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function App(_ref) {
  let {
    message,
    navigatePage
  } = _ref;
  const [isModalOpen, setIsModalOpen] = (0, _react.useState)(true);
  const navigate = (0, _reactRouterDom.useNavigate)();
  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleButtonClick = () => {
    setTimeout(() => {
      setIsModalOpen(false);
      navigate(navigatePage);
    }, 500);
  };
  return /*#__PURE__*/_react.default.createElement("div", null, isModalOpen && /*#__PURE__*/_react.default.createElement(_modaleComponent.default, {
    message: message,
    buttonText: "OK",
    onClose: handleClose,
    onButtonClick: handleButtonClick
  }));
}
var _default = exports.default = App;