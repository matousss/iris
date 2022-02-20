import React, { useState } from 'react'
import * as Page from '../utils/PageEnum'

export default function NewLogin({setUser, setPage}) {
    const [usernameField, setUsernameField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("username", usernameField)
        data.append("password", passwordField)
        fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(data => handleFetch(data))
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
            <h1 className='text-black text-6xl mb-4 text-center'>Welcome to Iris</h1>
            <form className='flex flex-col w-4/5 md:w-2/5' onSubmit={handleSubmit}>
                <label className='my-1'>Username</label>
                <input
                    className='bg-white outline-1 outline-gray-300 text-xs text-gray-700 p-1 mb-1 border-2 rounded-lg'
                    type="text"
                    required
                    value={usernameField}
                    onChange={(e) => setUsernameField(e.target.value)}
                />
                <label className='mb-1'>Password</label>
                <input
                    className='bg-white outline-1 outline-gray-300 text-xs text-gray-700 p-1 mb-1 border-2 rounded-lg'
                    type="password"
                    required
                    value={passwordField}
                    onChange={(e) => setPasswordField(e.target.value)}
                />
                <span className='font-semibold text-xs text-red-700'>{error}</span>
                <button className='mt-3 p-1 rounded-lg bg-orange-500 hover:bg-rose-500'>log in</button>
            </form>
            <button className='mt-4 text-xs underline' onClick={() => setPage(Page.signup)}>Don't have an account yet? Sign up</button>
        </>
    )
}
