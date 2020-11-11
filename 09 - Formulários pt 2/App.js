import React, { Component } from 'react';
/**
 * Nessa aula aprendi:
 * 
 * 1 - usar a tag <label>, que ajuda leitores de
 * tela. Seu atributo for deve ter o mesmo valor
 * do atributo id do elemento que estiver associado
 * ao label.
 * 
 * 2 - Usar o evento onSubmit.
 * Executa uma função javascript quando o form é
 * submetido.
 * O form é submetido quando o button com type submite
 * recebe um click.
 * 
 * Importante: Preciso ter o onSubmit na tag <form> e o
 * button com type submit dentro do form.
 * 
 * 3 - event.preventDefault
 * Essa função evita que a ação padrão do evento seja executada
 * quando o evento for acionado.
 * ex: clear nos campos do form após clicar num botão submit
 * 
 * 4 - Mensagem de erro no form.
 * Adicionar uma mensagem de erro no form component.
 * 
 */
    
class App extends Component{ 

    constructor(props){
        super(props);
        this.state = {
            nome: "",
            email: "",
            senha: "",
            erro: ""
        };
        this.cadastrar = this.cadastrar.bind(this);
    }

    /**
     * Comentário para fins de estudo.
     * 
     * Na primeira linha 'desconstruí' o objeto state,
     * associando às variáveis nome, email e senha os
     * valores de state.nome, state.email e state.senha,
     * respectivamente;
     * 
     * event.preventDefault();
     * Evita que a ação padrão que ocorre quando o evento é desparado, 
     * aconteça. Nesse caso, a ação padrão seria limpar os campos do form.
     * 
     */
    cadastrar(event){
        const {nome, email, senha} = this.state;
        if(nome != "" && email != "" && senha != ""){
            alert(`Nome: ${nome} \nEmail: ${email} \nSenha: ${senha}`);
        }
        else{
            this.setState({erro: "Algum campo do form está vazio"});
        }
        event.preventDefault();
    }

    /**
     * {this.state.erro && <p>{this.state.erro}</p>}
     * 
     * Se this.state.erro for truthy, o parágrafo será
     * rederizado.
     * O que é truthy: Tudo que não é falsy.
     * String vazia é falsy.    
     */
    render(){
        return(
            <div>
                <h1>Novo Usuário</h1>
                {this.state.erro && <p>{this.state.erro}</p>}
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input type="text" value={this.state.nome} 
                        onChange={(event) => {this.setState({nome: event.target.value})}}/>
                    <br/>
                    <label>Email:</label> 
                    <input type="email" value={this.state.email} 
                        onChange={(event) => {this.setState({email: event.target.value})}}/>
                    <br/>
                    <label>Senha:</label>
                    <input type="password" value={this.state.senha} 
                        onChange={(event) => {this.setState({senha: event.target.value})}}/>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default App;