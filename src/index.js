import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './style/global.scss'
import { BrowserRouter, Route } from 'react-router-dom'  
import Home from './route/Home'



render(<App />, document.getElementById('root'))
