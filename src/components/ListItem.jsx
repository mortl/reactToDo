var React = require('react');


var listItem = {
    render:function(){
      return (
        <li >
            <h4> {this.props.text} </h4>
        </li>
      )
    }
};
var ListItem = React.createClass(listItem);



module.exports = ListItem;
