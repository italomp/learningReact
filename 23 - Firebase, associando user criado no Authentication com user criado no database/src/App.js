import React, { Component } from 'react';
import firebase from './fireConnection';

/**
 * Na aula de hoje aprendi vincular o user criadono
 * Authentication com o user criado no Database.
 * 
 * Em Authentication [no console do firebase] temos o 
 * UID do usuário e é através dele que vamos relacionar 
 * o usuário do Authentication ao usuário do Database.
 *
 * Vou criar o usuário (auth().createUserWithEmailAndPassword()), 
 * verificar se ele logou (auth().onAuthStateChanged()) e esse
 * método que verifica se o user foi logado vai receber o user, e 
 * no corpo do método acessaremos/criaremos o child "usuarios" no bd
 * e acessaremos seu child que terá como key: usuário.uid e aí quando 
 * finalmente tivermos o nó que representa o usuário, cujo id é o uid 
 * do usuário, adicionaremos o valor desse nó com o método set() passando 
 * um objeto literal que represental o user.
 *
 * IMPORTANTE: esse método que verifica se o user foi logado não fica 
 * dentro do método que cria o usuário... como esse método é um olheiro, 
 * ele é executado no construtor do component mesmo.
 * 
 * IMPORTANTE 2: O método que cria o usuário já o conecta/loga ao servidor.
 */
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: ""
        }
        this.cadastrar = this.cadastrar.bind(this);

        firebase.auth().signOut();

        /**
         * método que observa se existe um usuário logado
         * e caso haja, printa uma mensagem na tela
         */
        firebase.auth().onAuthStateChanged(user => {
            if(user){
                firebase.database().ref("usuarios").child(user.uid).set({
                    nome: this.state.nome
                })
                .then(
                    //limpando os campos do form
                    this.setState({nome: "", email: "", senha: ""})
                );
            }
        });
    }

    /**
     * 
     */
    cadastrar(event){
        let email = this.state.email;
        let senha = this.state.senha;
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .catch(error => {
            alert("Código de erro: " + error.code);
        });
        event.preventDefault();
    }

    render(){
        return(
            <div>
                <h1>Logar</h1>
                <form onSubmit={this.cadastrar}>
                    <label>Nome: </label>
                    <br/>
                    <input type="text" value={this.state.nome} onChange={event =>{
                        this.setState({nome: event.target.value});
                    }}/>
                    <br/>
                    <label>Email: </label>
                    <br/>
                    <input type="text" value={this.state.email} onChange={event =>{
                        this.setState({email: event.target.value});
                    }}/>
                    <br/>
                    <label>Senha: </label>
                    <br/>
                    <input type="text" value={this.state.senha} onChange={event =>{
                        this.setState({senha: event.target.value});
                    }}/>
                    <br/>
                    <button type="submit">Cadastrar</button>
                </form>
                
            </div>
        );
    }
}

export default App;