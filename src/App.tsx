import React, {useState} from 'react';

import {Header} from "./Components/layout/Header";
import {Map} from "./Components/Map/Map";
import {SearchContext} from "./Components/contexts/search.context";
import {Route, Routes} from "react-router-dom";
import {AddForm} from "./Components/AddForm/AddForm";


export const App = () => {
    const [search, setSearch] = useState('');

    return (
        <SearchContext.Provider value={{search, setSearch}}>
            <Header/>
            <Routes>
                <Route path='/' element={<Map/>}/>
                <Route path='/add' element={<AddForm/>}/>
            </Routes>
        </SearchContext.Provider>
    )
};


