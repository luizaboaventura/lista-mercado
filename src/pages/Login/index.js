import FormularioLogin from '../../components/FormularioLogin';
import './Login.css';

export default function Login() {

    return (
        <main>
            <div className="card">
                <p className="card__titulo">Acesse sua conta</p>
                <FormularioLogin/>
            </div>
        </main>
    );
}