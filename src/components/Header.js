import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import logo from './../assets/img/logo.png';

const Header =  () => (
    <AppBar position="sticky">
        <Toolbar>
            <img src={ logo } alt="logo" width="64" heigh="64"></img>
            <h1>Busca Gif</h1>
        </Toolbar>
    </AppBar>
);

Header.displayName = 'Header';
export default Header;
