var React = require('react');
var ReactDOM = require('react-dom');

var ListManager = require('./components/ListManager.jsx');


ReactDOM.render(<ListManager title="Ingredients"/>, document.getElementById('ingredients'));
ReactDOM.render(<ListManager title="To Do list" headingColor="purple"/>, document.getElementById('todo'));

ReactDOM.render(<ListManager title="Christmas" headingColor="red"/>, document.getElementById('xmas'));
