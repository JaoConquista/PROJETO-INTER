import { useState } from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//componentes
import FormLogIn from './components/FormLogIn'
import FormCreateAccount from './components/FormCreateAccount'
import Interface from './components/Interface';
//importando o React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'
//CSS
import './App.css'


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormCreateAccount/>}/>
          <Route path='/login' element={<FormLogIn/>}/>
          <Route path='/principal' element={<Interface/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
