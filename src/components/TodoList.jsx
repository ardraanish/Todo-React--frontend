// TodoList.js
import React, { useContext, useState, useEffect } from 'react';
import TodosContext from '../components/TodoContext';
import { Link } from 'react-router-dom';

function TodoList({ type }) {
  const { todos } = useContext(TodosContext);
  const [filteredTodoList, setFilteredTodoList] = useState([]);

  useEffect(() => {
    
    const todoList = todos.filter(todo => {
      if (type === "pending") return todo.status === "pending";
      if (type === "connect") return todo.status === "connect";
      if (type === "onprogress") return todo.status === "onprogress";
      return true; 
    });
    setFilteredTodoList(todoList);
  }, [type, todos]);

  return (
    <div className="sec">
      <div className="tasks" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', padding: '15px' }}>
        {filteredTodoList.length > 0 ? (
          filteredTodoList.map(todo => (
            <div className="task_item" key={todo._id}>
              <h2 className="para">{todo.title}</h2>
              <p className="para">{todo.description}</p>
              <span>Status: {todo.status}</span>
              <Link to={`/view/${todo._id}`}>
                <button>View</button>
              </Link>
            </div>
          ))
        ) : (
          <p>No {type} todos available.</p>
        )}
      </div>
    </div>
  );
}

export default TodoList;
