import React, { Component } from 'react';
import firebase from 'firebase';

/**
 * Na aula de hoje aprendi a enviar, setar e deletar
 * dados do firebase.
 * 
 * Aprendi também a criar um usuário no banco com uma 
 * chave aleatórea. 
 * 
 * 
 */
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            token: "Carregando...",
            tokenInput: "",
            nome: "",
            idade: "",
            idadeUsuario:"",
            nomeUsuario: ""
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

        this.sendToken = this.sendToken.bind(this);
        this.setAge = this.setAge.bind(this);
        this.registerNewUser = this.registerNewUser.bind(this);
    }

    /**
     * Esse método ENVIA e ATUALIZA um token para o banco de 
     * dados do firebase.
     * 
     * firebase.database() - retorna uma instância de firebase.
     * 
     * ref() recebe como parametro o novo nó que criaremos no bd.
     * 
     * set() vai setar o valor desse novo nó
     * 
     * @param event é o evento adicionado ao elemento form e através
     * desse evento acessaremos o valor do form. 
     */
    sendToken(event){
        firebase.database().ref("token").set(this.state.tokenInput);
        event.preventDefault();
    }

    /**
     * Acessando nós mais internos no bd (descendo na árvore).
     * 
     * Esse método acessa a raiz do bd, passa pelo nó usuários,
     * passa pelo nó nomeado com o id do user, chega ao nó idade
     * e altera o seu valor.
     * 
     * CRIANDO NOVO ATRIBUTO NO USUÁRIO: Caso eu quissesse adicionar
     * um novo atributo ao usuário, bastaria acessar o nó que representa
     * uma instância de usuário e dar um .child(), passando o novo atributo
     * como parâmetro e .set() passando o valor que esse novo atributo 
     * armazenaria.
     * 
     * REMOVENDO ATRIBUTOS NO USUÁRIO: basta chegar ao nó do atributo e dar
     * um .remove();
     */
    setAge(event){
        let userId = 1;
        firebase.database().ref("usuarios").child(userId).child("idade") 
        .set(this.state.idadeUsuario);
        event.preventDefault();
    }

    /**
     * .push() adiciona um novo dado a uma lista no BD, sempre que isso acontece uma
     * nova key e gerada.
     * 
     * key permite acessar a nova chave
     */
    registerNewUser(event){
        let users = firebase.database().ref("usuarios"); 
        let userKey = users.push().key;
        users.child(userKey).set({
            nome: this.state.nomeUsuario,
            idade: this.state.idadeUsuario
        });
        event.preventDefault();
    }
    
    render(){
        return(
            <div>
                <h1>Adicionando/Editando token e idade do usuário</h1>

                <form onSubmit={this.sendToken}>
                    <input type="text" placeholder="Insira um token"
                        value={this.state.tokenInput} onChange={event => 
                            this.setState({tokenInput: event.target.value})
                    } />
                    <button type="submite">Enviar</button>
                </form>

                <form onSubmit={this.setAge}>
                    <input type="text" placeholder="Insira uma idade"
                        value={this.state.idadeUsuario} onChange={event => 
                            this.setState({idadeUsuario: event.target.value})
                    } />
                    <button type="submite">Enviar</button>
                </form>
                
                <h3>Token: {this.state.token}</h3>
                <h3>Nome: {this.state.nome}</h3>
                <h3>itade: {this.state.idade}</h3>

                <h1>Adicionando usuário com id aleatório</h1>

                <form onSubmit={this.registerNewUser}>
                    <input type="text" placeholder="Insira o nome do user"
                        onChange={event => 
                            this.setState({nomeUsuario: event.target.value})
                    } />

                    <input type="text" placeholder="Insira a idade do user"
                        onChange={event => 
                            this.setState({idadeUsuario: event.target.value})
                    } />
    
                    <button type="submite">Enviar</button>
                </form>

            </div>
        );
    }
}

export default App;