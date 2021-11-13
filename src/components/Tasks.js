import React, { useEffect } from 'react';
import './Tasks.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTask, toggleComplete } from '../actions/addListItem';



function Tasks() {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    //console.log(tasks)

    localStorage.setItem('tasks', JSON.stringify(tasks))


    return (
        <>
            <div className="task-container container">
                {tasks.map((item, index) => {
                    return <div className={item.complete ? "task task--complete" : "task"} id={item.id} key={index + Date.now()}>
                        <button className={item.complete ? "done-checkbox done-checkbox--complete" : "done-checkbox"} onClick={() => dispatch(toggleComplete(item.id))} ></button>
                        <div className={item.complete ? "task-text task-text--complete" : "task-text"}>{index + 1 + ")"} <span>{item.text}</span></div>
                        <button className={item.complete ? "remove-btn remove-btn--complete" : "remove-btn"} onClick={() => dispatch(removeTask(item.id))}>X</button>
                    </div>
                })}
            </div>
        </>
    );
}

export default Tasks