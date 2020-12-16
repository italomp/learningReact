import React, { Component } from 'react';
import firebase from 'firebase';

/**
 * Antes de usar esse código, precisei criar o banco
 * e inserir alguns dados, através do console do firebase.
 */
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            token: "Carregando...",
            nome: "",
            idade: ""
        }

        /**
         * Configurações geradas quando o database é criado no google
         * web service.
         * 
         * Essa configuração vai permitir que a minha aplicação
         * acesse o database (que está na cloud).
         */
        let firebaseConfig = {                               
		    apiKey: "AIzaSyA1Fz7Z3COh2otGbnax7DK-_BjO-wF7QCc",
		    authDomain: "reactapp-b26f0.firebaseapp.com",
		    projectId: "reactapp-b26f0",
		    storageBucket: "reactapp-b26f0.appspot.com",
		    messagingSenderId: "888102623108",
		    appId: "1:888102623108:web:c0db8d317cf8f6c4086fd1",
		    measurementId: "G-6KYCWH34K9"
        };
        // Initialize Firebase
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
        else {
            firebase.app(); // if already initialized, use that one
        }

        /**
         * firebase.database() - retorna uma instância de firebase.
         * 
         * ref('referência') - recebe uma referência do database.
         * Referência - É um nó (um local exato) dentro do database
         * 
         * Importante: aparentemente posso pegar apenas os nós filhos de
         * root com ref(), para pegar seus filhos uso .child(nomeChild) 
         * 
         * .on('value', (snapshot)=>{...}) - recebe todos os dados da 
         * coleção e e registra uma função que é executada toda vez que 
         * a coleção for alterada.
         * 
         * Importante: com esse método on(), se o valor do nó for alterado
         * no bd, esse método pega esse valor em real time.
         * 
         * value - adiciona um evento que pega um snapshot estático.
         * podemos ter:
         *      value, 
         *      child_added, 
         *      child_changed, 
         *      child_removed.
         * 
         * snapshot - Objeto [do tipo DataSnapshot] que encapsuls o valor 
         * de algum local do BD.
         * 
         * .val() - método do objeto DataSnapshot que retorna o valor 
         *          armazenado nele.
         * 
         */
        
        firebase.database().ref("token").on("value", (snapshot) =>{
            let state = this.state;
            state.token = snapshot.val();
            this.setState(state);
        });

        //parametro passaso para .child() é o nome do nó filho no bd.
        firebase.database().ref("usuarios").child(1)
        .on("value", (snapshot) => {
            let state = this.state;
            state.nome = snapshot.val().nome;
            state.idade = snapshot.val().idade;
            this.setState(state);
        });
    }
    
    render(){
        return(
            <div>
                <h1>Token: {this.state.token}</h1>
                <h1>Nome: {this.state.nome}</h1>
                <h1>itade: {this.state.idade}</h1>
            </div>
        );
    }
}

export default App;