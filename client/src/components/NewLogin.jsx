import React, { useState } from 'react'
import * as Page from '../utils/PageEnum'

export default function NewLogin({setUser, setPage}) {
    const [usernameField, setUsernameField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("username", usernameField);
        data.append("password", passwordField);
        fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(data => handleFetch(data));
    }

    const handleFetch = (data) => {
        if (data.result !== 'invalid_user'){
            setUser(data.user)
            setPage(Page.main)
        } else {
            setError('wrong username or password')
        }
    }

    return (
        <>
            <h1 className='text-black text-6xl mb-6 text-center'>Welcome to Iris</h1>
            <form className='flex flex-col w-4/5 md:w-2/5' onSubmit={handleSubmit}>
                <label className='text-xl my-1'>Username</label>
                <input
                    className='bg-white outline-1 outline-gray-300 text-gray-700 text-lg p-1 mb-1 border-2 rounded-lg'
                    type="text"
                    required
                    value={usernameField}
                    onChange={(e) => setUsernameField(e.target.value)}
                />
                <label className='text-xl mb-1'>Password</label>
                <input
                    className='bg-white outline-1 outline-gray-300 text-gray-700 text-lg p-1 mb-1 border-2 rounded-lg'
                    type="password"
                    required
                    value={passwordField}
                    onChange={(e) => setPasswordField(e.target.value)}
                />
                <span className='font-semibold text-sm text-red-700'>{error}</span>
                <button className='text-xl mt-3 p-1 rounded-lg bg-orange-500 hover:bg-rose-500'>log in</button>
            </form>
            <button className='mt-6 text-lg underline' onClick={() => setPage(Page.signup)}>Don't have an account yet? Sign up</button>
        </>
    )
}
