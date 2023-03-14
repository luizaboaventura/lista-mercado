import { useNavigate } from 'react-router-dom';
import './FormularioLogin.css';

export default function Formulario () {

    const navigate = useNavigate();

    return (
        <form>
            <div className="formLogin__campos">
                <label for="email">Email*</label>
                <input type="email" name="email" id="email"/>
            </div>
            <div className="formLogin__campos">
                <label for="senha">Senha*</label>
                <input type="password" name="senha" id="senha"/>
            </div>
            <p className='formLogin__texto formLogin__texto--link'>Esqueceu sua senha?</p>
            <button className='formLogin__botao formLogin__botao--entrar' onClick={() => navigate(`opcoes`)}>Entrar</button>
            <p className='formLogin__texto'>Não possui conta?</p>
            <button className='formLogin__botao'>Cadastrar agora</button>
            <p className='formLogin__texto formLogin__texto--link'>Termos de Uso</p>
        </form>
    )
}