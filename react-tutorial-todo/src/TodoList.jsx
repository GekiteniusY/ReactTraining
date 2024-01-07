
import React from 'react'
import Todo from './Todo' ;

// Todosの要素に対してイテレーティブにアクセスし、Todoコンポーネントとして表示する
export const TodoList = ({todos, toggleTodo}) => {
  // console.log(todos)
  return todos.map((todo) => (<Todo todo={todo} key={todo.id} toggleTodo={toggleTodo}/>))
}

export default TodoList

