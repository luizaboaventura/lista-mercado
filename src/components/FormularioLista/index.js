import { useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { listaDeComprasState } from "../../atoms/listaDeComprasState";
import './FormularioLista.css';
import { v4 as uuidv4 } from 'uuid';

export default function FormularioLista () {

    const [listaDeCompras, setListaDeCompras] = useRecoilState(listaDeComprasState);
    const [descricao, setDescricao] = useState('');
    const inputRef = useRef(null);

    const submeterForm = (e) => {
        e.preventDefault();
        const compra = {
            descricao: descricao, 
            complete: false,
            id: uuidv4()  
        }

        const listaDeComprasOrdem = [...listaDeCompras, compra].sort(function(a,b) {
            if(a.descricao < b.descricao) {
                return -1;
              } else {
                return true;
              }
        })
        setListaDeCompras(listaDeComprasOrdem);
        setDescricao('');
        inputRef.current?.focus();
    }

    return (
        <form className="form__adicionar" onSubmit={submeterForm}>
            <p className="form__titulo">Digite abaixo o item:</p>
            <input ref={inputRef} value={descricao} className="form__input" type="text" onChange={(e) => setDescricao(e.target.value)}/>
            <button className="form__botao" type="submit">
                Adicionar
            </button>
        </form>
    );
}
