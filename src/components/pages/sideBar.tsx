import styles from '../../ModuleCss/Interface.module.css'
import { NavLink } from 'react-router-dom'

const SideBar = () => {
    return (
        <div id={styles['side-bar']}>

          <button className={styles['content-side-bar']}>
              <NavLink to='/principal'>
                Início
              </NavLink>
          </button>

          <button className={styles['content-side-bar']}>
              <NavLink to='/vendas'>
                Vendas
              </NavLink>
          </button>

          <button className={styles['content-side-bar']}>
              <NavLink to='/produtos'>
                Produtos
              </NavLink>
          </button>

          <button className={styles['content-side-bar']}>
              <NavLink to='/estoque'>
                Estoque
              </NavLink>
          </button>
        </div>
    )
}

export default SideBar
