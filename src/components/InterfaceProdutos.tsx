import React from 'react'

import {Link} from 'react-router-dom'

import { AiOutlineSearch , AiFillEdit} from "react-icons/ai";
//CSS
import styles from '../ModuleCss/Interface.module.css'
import styleProdutos from '../ModuleCss/InterfaceProdutos.module.css'
const InterfaceProdutos = () => {
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
          {/*<div id={styles['result']}>
            <input type="text"
              placeholder='pesquise algum produto'
            />
            <button id={styles['icons']}><AiOutlineSearch /></button>
          </div>*/}
          <div id={styles["interface"]}>
            <div id="title"><h1>Produtos</h1></div>
            <div id={styleProdutos["content-cards"]}>
              <div className={styleProdutos["card-produtos"]}>
                  <div className={styleProdutos["section1-card"]}>
                    <span>
                      <p className={styleProdutos['nome']}>Nome</p>
                      <p>Vinho Branco</p>
                    </span>
                    <span>
                      <p className={styleProdutos['marca']}>Marca</p>
                      <p>Italiano</p>
                    </span>
                  </div>
                  <div className={styleProdutos["section2-card"]}>
                    <div className={styleProdutos["informations"]}>
                      <span><p>Unidades</p><p>20 </p></span>
                      <span><p>P / Custo</p><p>80,00 R$</p></span>
                      <span><p>P / Venda</p><p>300,00 R$</p></span>
                      <span><p>Validade</p><p>20/05/2029</p></span>
                    </div>
                    <div className={styleProdutos["icons"]}>
                      <AiFillEdit/>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>  
        </div>
      )
}

export default InterfaceProdutos