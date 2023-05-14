import React, { useEffect } from 'react'
import { useState } from 'react'
import { FiUser } from "react-icons/fi";
import style from '../ModuleCss/Interface.module.css'
import SideBar from './pages/sideBar';
import { getAccount } from '../services/AccountService';
import { Account } from '../interfaces/Account';


const Interface = () => {

  const [userName, setUserName] = useState<Account[]>([])

  useEffect(() => {
    filterData()
  }, [])

  const filterData = async () => {
    const user = await getAccount()

    const userId = 1

    const filterUser = user.filter(data => data.id === userId)

    setUserName(filterUser)
  }

  return (
    <div className={style['main']}>
      <div className="section1">

        <SideBar />

      </div>
      <div className="section2">
        <div className={style['account']}>
          {userName && userName.map((user, index) => (
            <p key={index}>Bem vindo, {user.nome}</p>
          ))} 
          <FiUser />
        </div>
        <div id={style["interface-main"]}>
          <h1>Tenha total controle dos seus produtos ! </h1>
          <div id={style["cards-main"]}>
           <div className={style["card-main"]}>
            <h3>Vendas</h3>
            <p>Veja o número das sua vendas !</p>
           </div>
           <div className={style["card-main"]}>
            <h3>Produtos</h3>
            <p>Adicione, edite ou delete quantos produtos quiser !</p>
           </div>
           <div className={style["card-main"]}>
            <h3>Estoque </h3>
            <p>Veja quantos produtos você possui !</p>
           </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Interface