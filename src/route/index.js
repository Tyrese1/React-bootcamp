import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './style/global.scss'
import { BrowserRouter } from 'react-router-dom';
import Home from './src/route/Home'


export default () => {

    <BrowserRouter>
    <Route path="/" Component={Home} />
    </BrowserRouter>
}