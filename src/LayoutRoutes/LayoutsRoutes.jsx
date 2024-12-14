import React from 'react'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from '../components/Home'
import View from '../components/View'
import Header from '../components/Header'
import Pending from '../components/Pending'
import Complete from '../components/Complete'
import OnProgress from '../components/OnProgress'
import ErrorPage from './ErrorPage'


function LayoutsRoutes() {
  return (
    <Router>
        <Header/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/view/:id' element={<View/>}/>
            <Route path='/pending' element={<Pending/>}/>
            <Route path='/complete' element={<Complete/>}/>
            <Route path='/onprogress' element={<OnProgress/>}/>
            <Route path='*' element={<ErrorPage/>}/>

        </Routes>
    </Router>
  )
}

export default LayoutsRoutes