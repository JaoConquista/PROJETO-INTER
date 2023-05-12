import axios from "axios";
import { useState } from 'react'
import { Product } from '../interfaces/Products'
import { errorNotify } from "../utils/toast";

const urlProdutos = 'http://127.0.0.1:5000/cadas_produto'
let urlDelete = `http://127.0.0.1:5000/cadas_produto/delete`

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
    //Todo: Usar try catch
    const response = await axios.get<Product[]>(urlProdutos)

    const products = response.data

    return products
}

export async function deleteProduct(productId: number) {

    try {

        const response = await axios.delete(`${urlDelete}/${productId}`)

        return response


    } catch (error) {
        errorNotify()
        console.log('ERRO no delete')
    }
}

export function editProduct(product: Product, productId: number): Promise<any> {
    
    let editUrl = `${urlProdutos}/${productId}`

        return axios.put(editUrl, {
            produto: product.produto,
            tipo: product.tipo,
            data: product.data,
            qtd: product.qtd
        })
}