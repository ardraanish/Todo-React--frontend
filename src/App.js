import React from 'react'
// import Home from './components/Home'
import { TodoContext } from './components/TodoContext'
import LayoutsRoutes from './LayoutRoutes/LayoutsRoutes'


function App() {
  return (
    <div>
      <TodoContext>
        <LayoutsRoutes/>
      {/* <Home/> */}
      </TodoContext>
    </div>
  )
}

export default App