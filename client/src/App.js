import './App.css';
import Login from './components/Login/Login'
import MainPage from './components/MainPage/MainPage'
import * as Page from './utils/PageEnum'
import NewLogin from './components/NewLogin'
import Signup from "./components/Signup";
import React, {useState} from 'react'

function App() {
    const [user, setUser] = useState(null)
    const [page, setPage] = useState(Page.login)
    const selectComponent = (page) => {
        switch (page) {
            case Page.login:
                return <NewLogin setUser={setUser} setPage={setPage}/>
            case Page.signup:
                return <Signup/>
            case Page.main:
                console.log('main')
                return <h1>main</h1>
        }
    }
    return (
        selectComponent(page)
    );
}

export default App;
