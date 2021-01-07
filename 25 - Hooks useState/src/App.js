import React, { useState } from 'react';
/**
 * HOOKS
 * Na aula de hoje aprendi sobre useState.
 * Com ele podemos adicionar states e ciclos
 * de vida aos components definidos através
 * de funções.
 * 
 * Podemos também remover o monte de properties
 * que ficavam dentro do state e criar um state
 * para cada uma das propriedes (inicialmente
 * prefiro o jeito antigo, vamos ver...)
 * 
 * Nesse código vemos como importar useState, o
 * definir state, usar state
 */
function App() {

  //definindo um state
  const [tasks, setTasks] = useState([
    "Comparecer à reunião",
    "Pagar conta de Luz"
  ]);

  //definindo um state
  const [input, setInput] = useState("");

  function addTask(event){
    event.preventDefault();
    setTasks([...tasks, input]);
    setInput("");
  }

  //abaixo uso o state acessando-o diretamente pelo nome e
  //tratando-o conforme o tipo/estrutura de dado que ele armazena
  return (
    <div>
      <ul>
        {tasks.map(task => 
          <li key={task}>{task}</li>
        )}
      </ul>
      <form onSubmit={addTask}>
        <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
        <button type="submit">Add</button>
      </form>
      
    </div>
  );
}

export default App;
