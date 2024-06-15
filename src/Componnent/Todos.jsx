import React, { useState } from 'react';
import EditTodo from './EditTodo';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../Redux/action';

function Todos() {
  const [newTitle, setNewTitle] = useState("");
  const dispatch = useDispatch(); 
  const todos = useSelector((state) => state.todos); 

  const handleAddTodo = () => {
    if (newTitle.trim() !== "") {
      dispatch(addTodo(newTitle)); // Fix: Correctly dispatch the action
      setNewTitle("");
    }
  };

  const handleKeyDown = (event) => { 
    if (event.key === 'Enter') {
      handleAddTodo();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div
          className="w-full px-4 py-8 mx-auto shadow rounded-lg lg:w-1/3 bg-white"
          style={{ backgroundColor: "var(--background)" }}
        >
          <div className="flex items-center mb-6">
            <h1 className="mr-3 text-4xl font-bold text-purple-600">
              TO DO APP
            </h1>
          </div>
          <div className="relative">
            <input
              onKeyDown={handleKeyDown} 
              type="text"
              placeholder="What needs to be done today?"
              className="w-full px-2 py-3 border rounded outline-none border-grey-600"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
          </div>
          <ul>
            {todos.map((todo) => ( 
              <EditTodo key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todos;
