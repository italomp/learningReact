import React, { Component } from 'react';
import firebase from './fireConnection';

/**
 * Na aula de hoje aprenderemos a logar, tendo
 * em visto que já temos usuários cadastrados no
 * Authentication.
 * 
 */
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: ""
        }
        this.logar = this.logar.bind(this);
        this.sair = this.sair.bind(this);

        /**
         * método que observa se existe um usuário logado
         * e caso haja, printa uma mensagem na tela
         */
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                alert("Usuário logado com sucesso!");
            }
        });
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
    logar(event){
        let email = this.state.email;
        let senha = this.state.senha;
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .catch(error => {
            if(error.code === "auth/wrong-password"){
                alert("Senha incorreta!");
            }
            else{
                alert("Código de erro: " + error.code);
            }
        });
        event.preventDefault();
    }

    /**
     * método responsável por deslogar os usuários que estiverem logados
     */
    sair(event){
        firebase.auth().signOut();
        alert("Usuário deslogado com sucesso!");
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Logar</h1>
                <form onSubmit={this.logar}>
                    <label>Email: </label>
                    <br/>
                    <input type="text" placeholder="example@hotmail.com" onChange={event =>{
                        this.setState({email: event.target.value});
                    }}/>
                    <br/>
                    <label>Senha: </label>
                    <br/>
                    <input type="text" placeholder="Senha" onChange={event =>{
                        this.setState({senha: event.target.value});
                    }}/>
                    <br/>
                    <button type="submit">logar</button>
                </form>
                <br/>
                <button onClick={this.sair}>Sair</button>
            </div>
        );
    }
}

export default App;