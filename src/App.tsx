import React, {useState} from 'react';

import {Header} from "./Components/layout/Header";
import {Map} from "./Components/Map/Map";
import {SearchContext} from "./Components/contexts/search.context";


export const App = () => {
    const [search, setSearch] = useState('');

    return (
            <SearchContext.Provider value={{search ,setSearch}}>
                <Header/>
                <Map/>
            </SearchContext.Provider>
    )
};


