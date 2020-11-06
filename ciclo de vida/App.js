import React, { Component } from 'react';
/**
 * O Estudo de hoje foi sobre ciclo de vida.
 * Basicamente é reagir a 3 ações:
 * Mounting (ser montado), 
 * updating(ser atualizado) e 
 * unmounting(ser desmontado)
 */
class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            hora: "00:00:00"
        };
    }

    /**
     * Esse método é executado sempre que o component
     * é montando. E apenas nessa ocasião
     */
    componentDidMount(){
        setInterval(() =>{
            this.setState({hora: new Date().toLocaleTimeString()})},
            1000
        );
    }

    /**
     * Esse método é executado sempre que o component
     * é atualizado.
     */
    componentDidUpdate(){
        console.log("Atualizou!")
    }

    /**
         * Esse método retorna um booleano dizendo se o component
         * deve ou não atualizar.
         * true = deve atualizar.
     * false = não deve atualizar
     *//*
    shouldComponentUpdate(){
        //Faço alguma análise aqui dentro...
    }
    */

    render(){
        return(
            <div>
                <h1>Contador</h1>
                <h2>{this.state.hora}</h2>
            </div>
        );
    }
}

export default App;