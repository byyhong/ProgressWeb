import React, {useContext} from 'react';
import {useQueryClient, useMutation} from 'react-query';
import updateTodosRequest from '../api/updateTodosRequest';
import deleteTodosRequest from '../api/deleteTodosRequest';
import {debounce} from 'lodash';
import { useCallback } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {TokenContext} from '../App'
export const TodoItem = ({Todo}) =>{
    const [text, setText] = useState(Todo.text);
    const queryClient = useQueryClient();
    const [token, setToken] = useContext(TokenContext, token);

    const { mutate: updatedTodo } = useMutation((updatedTodo)=>{
        return updateTodosRequest(updatedTodo, token);
    }, {
        onSettled:()=> {
            queryClient.invalidateQueries("todos");
        }
    }) 
    const debounceUpdateTodo = useCallback(debounce(updatedTodo, 1000), [updatedTodo]); 
    const { mutate: deleteTodo } = useMutation((deleteTodo) => {
        return deleteTodosRequest(deleteTodo, token);
    }, {
        onSettled: () => {
            queryClient.invalidateQueries("todos");
        }
    })
    useEffect(()=>{
        
    })

    return (
        <div>
            <input checked={Todo.completed} type='checkbox' onChange={() => updatedTodo({...Todo, completed: !Todo.completed})} />
            <input type='text' value = {text} onChange={(e) => setText(e.target.value)} />
            <button onClick={()=>deleteTodo(Todo)}> delete</button>
        </div>
    )
}