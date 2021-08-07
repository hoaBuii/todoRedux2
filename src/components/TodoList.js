import React from 'react';
import data from './data';
import Todo from './Todo';

const TodoList = () => {
    return (
        <ul style={{margin:'0 auto', listStyle:'none', padding:'10px'}}>
            {data.map((todo)=> {
                return (
                    <Todo {...todo}/>
                );
            })}
        </ul>
    );
}

export default TodoList;