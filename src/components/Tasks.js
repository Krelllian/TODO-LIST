import React from 'react';
import './Tasks.scss';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeTask } from '../actions/addListItem';


function Tasks() {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();
    function addLineThrough(e) {
        if (e.target.nextSibling.style.textDecorationLine === 'line-through') {
            e.target.nextSibling.style.textDecorationLine = "";
        } else e.target.nextSibling.style.textDecorationLine = 'line-through';
    }
    function changeTaskColors(e) {
        if (e.target.nextSibling.nextSibling.style.backgroundColor === "") {
            e.target.nextSibling.nextSibling.style.backgroundColor = 'gray'
        } else if (e.target.nextSibling.nextSibling.style.backgroundColor = 'gray') {
            e.target.nextSibling.nextSibling.style.backgroundColor = ''
        }

        if (e.target.parentElement.style.borderColor === '') {
            e.target.parentElement.style.borderColor = 'gray';
            e.target.style.backgroundColor = 'gray';
        } else if (e.target.parentElement.style.borderColor === 'gray') {
            e.target.parentElement.style.borderColor = '';
            e.target.style.backgroundColor = '';
        }
    }

    function getIndexOfChild(item) {
        let child = item;

        return Array.from(child.parentNode.children).indexOf(child);
    }


    return (
        <>
            <div className="task-container container">
                {tasks.map((item, index) => {
                    return <div className="task" key={index + Date.now()}>
                        <button className="done-checkbox" onClick={(e) => { addLineThrough(e); changeTaskColors(e) }} ></button>
                        <div className="task-text">{index + 1}) <span>Задача:</span> {item}</div>
                        <button className="remove-btn" onClick={(e) => { e.target.parentElement.style.display = 'none' }, (e) => dispatch(removeTask(index))}>Удалить</button>
                    </div>
                })}
            </div>
        </>
    );
}

export default Tasks