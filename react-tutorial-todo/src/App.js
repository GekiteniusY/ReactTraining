import { useState, useRef } from "react";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "Todo1", completed: false },
    { id: 2, name: "Todo2", completed: false },
  ]);

  const todoNameRef = useRef();

  const handleAddTodo = () => {
    // タスクを追加する
    // document.getById()で取得することができるものと同じようなオブジェクト
    // console.log(todoNameRef);
    // console.log(todoNameRef.current.value);

    const name = todoNameRef.current.value;
    console.log(name);

    if (name === "") return;

    const newId = uuidv4();
    console.log(newId);
    setTodos((prevTodos) => {
      // 既存の配列に、{ id: 1, name: name, completed: false }を追加する

      return [...prevTodos, { id: newId, name: name, completed: false }];
    });

    // 入力欄をクリア
    todoNameRef.current.value = null;
  };

  const toggleTodo = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  const handleClear = () => {
    // !todo.completed: チェックボックスがtrue
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  // {todos.filter((todo) => !todo.completed).length}が最新の値になるのは
  // toggleTodoでsetTodos()をコールしていて、再レンダリングがされるため
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input type="text" ref={todoNameRef}></input>
      <button onClick={handleAddTodo}>タスクを追加</button>
      <button onClick={handleClear}>完了したタスクの削除</button>
      <div>残りのタスク: {todos.filter((todo) => !todo.completed).length}</div>
    </>
  );
}

export default App;
