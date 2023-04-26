import React from 'react'

import {Link} from 'react-router-dom'

//CSS
import styles from '../ModuleCss/Interface.module.css'

const Interface = () => {
  return (
    <div className={styles['main']}>
        <div id={styles['side-bar']}>
          <p>Produtos</p>
          <p>Produtos</p>
          <p>Produtos</p>
          <p>Produtos</p>
        </div>
        <div id={styles['result']}>
          <input type="text" 
          placeholder='pesquise'
          />
        </div>
        <div id={styles["interface"]}></div>
        
        
    </div>
  )
}

export default Interface