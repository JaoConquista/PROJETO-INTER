import React from 'react'

import { Link } from 'react-router-dom'

import SideBar from './StructurePage/sideBar';

import { AiOutlineSearch } from "react-icons/ai";
//CSS
import styles from '../ModuleCss/Interface.module.css'

const InterfaceEstoque = () => (
  <div className={styles['main']}>
    <div className="section1">

      <SideBar />

    </div>
    <div className="section2">
      <div id={styles['result']}>
        <input type="text"
          placeholder='pesquise algum produto' />
        <button id={styles['icons']}><AiOutlineSearch /></button>

      </div>
      <div id={styles["interface"]}>
        <h1>Estoque</h1>
      </div>
    </div>


  </div>
)

export default InterfaceEstoque