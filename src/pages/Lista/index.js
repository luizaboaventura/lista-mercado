import { useRecoilState} from "recoil";
import { listaDeComprasState } from "../../atoms/listaDeComprasState";
import FormularioLista from "../../components/FormularioLista";
import "./Lista.css";
import { FaTrashAlt } from "react-icons/fa";
import ContadorQuantidade from "../../components/ContadorQuantidade";

export default function Lista() {

    const [listaDeCompras, setListaDeCompras] = useRecoilState(listaDeComprasState);

    const mudarComplete = (item) => {
        const listaDeComprasEditada = listaDeCompras.map((compra) => {
            if (item.id === compra.id){
                    return {...compra, complete: !compra.complete}
                }
            return compra;
        });
        setListaDeCompras(listaDeComprasEditada);
    }

    const excluirItem = (item) => {
        const listaDeComprasNova = listaDeCompras.filter(compra => item.id !== compra.id)
        setListaDeCompras(listaDeComprasNova);
    }

    return (
        <div className="lista">
            <FormularioLista/>
            <ul className="lista__lista">
                {listaDeCompras.map((item) => 
                <li key={item.id} className='lista__card'>
                    <div className="lista__container" >
                        <input type='checkbox' className="lista__checkbox" onClick={() => mudarComplete(item)}/>
                        <p className={item.complete? 'lista__item--completado': 'lista__item'}>{item.descricao}</p>
                    </div>
                    <ContadorQuantidade />
                    <FaTrashAlt className="lista__lixeira" size={20} color="black" onClick={()=> excluirItem(item)}/>
                </li>)}
            </ul>
        </div>
    );
}

