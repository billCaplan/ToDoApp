var React = require("react");
var TodoStore = require("../stores/todo_store.js");
var ToDoListItem = require("./todo_list_item.jsx");
var ToDoForm = require("./todo_form.jsx");

var ToDoList = React.createClass({
  getInitialState: function() {
    return {store: TodoStore.all()};
  },

  todosChanged: function() {
    this.setState({store: TodoStore.all()});
  },

  componentDidMount: function() {
    TodoStore.addChangedHandler(this.todosChanged);
    TodoStore.fetch();
  },

  componentWillUnmount: function() {
    TodoStore.removeChangedHandler(this.todosChanged);
  },

  render: function() {
    var listItems = this.state.store.map(function(todo) {
      return <ToDoListItem key={todo.id} todo={todo} />;
    });

    return (
      <div>
        { listItems }
        <ToDoForm/>
      </div>
    );
  }
});


module.exports = ToDoList;
