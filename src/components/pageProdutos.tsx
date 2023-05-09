import { useEffect, useState } from 'react'

import AddProduct from './pageAddProduct'
import SideBar from './StructurePage/sideBar'
import { getProducts, postProduct } from '../services/ProductService'
import { Product } from '../interfaces/Products'

import { errorNotify, successNotify } from '../utils/toast'
import { AiFillEdit, AiOutlineSearch } from "react-icons/ai"
import styles from '../ModuleCss/Interface.module.css'
import styleProdutos from '../ModuleCss/InterfaceProdutos.module.css'


const InterfaceProdutos = () => {

  const [items, setItems] = useState<Product[]>([])

  const [showAddForm, setShowAddForm] = useState(false)

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
            <div>
              <input type="text" placeholder='pesquise algum produto' />
              <button id={styleProdutos['search-btn']}><AiOutlineSearch /></button>
            </div>
            <div>
              <button id={styleProdutos["add-btn"]} onClick={() => setShowAddForm(true)}>+</button>
            </div>
          </div>
          <div id={styleProdutos["content-cards"]}>
            {items && items.map((product, index) => (
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