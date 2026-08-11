
// import { useState } from "react";
// import { useTodo } from "../11TodoContextLocal";

// function Todo() {
//   const [text, setText] = useState("");

//   const { todos, addTodo, deleteTodo } = useTodo();

//   const handleAdd = () => {
//     if (text.trim() === "") return;

//     addTodo(text);
//     setText("");
//   };

//   return (
//     <div>
//       <h1>Todo App</h1>

//       <input
//         type="text"
//         placeholder="Enter todo"
//         value={text}
//         onChange={(e) => setText(e.target.value)}
//       />

//       <button onClick={handleAdd}>Add</button>

//       <ul>
//         {todos.map((todo) => (
//           <li key={todo.id}>
//             {todo.text}

//             <button onClick={() => deleteTodo(todo.id)}>
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Todo;

// 12
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../todoSlice";

function Todo() {
  const [text, setText] = useState("");

  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim() === "") return;

    dispatch(addTodo(text));
    setText("");
  };

  return (
    <div>
      <h1>Todo App</h1>

      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Todo"
      />

      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}

            <button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;