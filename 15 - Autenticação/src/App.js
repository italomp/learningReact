import React, { Component } from 'react';
import Routes from './routes';

/**
 * Na aula de hoje aprendi a tratar autenticação.
 * 
 * Usamos doi componentes novos: O Auth.js, criado
 * por nós, para validar as credenciais e retornar um
 * boolean indicando se estam ok ou não. E o Redirect,
 * esse component é da biblioteca react-router-dom e
 * redireciona o usuário para uma página específica
 * caso as credenciais não estejam ok
 */
class App extends Component{ 
    
    render(){
        return(
            <div>
                <Routes />
            </div>
        );
    }
}

export default App;