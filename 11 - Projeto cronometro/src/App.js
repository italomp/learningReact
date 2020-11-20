import React, { Component } from 'react';
import cronometroImg from './assets/cronometro.png';
import './style.css'
/**
 * Na aula de hoje desenvolvemos um cronometro
 * para praticar.
 * Nada de novo.
 */
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            numero: 0,
            botaoComecarPausar: 'COMEÇAR'

        };
        this.timer = null;
        this.comecar = this.comecar.bind(this);
        this.zerar = this.zerar.bind(this);
    }    
    
    comecar(){
        let state = this.state;
        if(this.timer !== null){
            clearInterval(this.timer);
            this.timer = null;
            state.botaoComecarPausar = "COMEÇAR";
            this.setState(state);
        }
        else{
            this.timer = setInterval(() => {
                state.numero += 0.1;
                state.botaoComecarPausar = "PAUSAR";
                this.setState(state);
            }, 100);
        }
    }

    zerar(){
        clearInterval(this.timer);
        let state = this.state;
        state.numero = 0;
        state.botaoComecarPausar = "COMEÇAR"
        this.setState(state);
    }

    render(){
        return(
            <div className="container">
               <img src={cronometroImg} className="img"/>
               <a className="timer">{this.state.numero.toFixed(1)}</a>
               <div className="areaBtn">
                    <a className="botao" onClick={this.comecar}>
                       {this.state.botaoComecarPausar}
                    </a>
                    <a className="botao" onClick={this.zerar}>
                       ZERAR
                    </a>
               </div>
            </div>
        );
    }
}



export default App;