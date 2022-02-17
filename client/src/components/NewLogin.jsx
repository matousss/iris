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
            <div className='form-container w-full md:w-1/2 h-5/6 md:h-3/4 m-6 rounded-lg flex flex-col items-center'>
                <h1 className='text-black text-6xl mb-4 text-center'>Welcome to Iris</h1>
                <form className='flex flex-col w-4/5 md:w-2/5' onSubmit={handleSubmit}>
                    <label className='my-1'>Username</label>
                    <input
                        className='bg-white outline-1 outline-gray-300 text-xs text-gray-700 p-1 mb-1 rounded-lg'
                        type="text"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <label className='mb-1'>Password</label>
                    <input
                        className='bg-white outline-1 outline-gray-300 text-xs text-gray-700 p-1 mb-1 rounded-lg'
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button className='mt-3 p-1 rounded-lg bg-orange-600 hover:bg-rose-600'>log in</button>
                </form>
            </div>
        </div>
    )
}
