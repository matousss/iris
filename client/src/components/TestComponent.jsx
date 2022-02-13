import React, {useState} from 'react'

export default function 
TestComponent() {
  const[username, setUsername] = useState() 
  const[password, setPassword] = useState() 

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
    <div>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <label>username</label>
            <input
                className='bg-white' 
                type="text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <label>password</label>
            <input
                className='bg-white' 
                type="text"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button className='bg-red-400 hover:bg-red-600'>log in</button>
        </form>
    </div>
  )
}
