import React, { Component } from 'react';
import TodoList from './components/TodoList';
import ThemeSwitcher from './components/ThemeSwitcher';

class App extends Component {
  render() {
    return (
    <div>
      <ThemeSwitcher />
      <TodoList />
    </div>
      );
  }
}

export default App;
