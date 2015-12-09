var _todos = [];
var _callbacks = [];

var TodoStore = {
  changed: function() {
    _callbacks.forEach( function(cb) {
      cb();
    })
  },

  addChangedHandler: function(cb) {
    _callbacks.push(cb);
  },

  removeChangedHandler: function(cb) {
    var idx;

    // equivalent to Array#indexOf
    for(var i = 0; i < _callbacks.length; i++) {
      if (cb === _callbacks[i]) {
        idx = i;
        break;
      }
    }

    if(!idx) { return; }

    _callbacks.splice(idx, 1);
  },

  all: function() {
    return _todos;
  },

  fetch: function() {
    $.get('/api/todos/', {}, function(todos) {
      _todos = todos;
      TodoStore.changed();
    });
  },

  create: function(data) {
    $.post('api/todos', {todo: data}, function(todo) {
      _todos.push(todo);
      TodoStore.changed();
    })
  },

  destroy: function(id) {
    var ident = TodoStore.find(id);

    if (typeof ident === "undefined"){
      return;
    }

    $.ajax({
      url: 'api/todos/' + id,
      type: 'DELETE',
      success: function(result){
        var idx;
        for (var i=0; i < _todos.length; i++){
          if (_todos[i] === result){
            _todos.splice(i, 1);
            break;
          }
        }
      }
    });

    TodoStore.changed();
  },

  find: function(id) {
    var idx;

    for(var i = 0; i < _todos.length; i++) {
      if(_todos[i].id === id) {
        idx = i;
        break;
      }
    }
    return idx;
  },

  toggleDone: function(id) {
    var idx = TodoStore.find(id);
    var todo = _todos[idx];
    var status = (todo.done === true ? false : true);

    $.ajax({
      url: '/api/todos/' + id,
      data: {todo: {done: status}},
      type: "PATCH",
      success: function(result){
        console.log("Success");
      }
    });
    TodoStore.changed();
  },

  render: function() {

  }
}

module.exports = TodoStore;
