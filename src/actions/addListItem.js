export const addTask = () => {
    return {
        type: 'ADD_LIST_ITEM'
    }
}
export const removeAllTasks = () => {
    return {
        type: 'REMOVE_ALL_TASKS'
    }
}
export const removeTask = (id) => {
    //console.log(getComputedStyle(e.target.parentElement).display)
    return {
        type: 'REMOVE_TASK',
        payload: id,
        //taskDisplay: getComputedStyle(e.target.parentElement).display
    }
}
export const toggleComplete = (id) => {
    return {
        type: 'TOGGLE_COMPLETE',
        payload: id
    }
}