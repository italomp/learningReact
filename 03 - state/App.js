import React, { Component } from 'react';
/**
 * Coisa que aprendi nessa aula:
 * 1 States
 *	    Objeto que compõe um React Component.
 *
 *		Nesse objeto guardamos as properties pertencentes ao objeto.
 *
 *		Quando o state é atualizado, o componente é renderizado.
 *
 *		Diferença entre props e states:
 *			props são estáticas, states são  mutáveis.
 *
 *		Defino o state de um component em seu construtor
 *			constructor(props){
 *				super(props);
 *				this.state = {
 *					nome: "Italo",
 *					cargo: "desenvolvedor"
 *					...
 *				}
 *			}
 *
 * 2     setState(state)
 *          altera o valor do state 
 * 
 * 3     acessar objeto state
 *          acesso de objeto normal: this.state
 *
 * 4 Definir funções dentro dum compoent: 
 *    Não precisa usar a palavra reservada function
 *
 * 3 Passando manipulador de eventos para component
 *    <button onClick={this.handleClick}> 
 *
 * 5 Dar bind em uma função na instância de um component
 *    Preciso dar bind nas funções que passo como parâmetro para outros componentes.
 *    ex: <button onClick={this.handleClick}> 
 *
 *    Tenho que dar bind no this.handleClick no constructor

 *    Dando bind no constructor:
 *        this.aumentar = this.aumentar.bind(this); 
 * 
 */

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            nome: "Italo",
            contador: 0
        }
        this.aumentar = this.aumentar.bind(this);
        this.diminuir = this.diminuir.bind(this);
    }

    aumentar(){
            let state = this.state;
            state.contador += 1;
            this.setState(state);    
    }

    diminuir(){
        let state = this.state;
            if(state.contador > 0){
                state.contador -= 1;
                this.setState(state);
            }
    }

    render(){
        return(
            <div>
                <h1>Contador</h1>
                <button onClick={this.diminuir}>-</button>
                    {this.state.contador}
                <button onClick={this.aumentar}>+</button>
            </div>
        );
    }
}

export default App;