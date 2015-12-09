var React = require('react'),
    ReactDOM = require('react-dom'),
    ToDoList = require('./components/todo_list');

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(<ToDoList/>, document.getElementById('root'));
});

window.TodoStore = require('./stores/todo_store');
