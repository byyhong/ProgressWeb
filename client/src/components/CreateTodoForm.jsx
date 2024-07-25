import React, {useContext} from 'react';
import { useMutation, useQueryClient } from 'react-query';
import  createTodosRequest  from '../api/createTodosRequest'
import { useState } from "react";
import {TokenContext} from '../App'
export const CreateTodoForm = ()=>{
    const queryClient = useQueryClient();
    const [token, setToken] = useContext(TokenContext);

    const [text, setText] = useState('');
    const { mutate: createTodo } = useMutation((updatedTodo) => {
        return createTodosRequest(updatedTodo, token);
    }, {
        onSettled: () => {
            queryClient.invalidateQueries("todos");
        }
    }) 
    return (
        
        <form onSubmit={(e) => {
            e.preventDefault();
            if(!text){
                return;
            }
            createTodo({
                text,
            })
            setText('')
        }} >
            <input onChange = {(e) => setText(e.target.value)} value = {text} type='text' />
            <button>Create</button>
        </form>
    )
}