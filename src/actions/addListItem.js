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
export const removeTask = (index, e) => {
    //console.log(getComputedStyle(e.target.parentElement).display)
    return {
        type: 'REMOVE_TASK',
        payload: index,
        //taskDisplay: getComputedStyle(e.target.parentElement).display
    }
}