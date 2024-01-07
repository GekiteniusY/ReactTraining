import React, { useState } from "react";
import "./App.css";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [inputValue, setInputValue] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  // Todoオブジェクトの型を宣言する
  type Todo = {
    inputValue: string;
    id: string;
    checked: boolean;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    // .target.valueで現在の値を取得
    // console.log(e.target.value)

    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    // Sbumit時にページのリロードを回避する
    e.preventDefault();

    const id: string = uuidv4();

    // 新しいTodoを作成
    const newTodo: Todo = {
      // inputValueのプロパティはconst [inputValue, setInputValue] = useState<string>("")のstate
      inputValue: inputValue,
      id: id,
      checked: false,
    };

    setTodos([newTodo, ...todos]);
    setInputValue("");
  };

  const handleEdit = (id: string, inputValue: string) => {
    const newTodos: Todo[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.inputValue = inputValue;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleChecked = (id: string, checked: boolean) => {
    const newTodos: Todo[] = todos.map((todo) => {
      if (todo.id === id) {
        todo.checked = !checked;
      }

      return todo;
    });

    setTodos(newTodos);
  };

  const handleDelete = (id: string) => {
    const newTodos: Todo[] = todos.filter((todo) => todo.id !== id);
    // const newTodos: Todo[] = todos.filter((todo) => {
    //   return todo.id !== id;
    // });

    setTodos(newTodos);
  };

  return (
    <div className='App'>
      <div>
        <h2>Todoリスト with TypeScript</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type='text'
            onChange={(e) => handleChange(e)}
            className='inputText'
          />
          <input
            type='submit'
            value='作成'
            className='submitButton'
          />
        </form>
        <ul className='todoList'>
          {todos.map((todo) => (
            <li key={todo.id}>
              <input
                type='text'
                onChange={(e) => handleEdit(todo.id, e.target.value)}
                value={todo.inputValue}
                className='inputText'
                disabled={todo.checked}
              />
              <input
                type='checkbox'
                onChange={() => handleChecked(todo.id, todo.checked)}
                value='false'
              />
              <button onClick={() => handleDelete(todo.id)}>消</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
