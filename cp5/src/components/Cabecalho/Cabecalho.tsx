import React from 'react';
import Menu from "../Menu/Menu";

const Cabecalho: React.FC = () => {
    const headerStyle: React.CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',  
        justifyContent: 'flex-start',  
        textAlign: 'center',
        height: '100vh', 
        padding: '20px' 
    };

    const h1Style: React.CSSProperties = {
        margin: 0,
        paddingBottom: '10px' // Diminuiu de 20px para 10px
    };

    const menuStyle: React.CSSProperties = {
        display: 'flex',
        justifyContent: 'center', 
        gap: '20px' 
    };

    return (
        <header style={headerStyle}>
            <h1 style={h1Style}>Velikovsky - Worlds in Collision</h1>
            <div style={menuStyle}>
                <Menu />
            </div>
        </header>
    );
}

export default Cabecalho;
