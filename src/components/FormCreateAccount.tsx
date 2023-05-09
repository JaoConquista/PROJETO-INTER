import React, { useEffect, useState } from 'react'
import axios from 'axios';
import styles from '../ModuleCss/Form.module.css'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { errorNotify, successNotify } from '../utils/toast';
import { createAccount } from '../services/AccountService';
import { Account } from '../interfaces/Account';



const FormCreateAccount = () => {
  
  const navigate = useNavigate()

  const [formValues, setFormValues] = useState<Account>({
    nome: '',
    cpf: '',
    pwd: '',
    endereco: ''
  })

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
      nome: '',
      cpf: '',
      pwd: '',
      endereco: '',
    })
    try {  
      successNotify()

      setLoading(true)
      const response = await createAccount(formValues)
     
      setLoading(false)
      navigate('/login')

    } catch (error) {
      errorNotify()
    }
  }
  //Loading
  const [loading, setLoading] = useState(false)


    return (
      <div className={styles['create-account']}>
        <h2>Crie sua conta</h2>
        <form
          onSubmit={handleSubmit}
          className={styles['form-products']}>
          <label className={styles['label']}>
            Nome:
            <input
              type="text"
              name="nome"
              required
              value={formValues.nome}
              placeholder='Digite seu nome...'
              autoComplete='none'
              onChange={handleInputChange}
            />
          </label>
          <label>
            CPF:
            <input
              type="text"
              name="cpf"
              required
              value={formValues.cpf}
              placeholder='Digite seu email...'
              onChange={handleInputChange} />
          </label>
          <label>
            Senha:
            <input
              type="password"
              name="pwd"
              required
              value={formValues.pwd}
              onChange={handleInputChange} />
          </label>
          <label>
            Endereço:
            <input
              type="text"
              name="endereco"
              required
              value={formValues.endereco}
              onChange={handleInputChange} />
          </label>
          {loading && <button className={styles['form-btn']} disabled type='submit'>Aguarde ...</button>}
          {!loading && <button className={styles['form-btn']} type='submit'>Criar conta</button>}
          
        </form>
        <p>Já possui uma conta ? <Link to='/login'>Entre aqui</Link></p>
      </div>
    )

  }

  export default FormCreateAccount