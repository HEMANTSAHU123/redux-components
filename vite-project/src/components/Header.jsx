import React from 'react'
import {useDispatch,useSelector } from 'react-redux'
import { authactions } from '../store/auth'
const Header = () => {
  const dispatch=useDispatch()
  const isauth=useSelector(state=>state.auth.isAuthenticated)
  const logouthandler=()=>{
dispatch(authactions.logout())
  }
  
  return (
    <div>
      <h1>Redux Auth</h1>
    {isauth &&(<nav>
        <ul>
          <li>
            <a href="/">my product</a>
          </li>
          <li>
            <a href="/">my sales</a>
          </li>
          <li>
            <button onClick={logouthandler}>logout</button>
          </li>
        </ul>
      </nav>
)}
    </div>
  )
}

export default Header
