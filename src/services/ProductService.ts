import axios from "axios";
import { useState } from 'react'
import { Product } from '../interfaces/Products'

const urlProdutos = 'http://127.0.0.1:5000/cadas_produto'

export function postProduct(product: Product): Promise<any> {
    //Todo: Corrigir o tipo deste método  
    return (
        axios.post(urlProdutos, {
            produto: product.produto,
            tipo: product.tipo,
            data: product.data,
            qtd: product.qtd
        }
        ))
}

export async function getProducts(): Promise<Product[]> {
    // Usar try catch
    const response = await axios.get<Product[]>(urlProdutos)

    const products = response.data

    return products
}