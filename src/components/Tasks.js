import React from 'react';
import './Tasks.scss';
import { useSelector } from 'react-redux';



function Tasks() {
    const tasks = useSelector(state => state.tasks);
    function addLineThrough(e) {
        if (e.target.nextSibling.style.textDecorationLine === 'line-through') {
            e.target.nextSibling.style.textDecorationLine = "";
        } else e.target.nextSibling.style.textDecorationLine = 'line-through';
    }

    return (
        <>
            <div className="task-container container">
                {tasks.map((item) => {
                    return <div className="task">
                        <button className="done-checkbox" onClick={addLineThrough} >Выполнено</button>
                        <div className="task-text">{item}</div>
                        <button className="remove-btn" >Удалить</button>
                    </div>
                })}
            </div>
        </>
    );
}

export default Tasks