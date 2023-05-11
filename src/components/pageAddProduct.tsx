import React, { useState } from 'react';
import styleInterface from '../ModuleCss/Interface.module.css';
import stylesProdutos from '../ModuleCss/InterfaceProdutos.module.css';
import { Product } from '../interfaces/Products';
import { AiFillCheckCircle } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";


interface AddProductProps {
    onSubmit: (product: Product) => void
    onClose: () => void
}
const AddProduct: React.FC<AddProductProps> = ({ onSubmit, onClose }) => {

    const [product, setProduct] = useState<Product>({
        id: 0,
        produto: '',
        data: '',
        tipo: '',
        qtd: 0
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        onSubmit(product)
    }
    return (
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
                                value={product.produto}
                                placeholder='Digite o nome do produto'
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Tipo :
                            <input
                                type="text"
                                name='tipo'
                                
                                value={product.tipo}
                                placeholder='Digite o tipo do produto'
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Quantidade :
                            <input
                                type="number"
                                name='qtd'
                                
                                value={product.qtd}
                                placeholder='Digite a quantidade do produto'
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Data de Vencimento :
                            <input
                                type="date"
                                name='data'
                                
                                value={product.data}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Preço de Custo :
                            <input
                                type="text"
                                 />
                        </label>
                        <label>
                            Preço de Venda :
                            <input
                                type="text"
                                 />
                        </label>
                    </div>
                    <div className={stylesProdutos["control-btns"]}>
                        <button type="button" id={stylesProdutos['cancel-btn']} onClick={() => onClose()}><GiCancel /></button>
                        <button type='submit' id={stylesProdutos['check-btn']}><AiFillCheckCircle /></button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default AddProduct;