import React from 'react'

import {Link} from 'react-router-dom'

import { AiOutlineSearch } from "react-icons/ai";
//CSS
import styles from '../ModuleCss/Interface.module.css'

const InterfaceEstoque = () => {
    return (
        <div className={styles['main']}>
            <div className="section1">
        <div id={styles['side-bar']}>

          <button className={styles['content-side-bar']}><Link to='/principal'>Início</Link></button>

          <button className={styles['content-side-bar']}><Link to='/vendas'>Vendas</Link></button>

          <button className={styles['content-side-bar']}><Link to='/produtos'>Produtos</Link></button>

          <button className={styles['content-side-bar']}><Link to='/estoque'>Estoque</Link></button>
        </div>
       </div>
        <div className="section2">
        <div id={styles['result']}>
          <input type="text" 
          placeholder='pesquise algum produto'
          />
          <button id={styles['icons']}><AiOutlineSearch/></button>
          
        </div>
        <div id={styles["interface"]}>
          <h1>Estoque</h1>
        </div>
        </div>
            
            
        </div>
      )
}

export default InterfaceEstoque