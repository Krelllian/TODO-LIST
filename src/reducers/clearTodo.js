const clearTodo = (state = 0, action) => {
    switch (action.type) {
        case 'REMOVE_ALL_TASKS':
            return state - 1;
        default:
            return state;
    }
}

export default clearTodo;