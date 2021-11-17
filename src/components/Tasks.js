import React, { useEffect } from 'react';
import './Tasks.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTask, toggleComplete } from '../actions/addListItem';
import { TransitionGroup, CSSTransition } from "react-transition-group"


function Tasks() {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    localStorage.setItem('tasks', JSON.stringify(tasks))


    return (
        <>

            <div className="task-container container">
                <TransitionGroup>
                    {tasks.map((item, index) => {
                        return <CSSTransition timeout={2000} unmountOnExit>
                            <div className={item.complete ? "task task--complete" : "task"} id={item.id} key={index + Date.now()}>
                                <button className={item.complete ? "done-checkbox done-checkbox--complete" : "done-checkbox"} onClick={() => dispatch(toggleComplete(item.id))} ></button>
                                <div className={item.complete ? "task-text task-text--complete" : "task-text"}>{index + 1 + ")"} <span>{item.text}</span></div>
                                <button className={item.complete ? "remove-btn remove-btn--complete" : "remove-btn"} onClick={() => dispatch(removeTask(item.id))}>X</button>
                            </div>
                        </CSSTransition>
                    })}
                </TransitionGroup>
            </div>
        </>
    );
}

export default Tasks