import { useState } from 'react'
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import FormLogIn from './components/FormLogIn'
import FormCreateAccount from './components/FormCreateAccount'
import './App.css'
import Interface from './components/Interface';

function App() {
// userVerify = Estado que vai sempre alternar entre componentes de login ou criação de conta
  const [userVerify,setUserVerify] = useState(false)
//Função que vai mostrar ao APP se o usuário tem uma conta ou não. se tiver o valor do estado será setado com true, caso contrário false
  function userVerifing(value: boolean | ((prevState: boolean) => boolean)){
    setUserVerify(value)
  }


  return (
    <div className="App">
      {userVerify == false && <FormCreateAccount userVerifing={userVerifing}/>}
      {userVerify == true && <FormLogIn userVerifing={userVerifing}/>}
    </div>
  )
}

export default App
