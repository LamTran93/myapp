import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter, Routes, Route } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import DayTwo from './components/dayTwo'
import DayThree from './components/dayThree'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="homework/day2" element={<DayTwo />}></Route>
                <Route path="homework/day3" element={<DayThree />}></Route>
                <Route path="homework/day4" element={<DayTwo />}></Route>
            </Route>
        </Routes>
    </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
