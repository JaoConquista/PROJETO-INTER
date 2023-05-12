
import styleProdutos from '../ModuleCss/InterfaceProdutos.module.css'

import { AiFillEdit, AiOutlineDelete } from "react-icons/ai"


type CardProductsProps = {
  data: {
    id: number,
    produto: string;
    tipo: string;
    data: string;
    qtd: number
  }


  onDelete: (id: number) => void

  showEditForm: (value: boolean, id: number) => void

}
const ProductCard = ({ data, onDelete, showEditForm }: CardProductsProps) => {

  return (
    <div className={styleProdutos["card-produtos"]} key={data.id}>
      <div className={styleProdutos["section1-card"]}>
        <span>
          <p className={styleProdutos['nome']}>Nome</p>
          <p>{data.produto}</p>
        </span>
        <span>
          <p className={styleProdutos['marca']}>Tipo</p>
          <p>{data.tipo}</p>
        </span>
      </div>
      <div className={styleProdutos["section2-card"]}>
        <div className={styleProdutos["informations"]}>
          <span><p>Unidades</p><p>{data.qtd} </p></span>
          <span><p>P / Custo</p><p>-</p></span>
          <span><p>P / Venda</p><p>-</p></span>
          <span><p>Vencimento</p><p>{data.data}</p></span>
        </div>
        <div className={styleProdutos["control-icons"]}>
          <div className={styleProdutos["icons"]}>
            <button id={styleProdutos['edit-btn']} onClick={() => showEditForm(true, data.id)}><AiFillEdit /></button>
            <button id={styleProdutos['delete-btn']} onClick={() => onDelete(data.id)}><AiOutlineDelete /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;