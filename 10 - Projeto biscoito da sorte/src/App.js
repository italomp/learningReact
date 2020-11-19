import React, { Component } from 'react';
import BiscoitoImg from './assets/biscoito.png';
import './estilo.css'
/**
 * 1 - aprendi a importar imagem
 *     usando require (mais antigo) ou import.
 * 
 * 2 - importar a usar o CSS
 *     uso import 'caminho'.
 *     não preciso um nome, como nos demais imports.
 *     IMPORTANTE: meu arquivo de estilo é criado por mim,
 *     dentro da pasta src do projeto.
 * 
 * 3 - Aprendi padrão mais elegante para onclick.
 *     Ao invés de adicionar um onClick no main component.
 *     Adiciono apenas uma props a ele, e essa props recebe
 *     o callback que será passado como props para o component
 *     específico e esse component usará esse callback no seu
 *     onClick.
 *     Resumindo, transferi onClick do main componente para o
 *     component específico.
 *     O Código fica mais coeso.
 */
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            textoFrase: ''
        };
        this.frases = ['Frase 1', 'Frase 2', 'Frase 3',
                       'Frase 4', 'Frase 5', 'Frase 6',
                       'Frase 7', 'Frase 8', 'Frase 9'];
        this.quebraBiscoito = this.quebraBiscoito.bind(this);
        
    }

    quebraBiscoito(){
        let numRandomico = Math.floor(Math.random() * this.frases.length);
        let frase = this.frases[numRandomico];
        this.setState({textoFrase: frase});
    }

    render(){
        return(
            <div className="container">
                <img src={BiscoitoImg} className="img"/>
                <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito} />
                <h3 className="textoFrase">{this.state.textoFrase}</h3>
            </div>
        );
    }
}

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>
                    {this.props.nome}
                </button>
            </div>
        );
    };
}

export default App;