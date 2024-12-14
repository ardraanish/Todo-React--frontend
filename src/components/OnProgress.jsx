import React, { useContext } from 'react';
import TodosContext from '../components/TodoContext';
import {Link} from 'react-router-dom'


function OnProgress() {
    const { todos } = useContext(TodosContext);
    

    const Onprogress = todos.filter(todo => todo.status === "on-progress");

    return (
        <>
                    <h2>on-progress Todos</h2>
            {Onprogress.length > 0 ? ( 
                <div  className='tasks'>
                    
                    {Onprogress.map(todo => ( 
                        <div key={todo._id} className='task_item'> 
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
            )}
        </>
    );
}

export default OnProgress;
