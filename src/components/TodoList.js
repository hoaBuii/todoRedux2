import React from 'react';
import { connect, useSelector } from 'react-redux';
import data from './data';
import Todo from './Todo';
import { VisibilityFilters } from '../actions';

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

const filterTodoList = (todos, filterType) => {
    debugger;
    switch (filterType) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        default:
            return todos;
    }
}

const mapStatetoProps = state => {
    return {data: filterTodoList(state.todos,state.visibilityFilter)};
}

export default connect(mapStatetoProps)(TodoList);