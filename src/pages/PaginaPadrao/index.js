import React from "react";
import { Outlet } from "react-router-dom";
import Logo from '../../imagens/logo.svg';
import './PaginaPadrao.css';

export default function PaginaPadrao () {

    return (
        <>
            <div className="topo">
                <img className="topo__imagem" src={Logo} alt="logo ListaMercado" />
            </div>
            <Outlet />
        </>
    );
}