var React = require('react');

var ListItem = require('./ListItem.jsx');

var _list = {
    render: function() {

        var createItem = function(text, index) {
            return <ListItem key={index + text} text={text}/>;
        };

        return (
            <ul >{this.props.items.map(createItem)}</ul>
        )
    }

};
var List = React.createClass(_list);

module.exports = List;
