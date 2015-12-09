var React = require("react");
var ToDoStore = require("../stores/todo_store.js");

var ToDoForm = React.createClass({
  getInitialState: function(){
    return {title: "", body: ""};
  },

  updateTitle: function(e){
    this.setState({title: e.target.value});
    // this.state({title: e.target.value});
  },

  updateBody: function(e){
    this.setState({body: e.target.value});
  },

  onTitleChange: function(e){
    this.setState({title: e.target.value})
  },

  onBodyChange: function(e){
    this.setState({body: e.target.value})
  },

  onSubmit: function(params){
    ToDoStore.create(params);
  },

  handleSubmit: function(e){
    e.preventDefault();

    var newItem = {
      title: this.state.title,
      body: this.state.body
    };
    this.onSubmit(newItem);
    
    this.setState({
      title: "",
      body: ""
    })
  },


  render: function() {
    return (
        <div>
          <h3>New To-Do Item: </h3>
          <form onSubmit={this.handleSubmit}>
            Title: <input type="text"
                          onChange={this.onTitleChange}
                          value={this.state.title}/>
            <br/>
            <br/>
            Body: <textarea onChange={this.onBodyChange}
                            value={this.state.body}/>
            <br/>
            <input type="submit" value="Submit To-Do item!"/>
          </form>
        </div>
      )
  }
});


module.exports = ToDoForm;
