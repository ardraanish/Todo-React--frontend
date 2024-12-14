import React, { useContext } from 'react';
import TodosContext from '../components/TodoContext';
import './style.css'
import {Link} from 'react-router-dom'
import TodoList from './TodoList';


function Pending() {
    const { todos } = useContext(TodosContext);
    

    const pendingTodos = todos.filter(todo => todo.status === "pending");
    

    return (
        <>
                    <h2>Pending Todos</h2>
            {/* {pendingTodos.length > 0 ? ( 
                <div className='tasks'>
                    
                    {pendingTodos.map(todo => ( 
                        <div className='task_item' key={todo._id}> 
                        
                            <h3 className='para'>{todo.title}</h3>
                            <p  className='para'>{todo.description}</p>
                            <span>status: {todo.status}</span>
                            <Link to={`/view/${todo._id}`}>
                    <button>view</button>
                    </Link>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No pending todos available.</p>
            )} */}

            <TodoList type="pending" />
        </>
    );
}

export default Pending;
