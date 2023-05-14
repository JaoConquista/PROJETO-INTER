import React from 'react'
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import styles from '../ModuleCss/Form.module.css'
import {Link} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';


const FormLogIn = () => {

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
    <p>Não possui uma conta ? <Link to='/'>Crie aqui !</Link></p>
    </div>
  )
}

export default FormLogIn