import React, { useEffect, useState } from 'react'
//Biblioteca de notificações
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//CSS
import styles from '../ModuleCss/Form.module.css'
//Importações de componentes
import FormLogIn from './FormLogIn';
//Link de direcionamento para outra página pelo reat router
import { Link } from 'react-router-dom'
import { useNavigate} from "react-router-dom";

const FormCreateAccount = () => { 
//Notificação de sucesso
const successNotify = () => toast.success('Sucesso ! fazendo login...');
//Navegação entre as rotas usando o hook useNavigate
const navigate = useNavigate()

//Estado que armazena dados do cliente para eferuar o cadastro
const [formValues,setFormValues] = useState({
    usuario : '',
    email :  '',
    senha : ''
})
const [redirect,setRedirect] = useState(false)
//Funções

// handleInputChange =  altera o valor usuario, email e senha ao preencher o formulário
function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
}
// handleSubmit = lida com a submissão do formlário
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault()
  
  
  console.log(formValues)
  
  setFormValues({
    usuario : '',
    email :  '',
    senha : ''
  })

  successNotify()
  //mudando de rota automaticamente
  setTimeout( () => {navigate('/login')},2000)
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
            autoComplete='none'
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
        <button className={styles['form-btn']} type='submit'>Criar conta</button>
    </form>
    <p>Já possui uma conta ? <Link to='/login'>Entre aqui</Link></p>
    </div>
  )

}

export default FormCreateAccount