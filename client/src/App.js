import './App.css';
import Login from './components/Login/Login'
import MainPage from './components/MainPage/MainPage'
import * as Page from './utils/PageEnum'
import MenuContainer from "./components/MenuContainer";
import NewLogin from './components/NewLogin'
import Signup from "./components/Signup";
import Verify from './components/Verify'
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
            case Page.verify:
                return <Verify/>
        }
    }
    return (
        page !== Page.main ? <MenuContainer component={selectComponent(page)}/> : <MainPage/>
    );
}

export default App;
