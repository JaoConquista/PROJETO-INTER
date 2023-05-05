import axios from "axios";
import {useState} from 'react'
import {Products} from '../interfaces/Products'

const urlProdutos = 'http://127.0.0.1:5000/cadas_produto'

export function createProduct(product:Products) : Promise<any> {
    return (
        axios.post(urlProdutos, {
            produto : product.produto,
            tipo : product.tipo,
            data : product.data,
            qtd : product.qtd
        }
    ))
}