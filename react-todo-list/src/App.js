import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

const toDoList = ['Grocery Shopping', 'laundry', 'rake leaves', 'eat', 'sleep'];
const listName = 'Jantzen\'s To Do List!';

function App() {
  return (
    <div className="App">
      <ToDoList list={toDoList} name={listName} />
    </div>
  );
}

export default App;
