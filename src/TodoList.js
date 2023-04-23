import React from "react";
import { Paper } from "@mui/material";
import { List } from "@mui/material";
import { Divider } from "@mui/material";
import Todo from "./Todo";

export default function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  return (
    <List>
      {todos.map((todo, i) => (
        <>
          <Paper>
            <Todo
              id={todo.id}
              task={todo.task}
              key={todo.id}
              completed={todo.completed}
              removeTodo={removeTodo}
              toggleTodo={toggleTodo}
              editTodo={editTodo}
            />
            {i < todos.lenght && <Divider />}
          </Paper>
        </>
      ))}
    </List>
  );
}
