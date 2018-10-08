import React, { Component } from 'react';
import Todos from './Todos';

class App extends Component {
  state = {
    todos: [
      {id: 1, content: 'Go to the store'},
      {id: 2, content: 'Buy Milk'}
    ]
  }

  deleteTodo = (id) => {
      const todos = this.state.todos.filter( todo => {
        return todo.id !== id
      });
      this.setState({
        todos: todos
      })
  }
  render() {
    return (
      <div className="container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;
