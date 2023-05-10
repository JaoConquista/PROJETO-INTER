import { useEffect, useState } from 'react'

import AddProduct from './pageAddProduct'
import SideBar from './StructurePage/sideBar'
import { getProducts, postProduct } from '../services/ProductService'
import { Product } from '../interfaces/Products'

import { errorNotify, successNotify } from '../utils/toast'
import { AiFillEdit, AiOutlineSearch } from "react-icons/ai"
import {BsPlusLg} from 'react-icons/bs'
import {GiTerror} from 'react-icons/gi'

import styles from '../ModuleCss/Interface.module.css'
import styleProdutos from '../ModuleCss/InterfaceProdutos.module.css'



const InterfaceProdutos = () => {

  const [searchInput, setSearchInput] = useState('')

  const [items, setItems] = useState<Product[]>([])

  const [showAddForm, setShowAddForm] = useState(false) 

  const filteredProducts = searchInput.length > 0 ? 
      items.filter(items => items.produto.includes(searchInput))
      : []

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await getProducts();

    setItems(data)
  }

  const createProduct = async (product: Product) => {

    try {
      const response = await postProduct(product)
      successNotify()
    } catch {
      errorNotify()
    }
  }

  const handleSubmit = async (product: Product) => {
    await createProduct(product)
    await fetchData()
    setShowAddForm(false)
  }

  return (
    <div className={styles['main']}>
      <div className="section1">
        
        <SideBar />

      </div>
      {showAddForm === false && <div className={styleProdutos["section2"]}>
        <div id={styles["interface"]}>
          <div id="title"><h1>Produtos</h1></div>
          <div id={styleProdutos["header-add-products"]}>
            <div id={styleProdutos["search-content"]}>
              <input 
              type="text" 
              placeholder='Buscar ...' 
              value={searchInput}
              onChange={ e => setSearchInput(e.target.value)}/>
            </div>
            <div>
              <button id={styleProdutos["add-btn"]} onClick={() => setShowAddForm(true)}><BsPlusLg/></button>
            </div>
          </div>
          <div id={styleProdutos["content-cards"]}>
            {searchInput.length > 0 ? (
              filteredProducts.map((product, index) => (
                <div className={styleProdutos["card-produtos"]} key={index}>
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
                        <AiFillEdit />
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ):(
              items.length > 0 ? (
                items.map((product, index) => (
                              <div className={styleProdutos["card-produtos"]} key={index}>
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
                                      <AiFillEdit />
                                    </div>
                                  </div>
                                </div>
                              </div>
                ))
              ):(
                <div id={styleProdutos['No-Data']}>
                  <p>Que tal adicionar algo ?</p>
                  <div id={styleProdutos["icon-no-found"]}>
                    <GiTerror/>
                  </div>
                </div>
              ))}              
              
          </div>
        </div>
      </div>}
      {/**Trocar o nome de add */}
      {showAddForm &&
        <div id={styleProdutos["Add-Products"]}>
          <AddProduct onClose={() => setShowAddForm(false)} onSubmit={handleSubmit} />
        </div>}
    </div>
  )
}

export default InterfaceProdutos