
const initialState = localStorage.tasks ? JSON.parse(localStorage.getItem('tasks')) : [{ id: '1111', text: "посадить дерево", complete: true }, { id: '2222', text: "построить дом", complete: true }, { id: '3333', text: "воспитать сына", complete: false }]

const addTodo = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIST_ITEM':
            if (document.querySelector('.header-input').value != "") {
                return [
                    ...state,
                    { id: Date.now(), text: document.querySelector('.header-input').value, complete: false }
                ];
            } else return state
        case 'REMOVE_ALL_TASKS':
            return state = []
        case 'REMOVE_TASK':
            return state.filter((item) => item.id != action.payload)
        case 'TOGGLE_COMPLETE':
            state.map((item) => {
                if (item.id === action.payload) {
                    if (item.complete === true) {
                        item.complete = false
                    } else item.complete = true
                }
            })
            return state = state.slice()



        default:
            return state;
    }
}

export default addTodo;