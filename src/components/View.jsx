import React, { useContext,useState } from 'react';
import { useParams,useNavigate,Link} from 'react-router-dom';
import TodosContext from '../components/TodoContext';
import TodoModal from '../components/TodoModal';
import axios from 'axios'
import { FaArrowLeft } from 'react-icons/fa';

import './style.css'

function View() {
  const { id } = useParams(); 
  const { todos,setTodos} = useContext(TodosContext);
  const [open, setOpen] =useState(false)
  const [selectedTodo, setSelectedTodo] = useState(null);

   const navigate =useNavigate()
  const todo = todos.find((todo) => todo._id === id);

 
 const handleEdit = ()=>{
    setSelectedTodo(todo)
    setOpen(true)
  }
  const handleClose = () => {
    setSelectedTodo(null); 
    setOpen(false);
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/view/${id}`);
      
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
      navigate('/')
    } catch (error) {
      console.log('Error deleting todo:', error);
    }
  };


  return (
    < div className='table'>
    {todo ?(
         <div className='task_item id'>
            <div className="backBtn" style={{   width: '100%' }}>
        <Link to='/'>
         <button >
        <FaArrowLeft  />
     
      </button>
        </Link>
            </div>
         <h2>{todo.title}</h2>
         <p>{todo.description}</p>
         <span>status:{todo.status}</span>
         <div className='btn'>
         <button onClick={handleEdit}>edit</button>
         <button onClick={()=>handleDelete(todo._id)}>delete</button>
         </div>
         <TodoModal open={open} handleClose={handleClose} todo={selectedTodo} />
       </div>
    ):(
        <p>Not Found.</p>
    )}
   
    </div>
    
  );
}

export default View;
