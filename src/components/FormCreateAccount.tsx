import React, { useState } from 'react'
//Biblioteca de notificações
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//CSS
import styles from '../ModuleCss/Form.module.css'
//Importações de componentes
import FormLogIn from './FormLogIn';

interface Props {
  userVerifing: (value: boolean) => void
}

const FormCreateAccount : React.FC<Props> = ({ userVerifing }) => { 

const notify = () => toast.success("Cadastro realizado ! Indo para Login...")
const notifyRedirection = () => toast.warn("Redirecionado para login ...")

//Estado que armazena dados do cliente para eferuar o cadastro
const [formValues,setFormValues] = useState({
    usuario : '',
    email :  '',
    senha : ''
})

//Funções

// handleInputChange =  altera o valor usuario, email e senha ao preencher o formulário
function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
}
// handleSubmit = lida com a submissão do formlário
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  
  notify()
  console.log(formValues)
  
  setFormValues({
    usuario : '',
    email :  '',
    senha : ''
  })

  setTimeout(() =>{notifyRedirection()},1000)

  setTimeout(() => {
    userVerifing(true)
  }, 3000)
}


  return (
    <div className={styles['create-account']}>
    <ToastContainer/>
    <h2>Crie sua conta</h2>
    <form
    onSubmit={handleSubmit}
    className={styles['form']}>
        <label className={styles['label']}>
            Usuário: 
            <input 
            type="text"
            name='usuario'
            required
            value={formValues.usuario}
            placeholder='Digite seu nome...'
            onChange={handleInputChange}
            />
        </label>
        <label>
            Email:
            <input 
            type="email" 
            name='email'
            required
            value={formValues.email}
            placeholder='Digite seu email...'
            onChange={handleInputChange}/>
        </label>
        <label>
            Senha:
            <input 
            type="password" 
            name='senha'
            required
            value={formValues.senha}
            onChange={handleInputChange}/>
        </label>
        <button type='submit'>Criar conta</button>
    </form>
    <p>Já possui uma conta ? <button onClick={() => userVerifing(true)}>Entre aqui</button></p>
    </div>
  )
}

export default FormCreateAccount