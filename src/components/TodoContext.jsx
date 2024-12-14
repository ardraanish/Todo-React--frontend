import React,{createContext,useState,useEffect} from 'react'
import axios from 'axios'

// import { useNavigate } from 'react-router-dom';
const TodosContext = createContext();


export function TodoContext({children}) {
    const [todos, setTodos]= useState([])
    const [editTodo, setEdit] = useState() 
    const [deleteTodo, setDelete] = useState()
    // const navigate = useNavigate();
    const fetchData = async ()=>{
        try {
            const response = await axios.get('http://localhost:5001/todo')
            setTodos(response.data)
            console.log("tofos",todos);
            
        } catch (error) {
            console.error(error)
        }
    }
  

    useEffect(()=>{
        fetchData()
    },[])



  return (
    <TodosContext.Provider 
    value = {{todos, setTodos, editTodo, setEdit, deleteTodo, setDelete, fetchData}}
    >
        {children}
    </TodosContext.Provider>
  )
}

export default TodosContext;