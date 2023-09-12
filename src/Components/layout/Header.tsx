import React from "react";
import './Header.css';
import {Btn} from "../common/Btn";

export const Header = () => (
    <header>
        <h1><strong>Mega</strong> Ogłosszenia</h1>
        <Btn text='Dodaj ogloszenie'/>
        <div className="search">
            <input type="text"/>  <Btn text='Szukaj'/>
        </div>
    </header>
)