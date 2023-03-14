import React, { useState } from "react";
import { ImMinus } from "react-icons/im";
import { ImPlus } from "react-icons/im";

import './ContadorQuantidade.css';


export default function ContadorQuantidade () {

    const [quantidade, setQuantidade] = useState(0);

    function aumentaQuantidade() {
        setQuantidade(quantidade + 1);
    }

    function diminuiQuantidade() {
        if (quantidade > 0) setQuantidade(quantidade - 1);
    }

    return (
        <div className="contador">
            <button className="botao" onClick={diminuiQuantidade}><ImMinus size={15}/></button>
            <p className="quantidade">{quantidade}</p>
            <button className="botao" onClick={aumentaQuantidade}><ImPlus size={15}/></button>
        </div>
    )
}