var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}var PREVIEW_INPUT = "INPUT";
var defaultMarkdown = "# Welcome to my React Markdown Previewer!\n\n  ## This is a sub-heading...\n  ### And here's some other cool stuff:\n    \n  Heres some code, `<div></div>`, between 2 backticks.\n\n  ```\n  // this is multi-line code:\n\n  function anotherExample(firstLine, lastLine) {\n    if (firstLine == '```' && lastLine == '```') {\n      return multiLineCode;\n    }\n  }\n  ```\n    \n  You can also make text **bold**... whoa!\n  Or _italic_.\n  Or... wait for it... **_both!_**\n  And feel free to go crazy ~~crossing stuff out~~.\n\n  There's also [links](https://www.freecodecamp.com), and\n   > Block Quotes!\n\n  And if you want to get really crazy, even tables:\n\n  Wild Header | Crazy Header | Another Header?\n  ------------ | ------------- | ------------- \n  Your content can | be here, and it | can be here....\n  And here. | Okay. | I think we get it.\n\n  - And of course there are lists.\n    - Some are bulleted.\n        - With different indentation levels.\n          - That look like this.\n\n\n  1. And there are numbererd lists too.\n  1. Use just 1s if you want! \n  1. But the list goes on...\n  - Even if you use dashes or asterisks.\n  * And last but not least, let's not forget embedded images:\n\n  ![React Logo w/ Text](https://goo.gl/Umyytc)\n  ";














































var defaultState = {
  text: defaultMarkdown };


var doPreview = function doPreview(text) {
  return {
    type: PREVIEW_INPUT,
    text: text };

};

var convertToMarkdown = function convertToMarkdown(text) {
  var md = marked(text);
  return { __html: md };
};

var markdownReducer = function markdownReducer() {var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;var action = arguments[1];
  switch (action.type) {
    case PREVIEW_INPUT:
      return {
        text: action.text };


    default:
      return state;}

};

var store = Redux.createStore(
markdownReducer,
Redux.applyMiddleware(ReduxThunk.default));


var Provider = ReactRedux.Provider;
var connect = ReactRedux.connect;var

AppWrapper = function (_React$Component) {_inherits(AppWrapper, _React$Component);
  function AppWrapper(props) {_classCallCheck(this, AppWrapper);return _possibleConstructorReturn(this, (AppWrapper.__proto__ || Object.getPrototypeOf(AppWrapper)).call(this,
    props));
  }_createClass(AppWrapper, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "wrapper" },
          React.createElement(Editor, this.props),
          React.createElement(Previewer, this.props)));


    } }]);return AppWrapper;}(React.Component);var


Editor = function (_React$Component2) {_inherits(Editor, _React$Component2);
  function Editor(props) {_classCallCheck(this, Editor);var _this2 = _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this,
    props));
    _this2.handleChange = _this2.handleChange.bind(_this2);return _this2;
  }_createClass(Editor, [{ key: "handleChange", value: function handleChange(

    event) {
      this.props.handleChange(event.target.value);
    } }, { key: "render", value: function render()

    {
      return (
        React.createElement("textarea", {
          id: "editor",
          onInput: this.handleChange,
          value: this.props.text }));


    } }]);return Editor;}(React.Component);var


Previewer = function (_React$Component3) {_inherits(Previewer, _React$Component3);
  function Previewer(props) {_classCallCheck(this, Previewer);return _possibleConstructorReturn(this, (Previewer.__proto__ || Object.getPrototypeOf(Previewer)).call(this,
    props));
  }_createClass(Previewer, [{ key: "render", value: function render()

    {
      return (
        React.createElement("div", { id: "preview", dangerouslySetInnerHTML: convertToMarkdown(this.props.text) }));


    } }]);return Previewer;}(React.Component);


var mapStateToProps = function mapStateToProps(state) {
  return _extends({}, state);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleChange: function handleChange(text) {
      dispatch(doPreview(text));
    } };

};

var Container = connect(
mapStateToProps,
mapDispatchToProps)(
AppWrapper);

ReactDOM.render(
React.createElement(Provider, { store: store },
  React.createElement(Container, null)),

document.getElementById("root"));