import TodosContext from '../components/TodoContext';
import React, { useContext, useEffect, useState } from 'react'
import { Modal, Box, Button, Typography, TextField } from '@mui/material';
// import {useNavigate} from 'react-router-dom'
import axios from 'axios'



const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function TodoModal({open,handleClose,todo}) {
    const { setTodos } = useContext(TodosContext)
    const[title ,setTitle] = useState('')
    const[description, setDescription] = useState('')
    const[status, setStatus] = useState('pending')
    const [errors, setErrors] = useState({});

   useEffect(()=>{
    if(todo){
        setTitle(todo.title)
        setDescription(todo.description)
        setStatus(todo.status)
    }else{
        clearForm()
    }

   },[todo])



    const addData = async ()=>{
        if(!validateForm())return;
        try {
            const response = todo
                ? await axios.put(`http://localhost:5001/view/${todo._id}`, {
                      title,
                      description,
                      status,
                  }) 
                : await axios.post('http://localhost:5001/todo', {
                      title, 
                      description,
                      status,
                  }); 

            if (todo) {
  
                setTodos((prev) =>
                    prev.map((item) =>
                        item._id === todo._id ? response.data : item
                    )
                );    
            } else {

                setTodos((prev) => [...prev, response.data]);
            }

            clearForm();
        } catch (error) {
            console.log(error);
        }
    }
  const clearForm =()=>{
    setTitle('')
    setDescription('')
    setStatus("pending")
    setErrors({})
    handleClose()
  }
  const validateForm = () => {
    let formErrors = {};

    if (!title) formErrors.title = 'Title is required';
    if (!description) formErrors.description = 'Description is required';
    if (!status) formErrors.status = 'Status is required';

    setErrors(formErrors);

    
    return Object.keys(formErrors).length === 0;
  };
  return (
    <div>
         <Modal
            open={open}
            onClose={clearForm}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
        >
            <Box sx={style} component="form">
                <Typography id="modal-title" variant="h6" component="h2">
                    {todo ? 'Edit Todo' : 'Create Todo'}
                </Typography>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Title"
                    variant="outlined"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    error={!!errors.title}
                    helperText={errors.title}
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Description"
                    variant="outlined"
                    name="description"
                    rows={4}
                    multiline
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    error={!!errors.description}
                    helperText={errors.description}
                />
                <div className="select">
                <label htmlFor="status">Status</label>
                <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    required
                >
                    <option value="pending">Pending</option>
                    <option value="complete">Complete</option>
                    <option value="on-progress">On Progress</option>
                </select>
                </div>
                <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={addData}
                >
                    {todo ? 'Update' : 'Submit'}
                </Button>
                <Button
                    type="button"
                    variant="contained"
                    color="secondary"
                    sx={{ mt: 2, ml: 2 }}
                    onClick={clearForm}
                >
                    Cancel
                </Button>
            </Box>
        </Modal>
    </div>
  )
}

export default TodoModal