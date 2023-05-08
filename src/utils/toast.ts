import {ToastContainer, toast} from 'react-toastify';
//Notificação de sucesso
export const successNotify = () => toast.success('Sucesso ! fazendo login...');
export const productAdded = () => toast.success('Produto adicionado !')
export const errorNotify = () => toast.error("Não deu certo :(")