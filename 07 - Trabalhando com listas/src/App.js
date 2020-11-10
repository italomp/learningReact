import React, { Component } from 'react';
import Feed from './components/Feed';
/**
 * Aprendi a exibir itens duma lista onde cada item é um component.
 * Tenho uma coleção desses itens no objeto state.
 * Percorri essa coleção, e para cada elemento retornei uma instância 
 * do item component.
 *
 * O react recomenda que usemos uma key para cada item da lista 
 * (Warning: Each child in a list should have a unique "key" prop).
 * Essa key é um atributo html. Geralmente associo o id do component a ela.
 * 
 * obs: a exibição de dados no Feed component depende dos valores das props
 * passadas (curtidas e comentarios, para ser mais preciso).
 */
    
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
        feed: [{id: 1, username: "Italo", curtidas: 1, comentarios: 2},
               {id: 2, username: "Matheus", curtidas: 10, comentarios: 0},
               {id: 3, username: "Maria", curtidas: 40, comentarios: 1}]
        };
    }

    render(){
        return(
            <div>
                {this.state.feed.map((item)=>{
                    return(
                        <Feed key={item.id} username={item.username} 
                              curtidas={item.curtidas} comentarios={item.comentarios} />
                    );
                    
                })} 
            </div>
        );
    }
}

export default App;