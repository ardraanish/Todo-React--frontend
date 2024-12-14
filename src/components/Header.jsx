import React from 'react'
import {Link} from 'react-router-dom'

function header() {

  return (
    <div className='header' style={{display: 'flex',alignItems:'center',justifyContent:'space-between',background:'black',padding:'10px 20px'}}>
        <h1 className="logo" style={{color:'white'}}>Todo App</h1>
        <ul style={{display:'flex',gap:'15px'}}>
        <Link to="/">
            <li style={{listStyle:'none',color:'white',fontSize:'16px',fontWeight:'700'}}>Home</li>
            </Link>
            <Link to='/complete'>
            <li style={{listStyle:'none',color:'white',fontSize:'16px',fontWeight:'700'}}>complete</li>
            </Link>
            <Link to="/pending">
            <li style={{listStyle:'none',color:'white',fontSize:'16px',fontWeight:'700'}}>pending</li>
            </Link>
            <Link to="/onprogress">
            <li style={{listStyle:'none',color:'white',fontSize:'16px',fontWeight:'700'}}>on-progress</li>
            </Link>
        </ul>
        <div className="signin" style={{display:'flex', gap:'15px'}}>
            <button className='btn' style={{padding:'15px 20px', color:'white', border:'none', borderRadius:'5px', fontSize:'14px', fontWeight:'700', background:'turquoise'}}>sign-up</button>
            <button className='btn' style={{padding:'15px 20px', color:'white', border:'none', borderRadius:'5px', fontSize:'14px', fontWeight:'700', background:'turquoise'}}>sign-in</button>
        </div>
    </div>
  )
}

export default header;


