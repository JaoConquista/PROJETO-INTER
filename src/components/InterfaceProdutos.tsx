import React from 'react'
import {useState, useEffect} from 'react'

//Componentes
import AddProduct from './AddProduct'

//Funções
import { fetchProducts } from '../services/ProductService'
import { productAdded } from '../utils/toast'

import {Link, json} from 'react-router-dom'
//Icones
import { AiOutlineSearch , AiFillEdit} from "react-icons/ai";

//CSS
import styles from '../ModuleCss/Interface.module.css'
import styleProdutos from '../ModuleCss/InterfaceProdutos.module.css'
import { ToastContainer } from 'react-toastify'


const InterfaceProdutos = () => {
  //State que armazena os dados do Banco
  const [items, setItems] = useState([])

  // State que permite o usuário cadastrar novos produtos
  const [add,setAdd] = useState(false)
  // Funções que alteram o valor do state através do botão check ou cancel
  const handleAdd = () => {
    setAdd(true)
  }
  const handleExit = () => {
    setAdd(false)
  }

  //Resgatando dados
  useEffect(() => {
      async function getData(){

        const data = await fetchProducts();

        setItems(data)
        console.log(data)
    }
    getData()
  },[])

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
          {add === false && <div className={styleProdutos["section2"]}>
          {/*<div id={styles['result']}>
            <input type="text"
              placeholder='pesquise algum produto'
            />
            <button id={styles['icons']}><AiOutlineSearch /></button>
          </div>*/}
          <div id={styles["interface"]}>
            <div id="title"><h1>Produtos</h1></div>
            <div id={styleProdutos["header-add-products"]}>
              <div>
                <input type="text" placeholder='pesquise algum produto'/>
                <button id={styleProdutos['search-btn']}><AiOutlineSearch/></button>
              </div>
              <div>
                <button id={styleProdutos["add-btn"]} onClick={handleAdd}>+</button>
              </div>
              </div>
            <div id={styleProdutos["content-cards"]}>
              {items && items.map((product) => (
                <div className={styleProdutos["card-produtos"]} key={product.id}>
                <div className={styleProdutos["section1-card"]}>
                  <span>
                    <p className={styleProdutos['nome']}>Nome</p>
                    <p>{product.produto}</p>
                  </span>
                  <span>
                    <p className={styleProdutos['marca']}>Tipo</p>
                    <p>{product.tipo}</p>
                  </span>
                </div>
                <div className={styleProdutos["section2-card"]}>
                  <div className={styleProdutos["informations"]}>
                    <span><p>Unidades</p><p>{product.qtd} </p></span>                    
                    <span><p>P / Custo</p><p>-</p></span>
                    <span><p>P / Venda</p><p>-</p></span> 
                    <span><p>Vencimento</p><p>{product.data}</p></span>
                  </div>
                  <div className={styleProdutos["control-icons"]}>
                    <div className={styleProdutos["icons"]}>
                      <AiFillEdit/>
                    </div>
                  </div>
                </div>
            </div>
              ))}
            </div>
          </div>
          </div> }
          {add === true && 
          <div id={styleProdutos["Add-Products"]}>
            <AddProduct handleExit = {handleExit} />
          </div> }
        </div>
      )
}

export default InterfaceProdutos