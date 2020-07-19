import React, { Component } from "react";
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import { v4 as uuidv4 } from "uuid";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Take out trash",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Dinner with wife",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Meeting with boss",
        completed: false,
      },
    ],
  };

  // Toggle completed
  markComplete = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  //delete
  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add
  addTodo = (title) => {
    const newTodo = {
      id: uuidv4(),
      title,
      complete: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header style={headerStyle} />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

const headerStyle = {
  backgroundColor: "#333",
  color: "#fff",
  textAlign: "center",
};
export default App;
