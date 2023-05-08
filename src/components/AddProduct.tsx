import React from 'react'
import { useState } from "react";

import { successNotify, errorNotify } from "../utils/toast";

import stylesProdutos from '../ModuleCss/InterfaceProdutos.module.css'
import styleInterface from '../ModuleCss/Interface.module.css'
import styleForm from '../ModuleCss/Form.module.css'
import { Products } from '../interfaces/Products';


import {AiFillCheckCircle} from  "react-icons/ai"
import {GiCancel} from  "react-icons/gi"

import { createProduct } from '../services/ProductService';
import { ToastContainer } from 'react-toastify';

interface AddProductProps {
    handleExit : () => void
}
const AddProduct: React.FC<AddProductProps> = ({handleExit}) => {

    const [product, setProduct] = useState<Products>({
        produto : '',
        data: '',
        tipo: '',
        qtd: 0
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value} = e.target;
        setProduct({...product, [name]: value})
    }

    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        successNotify()
        try{
            const res = await createProduct(product)
            handleExit()

        }catch (error){
            errorNotify()
        }

        console.log(product)
    }
return(
    <div id={styleInterface['add-products']}>
        <div className={stylesProdutos['content']}>
            <h1>Adicione seus produtos !</h1>
                <form 
                onSubmit={handleSubmit}
                >
                    <div id={stylesProdutos["products"]}>
                        <label>
                            Nome : 
                            <input 
                            type="text" 
                            name='produto'
                            required
                            value={product.produto.toString()}
                            placeholder='Digite o nome do produto'
                            onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Tipo : 
                            <input 
                            type="text" 
                            name='tipo'
                            required
                            value={product.tipo.toString()}
                            placeholder='Digite o tipo do produto'
                            onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Quatidade : 
                            <input 
                            type="number" 
                            name='qtd'
                            required
                            value={parseInt(product.qtd)}
                            placeholder='Digite a quantidade do produto'
                            onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Data de Vencimento : 
                            <input 
                            type="date" 
                            name='data'
                            required
                            value={product.data.toString()}
                            onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Preço de Custo :
                            <input 
                            type="text"
                            required/>
                        </label>
                        <label>
                            Preço de Venda :
                            <input 
                            type="text"
                            required/>
                        </label>
                    </div>
                    <div className={stylesProdutos["control-btns"]}>
                        <button type="button" id={stylesProdutos['cancel-btn']} onClick={handleExit}><GiCancel/></button>
                        <button type='submit' id={stylesProdutos['check-btn']}><AiFillCheckCircle/></button>
                    </div>
                        
                </form>
        </div>
    </div>
)
}

export default AddProduct;