import React, { Component } from 'react';
import Routes from './routes';


/**
 * Hoje aprendi a usar a biblioteca
 * react-router-dom
 * 
 * Consultar tópico "TRABALHANDO COM ROTAS"
 * no arquivo react.txt
 */
class App extends Component{ 

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <Routes />
            </div>
        );
    }
}



export default App;