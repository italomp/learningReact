import React, { useState, useEffect, useMemo } from 'react';
/**
 * HOOKS
 * Na aula de hoje aprendi a usar o useMemo.
 * useMemo é um hook que retorna um valor memorizado
 * e evita computações desnecessárias na hora da renderização.
 * const variavel = useMemo(callback, arrayDeProperties);
 * 
 * Toda vez que o valor de uma das properties do array for
 * alterado, o use memo calcula e memoriza um novo valor;
 * 
 * Enquanto não houver alteração no array, useMemo não executa
 * o callback novamente, apenas retorna o valor memorizado.
 * 
 */
function App() {

  const [tasks, setTasks] = useState([
    "Comparecer à reunião",
    "Pagar conta de Luz"
  ]);

  const [input, setInput] = useState("");

  useEffect(() => {
    alert("Bem vindo!");

    return () => alert("Unmount Component")
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks]);

  function addTask(event){
    event.preventDefault();
    setTasks([...tasks, input]);
    setInput("");
  }

  /**
   * Usando useMemo
   */
  const amountTasks = useMemo(() => tasks.length, [tasks]);

  return (
    <div>
      <ul>
        {tasks.map(task => 
          <li key={task}>{task}</li>
        )}
      </ul> <br/>
      <strong>Você tem {amountTasks} tarefas!</strong> <br/>
      <form onSubmit={addTask}>
        <input type="text" value={input} onChange={event => setInput(event.target.value)}/>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default App;
