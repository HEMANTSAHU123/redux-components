import React from 'react'
import { authactions } from '../store/auth';
import { useDispatch } from 'react-redux'

const Auth = () => {
    const dispatch=useDispatch();
    const loginhandler=(event)=>{
event.preventDefault();
dispatch(authactions.login())

    }
  

  return (
    <div>
      <form onSubmit={loginhandler}>
        <div>        <label htmlFor="">Email</label>
        <input type="text" id='email'/>
        <label htmlFor="">password</label>
<input type="text" id='password'/>
</div>

<button>login</button>
      </form>
    </div>
  )
}

export default Auth
