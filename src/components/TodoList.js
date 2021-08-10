import React from 'react';
import { connect, useSelector } from 'react-redux';
import data from './data';
import Todo from './Todo';

const TodoList = (data) => {
    let todos = data?.data;
    const ID = () => {
        return '_' + Math.random().toString(36).substr(2, 9);
    };
    
    return (
        <ul style={{listStyle:'none', padding:'0'}}>
            {(todos && todos.length!=0) && todos.map((todo)=> {
                return (
                    <Todo key={todo.id} {...todo}/>
                );
            })}
        </ul>
    );
}

const mapStatetoProps = state => {
    return {data: state?.todos};
}

export default connect(mapStatetoProps)(TodoList);