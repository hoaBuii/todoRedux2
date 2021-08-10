let nextTodoId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};
export const addTodo = text => ({
    type:'ADD_TODO',
    id: nextTodoId(),
    text
})

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}