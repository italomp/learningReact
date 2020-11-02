/**
 * class component precisa sempre extender Component,
 * implementar o método reder(){} que retorna uma tag html.
 * 
 * Não preciso definir onde o component recebe as props,
 * ele simplesmente tem acesso a elas usando o javascript.
 * {this.props.propertieName}
 */

import React, { Component } from 'react';

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} 
                    cargo={this.props.cargo} 
                    idade={this.props.idade} 
                    fb={this.props.facebook}
                    linkedIn={this.props.linkedIn} 
                    youtube={this.props.youtube}/>    
                <hr/>
            </div>
              
        );
    }
}
/**
 * Não concordo com esse nome pra esse componente,
 * mas resolvi seguir a risca o exemplo dele.
 * O nome deveria ser Integrante
 */
class Sobre extends Component{
    render(){
        return(
            <div>
                <h2>Olá, sou o(a) {this.props.nome}</h2>
                <h3>Cargo: {this.props.cargo}</h3>
                <h4>Idade: {this.props.idade}</h4>
                <SocialMedia fb={this.props.fb}
                    linkedIn={this.props.linkedIn}
                    youtube={this.props.youtube}/>
            </div>
        );
    }
}

const SocialMedia = (props) =>{
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <a href={props.linkedIn}>LinkedIn </a>
            <a href={props.youtube}>Youtube </a>
        </div>
    );
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe nome="Italo" cargo="Desenvolvedor" idade="27"
                facebook="https://www.g1.globo.com" linkedIn="link.." 
                youtube="link..."/>
            <Equipe nome="Gabriela" cargo="SCRUM Master" idade="25"
                facebook="https://www.g1.globo.com" linkedIn="link.." 
                youtube="link..."/>
        </div>
    ); 
}

export default App;