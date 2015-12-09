var React = require("react");

var DestroyButton = React.createClass({
  handleDestroy: function(){

  },

  render: function(){
    return(
      <button onClick={this.handleDestroy} id={this.props.id}>Delete</button>
    )

  }
})



module.exports = DestroyButton
