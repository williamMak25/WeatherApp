import React, { useState } from 'react'
type AuthuserTy = {
    name: string,
    email: string
}
export const AuthUser = () => {

const [user,setUser] = useState<AuthuserTy | null>(null);

const handleLogin = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        const us = data.find((ite:any)=> ite.id === 1)
        setUser(us)
        console.log(us)
    })
}
const handleLogout = () => {
    setUser(null)
}
  return (
    <div>
        <h1>{user?.name} - {user?.email}</h1>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Log Out</button>
    </div>
  )
}
