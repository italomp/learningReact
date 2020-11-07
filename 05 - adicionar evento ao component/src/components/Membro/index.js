import React, { Component } from 'react';

class Membro extends Component{

    constructor(props){
        super(props);
        this.state = {
            /**
             * Não preciso usar this.props pq estou dentro
             * de this.state
             */
            nome: props.nome 
        };
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar(){
        this.setState({nome: 'Italo'});
    }

    sair(){
        this.setState({nome: 'Visitante'});
    }

    render(){
        return(
            <div>
                <h2>Bem vindo(a): {this.state.nome}</h2>
                <button onClick={this.entrar}>
                    Entrar como Italo
                </button>
                <button onClick={this.sair}>
                    Sair
                </button>
            </div>
        );
    }
}

export default Membro;