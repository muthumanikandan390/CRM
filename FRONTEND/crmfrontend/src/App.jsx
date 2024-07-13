import { useState } from 'react'
import PrimaryButton from './components/PrimaryButton'
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import "./index.css"



function App() {


  return (

    <Router>

      <Routes>
      <PrimaryButton />
      </Routes>

    </Router>


  )
}

export default App
