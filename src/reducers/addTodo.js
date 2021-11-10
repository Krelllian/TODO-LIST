

const addTodo = (state = ["wwwww  w ww w w ", "llll lllll"], action) => {
    switch (action.type) {
        case 'ADD_LIST_ITEM':
            if (document.querySelector('.header-input').value != "") {
                return [
                    ...state,
                    document.querySelector('.header-input').value
                ];
            } else return state
        case 'REMOVE_ALL_TASKS':
            return state = []
        case 'REMOVE_TASK':
        // return [...state.filter(key != )
        default:
            return state;
    }
}

export default addTodo;