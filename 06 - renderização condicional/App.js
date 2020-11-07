import React, { Component } from 'react';
/**
 * Renderização condicional usando
 * operador &&. //não sei que op é esse.
 * Não é and.
 * 
 * exp && <tag>content</tag>
 * 
 * 'Se exp for vddr renderize <tag>content</tag>'.
 * 
 * importnte: if não dá certo nesse contexto.
 * Só dentro de métodos do component como por ex
 * componentDidUpdate()
 * 
 * Também podemos usar o operador ternario '?',
 * que avalia se uma exp retorna true ou false.
 * 
 * exp ? <tag>content</tag>
 * Lembrar que o operador ? é usado
 * em conjunto com o :.
 */
    

class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
        status: 2
        };
    }

    render(){
        return(
            <div>
                {this.state.status === 1 &&
                    <h2>status === 1</h2>
                }

                {this.state.status === 1 ?
                    <h2>status === 1</h2>:
                    <h2>status != 1</h2>
                }
                <h2>something</h2>
            </div>
        );
    }
}

export default App;