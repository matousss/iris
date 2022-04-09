import './App.css';
import * as Page from './utils/PageEnum';
import MenuContainer from "./components/MenuContainer";
import NewLogin from './components/NewLogin';
import Signup from "./components/Signup";
import Verify from './components/Verify';
import NewMain from "./components/NewMain";

import React, {useEffect, useState} from 'react'

function App() {
    const [user, setUser] = useState('');
    const [page, setPage] = useState(Page.login);
    const [stayLoggedIn, setStayLoggedIn] = useState(localStorage.getItem('stayLogged') === 'true');

    useEffect(() => {
        const storedUser = stayLoggedIn ? localStorage.getItem('user') : sessionStorage.getItem('user');

        if (storedUser !== null){
            setUser(JSON.parse(storedUser));
            setPage(Page.main);
        }

    }, [])

    useEffect(() => {
        localStorage.setItem('stayLogged', stayLoggedIn.toString());
        console.log(stayLoggedIn);
        console.log(localStorage);
    }, [stayLoggedIn])

    const selectComponent = (page) => {
        switch (page) {
            case Page.login:
                return <NewLogin setUser={setUser}
                                 setPage={setPage}
                                 stayLoggedIn={stayLoggedIn}
                                 setStayLoggedIn={setStayLoggedIn}/>
            case Page.signup:
                return <Signup setUser={setUser}
                               setPage={setPage}
                               stayLoggedIn={stayLoggedIn}
                               setStayLoggedIn={setStayLoggedIn}/>
            case Page.verify:
                return <Verify setUser={setUser}
                               setPage={setPage}/>
        }
    }

    return (
        page !== Page.main ? <MenuContainer component={selectComponent(page)}/> : <NewMain user={user}
                                                                                           setUser={setUser}
                                                                                           setPage={setPage}
                                                                                           stayLoggedIn={stayLoggedIn}/>
    );
}

export default App;
