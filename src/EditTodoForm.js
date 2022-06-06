import React from 'react'
import { TextField } from '@mui/material'
import useInputState from './hooks/useInputState'

export default function EditTodoForm({ editTodo, id, task, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(task);
    return (
        <form onSubmit={e => {
        e.preventDefault();
        editTodo(id, value);
        reset();
        toggleEditForm(); 
        }}
        style={{marginLeft: '1rem', width: '100%'}}>
            <TextField
                value={value}
                onChange={handleChange}
                margin='normal'
                fullWidth
                autoFocus
            />
        </form>

    )
}