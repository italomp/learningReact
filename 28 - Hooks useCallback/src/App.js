import React, { useState, useEffect, useMemo, useCallback } from 'react';
/**
 * HOOKS
 * Na aula de hoje aprendi a usar o useCallback.
 * 
 * Retorna um callback memorizado.
 * Muito parecido com useMemo, mas useMemo é executado
 * na renderização, o useCalback não.
 * 
 * sintaxe: const nome = useCallback(callback, [state1, state2])
 * Esse callback é o mesmo (mesma instância) em toda renderização,
 * desde que o array de states não mude. Se mudar, o callback será
 * instanciado novamente.
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

  /**
   * Usando useCallback
   */
  const addTask = useCallback((event) => {
    event.preventDefault();
    setTasks([...tasks, input]);
    setInput("");
  }, [input, tasks])


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
