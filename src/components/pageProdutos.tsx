import { useEffect, useState } from 'react'

import AddProduct from './pageAddProduct'
import SideBar from './pages/sideBar'
import { getProducts, postProduct, deleteProduct, editProduct } from '../services/ProductService'
import { Product } from '../interfaces/Products'

import { errorNotify, successNotify } from '../utils/toast'
import { BsPlusLg } from 'react-icons/bs'
import { TfiPackage } from 'react-icons/tfi'

import styles from '../ModuleCss/Interface.module.css'
import styleProdutos from '../ModuleCss/InterfaceProdutos.module.css'

import ProductCard from './ProductCard'
import EditProduct from './pageEditProducts'



const InterfaceProdutos = () => {

  

  const [searchInput, setSearchInput] = useState('')

  const [items, setItems] = useState<Product[]>([])

  const [showAddForm, setShowAddForm] = useState(false)

  const [showEditForm, setShowEditForm] = useState(false)

  const [idProduct, setIdProduct] = useState(0)

  //Buscar produtos 
  const filteredProducts = searchInput.length > 0 ?
    items.filter(items => items.produto.includes(searchInput))
    : []

  useEffect(() => {
    fetchData()
  }, [])

  const EditForm = (value: boolean, id: number) => {

    setShowEditForm(value)
    setIdProduct(id)
  }

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

  const handleEditProduct = async (product: Product, id: number) => {
    //Todo: Estilo dos cards devem ser menor, mais cards devem aparecer na ViewPort

    try {

      const response = await editProduct(product, id)

      fetchData()

      return console.log('Foi')

    } catch (error) {
       console.log('Não foi')
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
      {showAddForm === false && showEditForm === false ? (
        <div className={styleProdutos["section2"]}>
          <div id={styles["interface"]}>
            <div id="title">
              <h1>Produtos</h1>
            </div>
            <div id={styleProdutos["header-add-products"]}>
              <div id={styleProdutos["search-content"]}>
                <input
                  type="text"
                  placeholder="Buscar ..."
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                />
              </div>
              <div>
                <button
                  id={styleProdutos["add-btn"]}
                  onClick={() => setShowAddForm(true)}>
                  <BsPlusLg />
                </button>
              </div>
            </div>
            <div id={styleProdutos["content-cards"]}>
              {searchInput.length > 0 ? (
                filteredProducts.map((product) => (

                  <ProductCard data={product} onDelete={switchOffProduct} showEditForm={EditForm}/>

                ))

              ) : items.length > 0 ? (
                items.map((product) => (

                  <ProductCard data={product} onDelete={switchOffProduct} showEditForm={EditForm} />

                ))
              ) : (
                <div id={styleProdutos["No-Data"]}>
                  <p>Que tal adicionar algo ?</p>
                  <div id={styleProdutos["icon-no-found"]}>
                    <TfiPackage />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : null}

      {/**Trocar o nome e add */}
      {showAddForm &&
        <div id={styleProdutos["Add-Products"]}>
          <AddProduct onClose={() => setShowAddForm(false)} onSubmit={handleSubmit} />
        </div>}
      {showEditForm &&
        <div id={styleProdutos["Add-Products"]}>
          <EditProduct onClose={() => setShowEditForm(false)} onEdit= {handleEditProduct} productId= {idProduct}/>
        </div>
      }
    </div>
  )
}

export default InterfaceProdutos