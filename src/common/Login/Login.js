import React, {useState} from 'react'
import './Login.css'
function Login() {

    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('');
    function handleSubmit(event) {
        event.preventDefault()
        alert("Form Submitted")
        console.log({userName,password})
    }

    return (
        <div id="login-form">
            <h1> Login </h1>
                <form onSubmit={handleSubmit}>
                    <label>Username</label>
                    <input type="text" id="username" name="username" onChange={(e)=>setUserName(e.target.value)}/>
                    <label>Password</label>
                    <input type="password" id="password" name="password" onChange={(e)=>setPassword(e.target.value)}/>
                    <input type="submit" value="submit"/>
                </form>
        </div>
    )
}

export default Login
