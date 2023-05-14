import {useEffect, useState} from 'react'
import { getProducts } from '../services/ProductService';

import SideBar from './pages/sideBar';

//CSS
import styles from '../ModuleCss/Interface.module.css'
import styleEstoque from '../ModuleCss/estoque.module.css'


 
const InterfaceEstoque = () => {
  //Todo: Alerta de estoque baixo e vencimento próximo !

  const [dataLength, setDataLength] = useState(0)

  const fetchDataLength = async () => {
      const data = await getProducts()

      setDataLength(data.length)
  }

  useEffect(() => {

    fetchDataLength()

  }, [])

  
  return (

    <div className={styles['main']}>
    <div className="section1">

      <SideBar />

    </div>
    <div className="section2">
      <div id={styles["interface"]}>
        <h1>Estoque</h1>
        <div id={styleEstoque['estoque']}>
          <h3>Produtos no seu estoque </h3>
          <h2>{dataLength}</h2>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InterfaceEstoque