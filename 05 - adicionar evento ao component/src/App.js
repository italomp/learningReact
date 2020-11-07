import React, { Component } from 'react';
import Membro from './components/Membro';
/**
 * 1 - Aprendi como usar o Import.
 *     import componentName from 'caminho';
 *     Se o nome no .js do compoente for:
 *     index.js
 *     Caso contrário, preciso adicionar
 *     o nome do component ao caminho
 * 
 * 2 - Estruturar projeto, criando uma pasta
 *     para cada component e adicionar seus
 *     arquivos dentro dessa pasta.
 * 
 * 3 - Aprendi também a adicionar evento
 *     em compoent.
 *     ex: onClick={callback}
 * 
 * callback: nome da função sem parenteses
 * no final.
 * Com parenteses é uma chamada à função.
 * 
 * Definição de função também é callback,
 * mas acho mais bagunçado que definir a
 * função fora e passar só o nome dela.
 */

class App extends Component{    
    render(){
        return(
            <div>
                <Membro nome="Visitante"/>
            </div>
        );
    }
}

export default App;