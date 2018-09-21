import React from 'react'
import { render } from 'react-dom'
import App from './App'
import './style/global.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom';



ReactDom.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'))
