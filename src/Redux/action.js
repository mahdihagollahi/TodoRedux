import {ADD_TODO,EDIT_TODO, MARK_TODO , DELETE_TODO} from './actionType'

export const addTodo = (title) => ({
    type : ADD_TODO ,
    payload : { id: Date.now() , title}
})


export const editTodo = (id , title) => ({
    type : EDIT_TODO,
    payload : {id , title}
})


export const markTodo = (id) => ({
    type : MARK_TODO,
    payload : {id}
})


export const deleteTodo = (id) => ({
    type : DELETE_TODO,
    payload : {id}
})

