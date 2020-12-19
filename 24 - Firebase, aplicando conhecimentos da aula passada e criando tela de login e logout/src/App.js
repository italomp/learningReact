import React, { Component } from 'react';
import firebase from './fireConnection';

/**
 * 
 */
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            email: "",
            senha: "",
            user: null
        }
        this.cadastrar = this.cadastrar.bind(this);
        this.logar = this.logar.bind(this);
        this.sair = this.sair.bind(this);

    }

    componentDidMount(){
        this.auth();
    }

    auth(){
        firebase.auth().onAuthStateChanged(user => {
            if(user){ //user signed in
                this.setState({user: user}); 
            }
            //No user signed in
        });
    }

    cadastrar(){
        let email = this.state.email;
        let senha = this.state.senha;
        firebase.auth().createUserWithEmailAndPassword(email, senha)
        .catch(error => {
            alert("Código de erro: " + error.code);
        });
    }

    logar(){
        let email = this.state.email;
        let senha = this.state.senha;
        firebase.auth().signInWithEmailAndPassword(email, senha)
        .catch(error => {
            alert("Código de erro: " + error.code);
        });
    }

    sair(){
        firebase.auth().signOut();
    }

    render(){
        return(
            <div>
                {this.state.user ?
                    <div>
                        <h1>Painel Admin</h1>
                        <h2>Seja bem vindo! :)</h2>
                        <button onClick={this.sair()}>Sair</button>
                    </div>
                    : 
                    <div>
                        <h1>Logar</h1>
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
                        <button onClick={this.cadastrar}>Cadastrar</button>
                        <button onClick={this.logar}>Logar</button>
                    </div>
                }
            </div>
        );
    }
}

export default App;