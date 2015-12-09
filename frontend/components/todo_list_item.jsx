var React = require("react");
var DestroyButton = require("./destroy_button.jsx");


var ToDoListItem = React.createClass({
  render: function() {

    return (
      <div>
          <h2> { this.props.todo.title } </h2>
          <li> { this.props.todo.body } </li>
          <DestroyButton  />
      </div>
    );
  }
});


module.exports = ToDoListItem;
