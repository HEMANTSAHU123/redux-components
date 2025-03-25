import React, { Fragment } from 'react'
import Counter from './components/Counter'
import Header from './components/Header'
import { useSelector } from 'react-redux'
import Auth from './components/Auth'
import UserProfile from './components/UserProfile'

const App = () => {
  const isauth=useSelector(state=>state.auth.isAuthenticated)
  return (
    <Fragment>
      <Counter/>
      <Header/>
     { !isauth && <Auth/>}
    { !isauth && <UserProfile/>}
    </Fragment>
  )
}

export default App
