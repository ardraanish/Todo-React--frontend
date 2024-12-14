import React, { useContext } from 'react';
import TodosContext from '../components/TodoContext';
import {Link} from 'react-router-dom'
import TodoList from './TodoList';

function Complete() {
    const { todos } = useContext(TodosContext);
    

    const complteTodos = todos.filter(todo => todo.status === "complete");

    return (
        <>
                    <h2>complete Todos</h2>
            {/* {complteTodos.length > 0 ? ( 
                <div className='tasks'>
                    {complteTodos.map(todo => ( 
                        <div className='task_item' key={todo._id}> 
                            <h3  className='para'>{todo.title}</h3>
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
            <TodoList/>
        </>
    );
}

export default Complete;
