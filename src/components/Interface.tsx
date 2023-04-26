import React from 'react'

//CSS
import styles from '../ModuleCss/Interface.module.css'

const Interface = () => {
  return (
    <div className={styles['main']}>
        <div id={styles["interface"]}>e</div>
        <div id={styles['result']}>o</div>
        <div id={styles['side-bar']}>Produtos - Estoque - Vendas - ETC...</div>
    </div>
  )
}

export default Interface