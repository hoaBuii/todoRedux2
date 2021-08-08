import React from 'react';
import {connect, useSelector} from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const Addtodo = () => {
    let input='', 
    dispatch = useDispatch();
    
    return(
        <div>
            <form onSubmit={
                e => {
                e.preventDefault();
                if(!input.value.trim()){
                    return;
                }
                dispatch(addTodo(input.value));
                input.value = '';
            }}>
                <input type='text' placeholder='Please add your to do' name='toDo' id='toDo' 
                ref={node => input=node}></input>
                <button type='submit'>Add Todo</button>
            </form>
        </div>
    );
}

export default Addtodo;