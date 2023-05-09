import styles from '../../ModuleCss/Interface.module.css'
import { Link } from 'react-router-dom'

const SideBar = () => {
    return (
        <div id={styles['side-bar']}>

          <button className={styles['content-side-bar']}><Link to='/principal'>Início</Link></button>

          <button className={styles['content-side-bar']}><Link to='/vendas'>Vendas</Link></button>

          <button className={styles['content-side-bar']}><Link to='/produtos'>Produtos</Link></button>

          <button className={styles['content-side-bar']}><Link to='/estoque'>Estoque</Link></button>
        </div>
    )
}

export default SideBar
