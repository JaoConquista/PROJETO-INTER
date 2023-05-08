import axios from "axios";
import { Account } from "../interfaces/Account";
import { useState } from "react";


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
