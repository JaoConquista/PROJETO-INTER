import React from 'react'
//Toastfy
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//CSS
import styles from '../ModuleCss/Form.module.css'

import {Link} from 'react-router-dom'

import { useNavigate } from 'react-router-dom';


const FormLogIn = () => {
  //Mensagens de erro ou sucesso
  const errorNotify = () => toast.error("Login não encontrado")
  const succeedNotify = () => toast.success("Login não encontrado")

  const navigate = useNavigate()

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    navigate('/principal')
  }

  return (
    <div className={styles['login-account']}>
    <ToastContainer/>
    <h2>Faça seu Login</h2>
    <form className={styles['form']} onSubmit={handleSubmit}>
        <label className={styles['label']}>
            Email:
            <input type="email" name='email' required/>
        </label>
        <label>
            Senha:
            <input type="password" name='password' required/>
        </label>
        <button className={styles['form-btn']} type='submit'>Entrar</button>
    </form>
    <p>Não possui uma conta ? <Link to='/create-account'>Crie aqui !</Link></p>
    </div>
  )
}

export default FormLogIn