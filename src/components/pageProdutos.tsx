import { useEffect, useState } from 'react'

import AddProduct from './pageAddProduct'
import SideBar from './StructurePage/sideBar'
import { getProducts, postProduct, deleteProduct } from '../services/ProductService'
import { Product } from '../interfaces/Products'

import { errorNotify, successNotify } from '../utils/toast'
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai"
import {BsPlusLg} from 'react-icons/bs'
import {GiTerror} from 'react-icons/gi'

import styles from '../ModuleCss/Interface.module.css'
import styleProdutos from '../ModuleCss/InterfaceProdutos.module.css'
import ProductCard from './ProductCard'



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

  const switchOffProduct = async (id: number) => {
    await deleteProduct(id)

    await fetchData()
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
              filteredProducts.map((product) => (

                <ProductCard data= { product } onDelete={switchOffProduct}/>
                
              ))
            ):(
              items.length > 0 ? (
                items.map((product) => (

                  <ProductCard data= { product } onDelete={switchOffProduct}/>
                  
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