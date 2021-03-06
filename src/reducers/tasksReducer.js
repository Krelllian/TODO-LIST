
const initialState = localStorage.tasks ? JSON.parse(localStorage.getItem('tasks')) : [{ id: '1111', text: "посадить дерево", complete: false }, { id: '2222', text: "построить дом", complete: false }, { id: '3333', text: "воспитать сына", complete: true }]

const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_LIST_ITEM':
            if (document.querySelector('.header-input').value != "") {
                return [
                    { id: Date.now(), text: document.querySelector('.header-input').value, complete: false },
                    ...state,
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
                        item.complete = false;
                    } else item.complete = true
                }
            })
            return state = state.slice().sort((a, b) => a.complete - b.complete)


        default:
            return state;
    }
}

export default tasksReducer;