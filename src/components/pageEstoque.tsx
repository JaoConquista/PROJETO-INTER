import React from 'react'

import { Link } from 'react-router-dom'

import SideBar from './StructurePage/sideBar';

import { AiOutlineSearch } from "react-icons/ai";
//CSS
import styles from '../ModuleCss/Interface.module.css'
import styleEstoque from '../ModuleCss/estoque.module.css'

const InterfaceEstoque = () => (
  //Todo: Retornar quantidade de tipos de produtos e total investido em produtos
  <div className={styles['main']}>
    <div className="section1">

      <SideBar />

    </div>
    <div className="section2">
      <div id={styles["interface"]}>
        <h1>Estoque</h1>
        <div id={styleEstoque['estoque']}>
          <h3>Produtos no seu estoque </h3>
          <h2>0</h2>
        </div>
      </div>
    </div>


  </div>
)

export default InterfaceEstoque