import React , {useContext}from 'react'
import { useQuery } from 'react-query'
import ClipLoader from 'react-spinners/ClipLoader'

import readToDosRequest from '../api/readToDosRequest'
import { TodoItem } from '../components/TodoItem'
import { CreateTodoForm } from '../components/CreateTodoForm'
import { TokenContext } from "../App"
export const TodoPage = () => {
    const [token] = useContext(TokenContext);
    const { isLoading, data: todos } = useQuery('todos', () => readToDosRequest(token));
    return (
        <div>      
            <h1>Todo Website</h1>
            {isLoading ? (
                <ClipLoader size={150} />
            ) : (
                todos.map((todo) => (

                    <TodoItem Todo={todo} key={todo.id} />
                )))}

            <CreateTodoForm /> 
        </div>
    )
}