import React from 'react'
import {Link} from 'react-router-dom'
import { MdAccountCircle } from "react-icons/md";
import styles from '../ModuleCss/Interface.module.css'


const Interface = () => {
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
        <div className="section2">
          <div className={styles['account']}>
            <p>João Conquista</p> <MdAccountCircle/>
          </div>
          <div id={styles["interface"]}>
          <h1>Principal</h1>
          <div>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos ea quod commodi a. Veniam, voluptatum. Maiores sit, eos laboriosam, quidem corporis excepturi eius aspernatur ut dolorem, accusantium architecto rerum?</h3>
          </div>
          </div>
        </div>
        
        
    </div>
  )
}

export default Interface