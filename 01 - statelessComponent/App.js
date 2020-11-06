import React from 'react';

/**
 * Aqui Estudei Stateless component.
 * Um component sem ciclo de vida que apenas
 * exibe informações.
 * 
 * Mais simples e inicia mais rápido que um
 * class component
 * 
 * Um stateless component recebe uma props e
 * retorna UMA tag html.
 * 
 * props: objeto que ecapsula properties
 * 
 */

const Equipe = (props) => {
    return(
        <Integrante nome={props.nome} cargo={props.cargo} 
                    idade={props.idade} fb={props.facebook}/>
    );
}

const Integrante = (props) =>{
    return(
        <div>
            <h2>Olá, sou o(a) {props.nome}</h2>
            <h3>Sou {props.cargo}</h3>
            <h4>Tenho {props.idade} anos</h4>
            <SocialMedias fb={props.fb}/>
            <hr/>
        </div>
    );
}

const SocialMedias = (props) =>{
    return(
        <div>
            <a href={props.fb}>Facebook </a>
            <a>LinkedIn </a>
            <a>YouTube </a>
        </div>
    );
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe</h1>
            <Equipe nome="Italo" cargo="Programador" idade="27" 
             facebook="https://meuFacebook.com/"/>
            <Equipe nome="Gabriela" cargo="Analista de RH" idade="28" 
             facebook="www.uol.com"/>
        </div>
    ); 
}

export default App;