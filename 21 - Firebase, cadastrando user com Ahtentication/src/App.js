import React, { Component } from 'react';
import firebase from './fireConnection';

/**
 * Usando authentication do firebase.
 * Hoje Aprendi a cadastrar um usuário usando
 * o Authentication do firebase.
 * O user cadastrado pode ser visto em Authentication
 * na aba users, não em database, do console do firebase.
 */
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: ""
        }
        this.cadastrar = this.cadastrar.bind(this);
    }

    /**
     * firebase.auth() retorna uma instância de Authentication
     * 
     * createUserWithEmailAndPassword() é um método de Authentication
     * que recenbe como parametros email e senha, e cadastra esse user
     * no Autentication.
     * 
     * Importante: Não olhar no database, mas sim no authentication do
     * console do firebase. Mais especificamente, na aba users.
     * 
     * Esse método retorna uma promise e podemos usar the() e catch().
     * Nesse caso é interessante usar o cath() para tratar um possível
     * erro.
     */
    cadastrar(event){
        let email = this.state.email;
        let senha = this.state.senha;
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .catch(error => {
            if(error.code === "auth/invalid-email"){
                alert("Email inválido!");
            }
            else if(error.code === "auth/weak-password"){
                alert("Senha fraca!");
            }
            else{
                alert("Código de erro: " + error.code);
            }
        });
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <form onSubmit={this.cadastrar}>
                    <label>Email:</label>
                    <input type="text" placeholder="Email" onChange={event =>{
                        this.setState({email: event.target.value});
                    }}/>
                    <br/>

                    <label>Senha:</label>
                    <input type="text" placeholder="Senha" onChange={event =>{
                        this.setState({senha: event.target.value});
                    }}/>

                    <button type="submit">Cadastrar</button>
                </form>
                {this.state.email}
                {this.state.senha}
            </div>
        );
    }
}

export default App;