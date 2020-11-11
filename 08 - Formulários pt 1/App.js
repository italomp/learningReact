import React, { Component } from 'react';
/**
 * Nessa aula aprendi a trabalhar com formulários.
 * 
 * 1 - Aprendi a pegar os valores dos elementos html e
 * guardá-los na state do component.
 * 
 * Pego os valores do elemento html, adicionando um
 * evento onChange ao elemento e passando como callback
 * para esse evento, uma função que recebe um evento como
 * parametro, e acessa event.target.value.
 * Além disso essa função guarda esse valor no state do
 * component.
 * 
 * 2 - Conheci o evento onChange.
 * Evento esse que chama uma função, especificada por mim,
 * quando acontece alguma mudança ao elemento html
 * 
 * 3 - event.target
 * Retorna o elemento no qual o evento foi adicionado
 * 
 * 4 - Atributo value na tag <option>.
 * Tag essa que fica dentro da tag <select>.
 * Quando seleciono a option, o valor que o elemento html guarda 
 * é o valor especificado no atributo value e não o conteúdo da tag.
 * Caso o atributo value não seja especificado, o valor que ficará 
 * no elemento html é o valor do conteúdo da tag.
 * 
 */
    
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            email: "exemplo@exemplo.com",
            senha: "",
            sexo: "Masculino"
        };
        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSenha = this.trocaSenha.bind(this);
        this.trocaSexo = this.trocaSexo.bind(this);
    }

    trocaEmail(event){
        this.setState({email: event.target.value});
    }

    trocaSenha(event){
        this.setState({senha: event.target.value});
    }

    trocaSexo(event){
        this.setState({sexo: event.target.value});
    }

    render(){
        return(
            <div>
                <h2>Login</h2>
                Email: 
                <input type="email" name="email" value={this.state.email}
                        onChange={this.trocaEmail}/> 
                <br/>
                Senha: 
                <input type="password" name="password" value={this.state.senha}
                        onChange={this.trocaSenha}/>
                <br/>

                <select value={this.state.sexo} onChange={this.trocaSexo}>
                    <option value="masculino">
                        Masculino
                    </option>
                    <option value="feminino">
                        Feminino
                    </option>
                </select>

                <div>
                    O email atual é: {this.state.email} <br/>
                    A senha atual é: {this.state.senha} <br/>
                    O sexo atual é: {this.state.sexo}
                </div>
            </div>
        );
    }
}

export default App;