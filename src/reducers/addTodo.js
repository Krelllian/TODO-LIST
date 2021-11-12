
//state = ["посадить сына", "вырастить дом", "постороить дерево"]

const addTodo = (state = ["посадить сына", "вырастить дом", "постороить дерево"], action) => {
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
            return state.slice().filter((el, i) => i != action.payload)
        default:
            return state;
    }
}

export default addTodo;