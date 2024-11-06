"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
require("./modale-component.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function ModalComponent(_ref) {
  let {
    icon,
    message,
    buttonText,
    onClose,
    onButtonClick,
    buttonColor,
    className
  } = _ref;
  (0, _react.useEffect)(() => {
    const handleKeyPress = event => {
      if (event.key === "Escape") {
        onClose();
      } else if (event.key === "Enter") {
        onButtonClick();
      }
    };
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [onButtonClick, onClose]);
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "modalOverlay"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: className || "modal",
    tabIndex: -1
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "modalHeader"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "closeBtn",
    onClick: onClose,
    tabIndex: 0
  }, "\xD7")), /*#__PURE__*/_react.default.createElement("div", {
    className: "modalBody"
  }, /*#__PURE__*/_react.default.createElement("span", null, message), icon && /*#__PURE__*/_react.default.createElement("img", {
    src: icon,
    alt: "Icon",
    className: "closeIcon"
  })), /*#__PURE__*/_react.default.createElement("div", {
    className: "modalFooter"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "modalButton",
    onClick: onButtonClick,
    style: {
      backgroundColor: buttonColor
    },
    autoFocus: true
  }, buttonText))));
}
var _default = exports.default = ModalComponent;