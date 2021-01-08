import React, { useState, useEffect } from 'react';
/**
 * HOOKS
 * Na aula de hoje aprendi a usar o useEffect.
 * Como ele, posso adicionar ciclos de vida ao
 * componente que o utiliza.
 * Abaixo estão as definições do useEffect de modo
 * que substitua os métodos: componentDidMount(),
 * componentDidUpdate() e componentWillUnmount.
 */
function App() {

  const [tasks, setTasks] = useState([
    "Comparecer à reunião",
    "Pagar conta de Luz"
  ]);

  const [input, setInput] = useState("");

  /**
   * Definindo use effect de modo que substitua o
   * componentDidMount().
   * Para isso deixo o segunto parâmetro passado
   * como um array vazio.
   */
  useEffect(() => {
    alert("Bem vindo!");

    /**
     * Essa função de retorno é executada quando o
     * componente é desmonstado.
     * Subistitui o componentWillUnmount()
     */
    return () => {}
  }, []);

  /**
   * Definindo o useEffect de modo que substitua o
   * componentDidUpdate().
   * para isso deixo o segundo parâmetro passado
   * como um array contendo o state monitorado.
   */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  function addTask(event){
    event.preventDefault();
    setTasks([...tasks, input]);
    setInput("");
  }

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
