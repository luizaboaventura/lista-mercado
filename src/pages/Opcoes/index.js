import { useNavigate } from 'react-router-dom';
import './Opcoes.css';

export default function Opcoes () {

    const navigate = useNavigate();

    return (
        <div className='opcoes'>
            <button className='opcoes__botao' onClick={() => navigate(`lista`)}>Lista de Compras</button>
            <button className='opcoes__botao'>Mercados</button>
        </div>
    );
}