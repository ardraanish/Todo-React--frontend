// import Header from './Header'
import {Button} from "@mui/material"

import React, { useState } from 'react'
import TodoModal from './TodoModal'
import TodoList from './TodoList'

function Home() {
    const [open, setOpen] =useState(false)

    const handleOpen = ()=> setOpen(true)
    const handleClose = ()=> setOpen(false)

  return (
    <div>  
        {/* <Header/> */}
        
        <TodoModal  open={open} handleClose={handleClose} handleOpen={handleOpen}/>
        <TodoList />
        <div className="headerBtn">

        <Button onClick={handleOpen}>
            create
        </Button>
        </div>
    </div>
  )
}

export default Home