import {ToastContainer, toast} from 'react-toastify';
//Notificação de sucesso
export const successNotify = () => toast.success('Sucesso ! fazendo login...');
export const errorNotify = () => toast.error("Não deu certo :(")