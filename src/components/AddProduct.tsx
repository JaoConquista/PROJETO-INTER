import React from 'react'
import { useState } from "react";

import { successNotify, errorNotify } from "../utils/toast";
import { Toast } from 'react-toastify/dist/components';

import stylesProdutos from '../ModuleCss/InterfaceProdutos.module.css'
import styleInterface from '../ModuleCss/Interface.module.css'
import styleForm from '../ModuleCss/Form.module.css'
import { Products } from '../interfaces/Products';

import {AiFillCheckCircle} from  "react-icons/ai"
import {GiCancel} from  "react-icons/gi"

import { createProduct } from '../services/ProductService';

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
                className={styleForm['form-products']}>
                    <div className="products">
                        <label className={styleForm['label']}>
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
                            Data : 
                            <input 
                            type="date" 
                            name='data'
                            required
                            value={product.data.toString()}
                            onChange={handleInputChange}
                            />
                        </label>
                    </div>
                        <button type="button" className={stylesProdutos['icons']} onClick={handleExit}> <GiCancel/> </button>
                        <button type='submit' className={stylesProdutos['icons']}><AiFillCheckCircle/></button>
                </form>
        </div>
    </div>
)
}

export default AddProduct;