import React from 'react'
//Toastfy
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
//CSS
import styles from '../ModuleCss/Form.module.css'

interface Props {
  userVerifing : (value: boolean) => void
}


const FormLogIn : React.FC<Props> = ({userVerifing}) => {
  //Mensagens de erro ou sucesso
  const errorNotify = () => toast.error("Login não encontrado")
  const succeedNotify = () => toast.success("Login não encontrado")

  return (
    <div className={styles['login-account']}>
    <ToastContainer/>
    <h2>Faça o seu Login</h2>
    <form className={styles['form']}>
        <label className={styles['label']}>
            Email:
            <input type="email" name='email'/>
        </label>
        <label>
            Senha:
            <input type="password" name='password'/>
        </label>
        <button type='submit'>Entrar</button>
    </form>
    <p>Não possui uma conta ? <button onClick={() => userVerifing(false)}>Criar conta</button></p>
    </div>
  )
}

export default FormLogIn