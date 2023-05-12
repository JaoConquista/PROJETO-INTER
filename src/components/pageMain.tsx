import React, { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
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
          ))} <FiUser />
        </div>
        <div id={style["interface"]}>
          <h1>Principal</h1>
          <div>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
        </div>
        </div>
      </div>


    </div>
  )
}

export default Interface