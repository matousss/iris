import React, { useState } from 'react'

export default function NewLogin({setUser}) {
    const [usernameField, setUsernameField] = useState('')
    const [passwordField, setPasswordField] = useState('')
    const [errorVisible, setErrorVisible] = useState(false)

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
        } else {
            setErrorVisible(true)
        }
    }

    return (
        <div className='new-login h-screen w-screen flex justify-center items-center'>
            <div className='form-container w-full md:w-2/3 lg:w-1/2 h-5/6 md:h-3/4 m-6 rounded-lg flex flex-col items-center'>
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
                    {errorVisible &&
                        <span className='font-semibold text-xs text-red-700'>incorrect username or password</span>
                    }
                    <button className='mt-3 p-1 rounded-lg bg-orange-500 hover:bg-rose-500'>log in</button>
                </form>
            </div>
        </div>
    )
}
