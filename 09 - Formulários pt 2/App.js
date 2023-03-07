import './App.css';
import { Component } from 'react';

const Gender = {
  male: "Masculino",
  female: "Feminino"
}

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
        gender: Gender.male
      }
    }
  }

  // Função compacta que serve para todos os dados do input.
  // Ela evita que eu crie um método Set para cada input
  setForm(event){
    let form = this.state.form;
    form[event.target.name] = event.target.value;
    this.setState({form: form});
  }

  register(event){
    alert(`email: ${this.state.form.email} \n senha: ${this.state.form.password} \n sexo: ${this.state.form.gender}`);
    event.preventDefault();
  }

  /**
   * O onSubmit do <form> é acionado pelo click no botão do tipo submit, que está dentro dele.
   * @returns
   */
  render(){
    return(
      <div className="App">
        <h2>Novo Usuário</h2>
        <label>E-mail: </label>
        <input 
          type="email" 
          name="email" 
          onChange={(event) => this.setForm(event)} /> <br/>

        <form onSubmit={event => this.register(event)}>
          <label>Senha: </label>
          <input 
            type="password" 
            name="password"
            onChange={(event) => this.setForm(event)} /> <br/>

          <label>Sexo: </label>
          <select name="gender" onChange={(event) => this.setForm(event)}>
            <option value={Gender.male} >{Gender.male}</option>
            <option value={Gender.female} >{Gender.female}</option>
          </select>
          <button type="submit">submit</button>
        </form>
        
        <div>
          {"email: " + this.state.form.email}
          {"senha: " + this.state.form.password}
          {"sexo: " + this.state.form.gender}
        </div>
      </div>
    );
  }
}