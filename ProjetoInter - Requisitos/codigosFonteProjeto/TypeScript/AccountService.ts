import axios from "axios";
import { Account } from "../interfaces/Account";
import { useState } from "react";
import { errorNotify } from "../utils/toast";


const urlCliente = 'http://127.0.0.1:5000/cadas_cliente'

export function createAccount(account: Account): Promise<any> {
    return(
     axios.post(urlCliente, {
        nome: account.nome,
        cpf: account.cpf,
        pwd: account.pwd,
        endereco: account.endereco
        
        })
    )
}

export async function getAccount(): Promise<Account[]> {
    try {
        const response = await axios.get<Account[]>(urlCliente)
        const data = response.data
        return data

    } catch (error) {
        throw new Error 
    }
}
