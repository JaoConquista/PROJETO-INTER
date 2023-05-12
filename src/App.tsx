import { useState } from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//componentes
import FormLogIn from './components/FormLogIn'
import FormCreateAccount from './components/FormCreateAccount'
import Interface from './components/pageMain';
import InterfaceProdutos from './components/pageProdutos';
import InterfaceVendas from './components/pageVendas';
import InterfaceEstoque from './components/pageEstoque';
//importando o React Router
import {BrowserRouter, Routes, Route} from 'react-router-dom'



function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormCreateAccount/>}/>
          <Route path='/login' element={<FormLogIn/>}/>
          <Route path='/principal' element={<Interface/>}/>
          <Route path='/produtos' element={<InterfaceProdutos/>}/> 
          <Route path='/vendas' element={<InterfaceVendas/>}/> 
          <Route path='/estoque' element={<InterfaceEstoque/>}/> 
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
