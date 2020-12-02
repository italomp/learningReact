import React, { Component } from 'react';
import './style.css';

/**
 * Na aula de hoje fizemos um get usando a API fetch 
 * e com o json retornado montamos uma página com posts
 * sobre nutrição.
 */
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            nutri: []
        } 
    }

    componentDidMount(){
        let url = "https://sujeitoprogramador.com/rn-api/?api=posts";
        fetch(url)
        .then(resp => resp.json())
        .then(json => {
            let state = this.state;
            state.nutri = json;
            this.setState(state);
            console.log(json);
        })
    }
   

    render(){
        return(
            <div className="container">
                <header>
                    <strong>
                        React Nutri
                    </strong>
                </header>
                {this.state.nutri.map(item => {
                   return(
                       <article key={item.id} className="post">
                           <strong className="titulo">{item.titulo}</strong>
                           <img src={item.capa} className="capa"/>
                           <p className="subtitulo">{item.subtitulo}</p>
                           <a className="botao" href="#"> Acessar</a>
                       </article>
                   );
                })}
            </div>
        );
    }
}



export default App;