import React from 'react'
import { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const {setUser} = useContext(UserContext)
    const [username, setusername] =  useState("")
    const [password, setpassword] =  useState("")
    const handlesubmit = (e) => {
        e.preventDefault()
        setUser({username,password})
    }
  return (
    <div>
        <input type="text" placeholder='username' value={username} onChange={(e) => setusername(e.target.value)}  />
        <input type="text" placeholder='password' value={password} onChange={(e) => setpassword(e.target.value)}  />
        <button onClick={handlesubmit}>Sumbit</button>
    </div>
  )
}

export default Login
