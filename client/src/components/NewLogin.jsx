import React, { useState,  } from 'react'

export default function NewLogin() {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData()
        data.append("username", username)
        data.append("password", password)
        fetch('http://127.0.0.1:8000/api/auth/login', {
            method: 'POST',
            body: data
        })
            .then(response => response.json())
            .then(data => console.log(data))

    }

    return (
        <div className='new-login h-screen w-screen flex justify-center items-center'>
            <div className='form-container w-1/2 h-3/4 rounded-lg flex flex-col items-center'>
                <h1 className='text-black text-6xl mb-4'>Welcome to Iris</h1>
                <form className='flex flex-col w-2/5' onSubmit={handleSubmit}>
                    <label className='my-1'>username</label>
                    <input
                        className='bg-white outline-1 outline-gray-300 text-xs text-gray-700 p-1 my-1 rounded-lg'
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label className='my-1'>password</label>
                    <input
                        className='bg-white outline-1 outline-gray-300 text-xs text-gray-700 p-1 my-1 rounded-lg'
                        type="text"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='bg-red-400 hover:bg-red-600'>log in</button>
                </form>
            </div>
        </div>
    )
}
