/* 
name username log in 

log in feature 
email password required 
if not that then ask to sign up below the box
sign up requires name, email, password, username
*/
'use client'
import React, { useState } from 'react';

import "./LoginC.css";
import Link from 'next/link';

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');


    return(
        <div className = "beginning">

            
            <h1>Login</h1>
            <form>
                <div className= "username">
                    <label>Username:</label>
                    <input 
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                <div className="email">
                    <label>Email: </label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="password">
                    <label>Password: </label>
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className='login'>
                    <button type="submit">Log In</button>
                </div>
                
            </form>



            No Account? Sign up <Link href="/Signup">here</Link>

        </div>
    );
}

//export default Login