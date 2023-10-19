import './App.css';

import { useState } from 'react';

export default function App() {
  const [todoItem, setTodoItem] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setList([...list, e.target.todoItem.value]);
    setTodoItem('');
  };

  const handleDelete = (item) => {
    let newList = list.filter((li) => li !== item);
    setList(newList);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Add your task'
          name='todoItem'
          value={todoItem}
          onChange={(e) => setTodoItem(e.target.value)}
        />
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
      {list.length > 0 && (
        <ul>
          {list.map((item, i) => {
            return (
              <div key={i}>
                <li>
                  <span>{item}</span>
                  <button onClick={() => handleDelete(item)}>Delete</button>
                </li>
              </div>
            );
          })}
        </ul>
      )}
    </div>
  );
}
