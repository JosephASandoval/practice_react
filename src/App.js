import React, { Component } from "react";
import TodoItem from "./components/TodoItem";
import todosData from "./data/todosData";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((prevState) => {
      const updatedTodos = prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      return {
        todos: updatedTodos,
      };
    });
  }

  render() {
    let todosComponent = this.state.todos.map((todo) => {
      return (
        <TodoItem key={todo.id} todo={todo} handleChange={this.handleChange} />
      );
    });

    return <div className="todo-list">{todosComponent}</div>;
  }
}

export default App;
