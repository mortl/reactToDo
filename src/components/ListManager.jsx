var React = require('react');


var List = require('./List.jsx');


var _listManager = {

      getInitialState:function(){
          return {
            items:[],
            newItemText:''
          };
      },
      handleSubmit: function(elm){
        elm.preventDefault();


        var currItems = this.state.items;

        currItems.push(this.state.newItemText);

        this.setState({items:currItems, newItemText:''});



      },
      onChange:function(e){
          this.setState({newItemText:e.target.value});
      },

      render: function(){

          var divStyle ={
            marginTop:10
          };

          var headingStyle = {

          };


          if(this.props.headingColor) {
            headingStyle.background = this.props.headingColor;
          }

        return (
            <div style={divStyle} className="col-sm-4">

               <div className="panel panel-primary">
                  <div style={headingStyle} className="panel-heading">
                      <h3>{this.props.title}</h3>
                  </div>

                  <div className=" row panel-body">
                    <form onSubmit={this.handleSubmit} className>
                      <div className="col-sm-9">
                        <input onChange={this.onChange} value={this.state.newItemText} className="form-control"/>
                      </div>
                      <div className="col-sm-2">
                        <button className="btn btn-primary">Add </button>
                      </div>
                    </form>

                    <List items={this.state.items}/>
                  </div>
                </div>
            </div>
        )
      }

};

var ListManager = React.createClass(_listManager);



module.exports = ListManager;
//this.props = read only
//this.state = mutable = can change.

// React knows what do with the "this" statments.
