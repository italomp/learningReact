import React, { Component } from 'react';
import firebase from 'firebase';

/**
 * Hoje, vou aprender a pegar listas do bd.
 * ex: todos os users dentro do nó user.
 */
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            users: []
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
         * IMPORTANTE: para pegar a key do nó, acesso direto,
         * para pegar atributos do nó, uso .val().atributo.
         * 
         * Acho que é porque funciona assim, a key é uma propertie do nó
         * que representa cada user, mas os atriutos do user são properties
         * de nós filhos e pego esse conjunto de nós filhos através do val()
         */
        firebase.database().ref("usuarios").on("value", (snapshot) => {
            let state = this.state;
            snapshot.forEach(childItem => {
                state.users.push({
                    key: childItem.key,
                    idade: childItem.val().idade,
                    nome: childItem.val().nome
                });
            });
            this.setState(state);
        });

    }

    render(){
        return(
            <div>
                <h1>Users DB</h1>
                <hr/>
                {this.state.users.map(user => {
                    return(
                        <div>
                            <h3>Chave: {user.key}</h3>
                            <h3>Nome: {user.nome}</h3>
                            <h3>Idade: {user.idade}</h3>
                            <hr/>
                        </div>
                    );
                })}
            </div>
        );
    }
}

export default App;