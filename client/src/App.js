import './App.css';
import * as Page from './utils/PageEnum'
import MenuContainer from "./components/MenuContainer";
import NewLogin from './components/NewLogin'
import Signup from "./components/Signup";
import Verify from './components/Verify'
import NewMain from "./components/NewMain";

import React, {useState} from 'react'

function App() {
    const [user, setUser] = useState(null)
    const [page, setPage] = useState(Page.login)
    const selectComponent = (page) => {
        switch (page) {
            case Page.login:
                return <NewLogin setUser={setUser} setPage={setPage}/>
            case Page.signup:
                return <Signup setUser={setUser} setPage={setPage}/>
            case Page.verify:
                return <Verify setUser={setUser} setPage={setPage}/>
        }
    }
    return (
        page !== Page.main ? <MenuContainer component={selectComponent(page)}/> : <NewMain user={user} setUser={setUser}/>
    );
}

export default App;
