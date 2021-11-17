import React, { useState } from 'react';
import './HeaderMenu.scss';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, removeAllTasks } from "../actions/addListItem";


function HeaderMenu() {
    const dispatch = useDispatch();

    function trackValue(e) {
        document.querySelector('.header-input').value = e.target.value
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            { dispatch(addTask()); document.querySelector('.header-input').value = "" }
        }
    })
    return (
        <>
            <div className='header'>
                <div className='header_container container'>
                    <div className='header-menu'>
                        <h1>Список задач</h1>
                    </div>
                    <input className='header-input' onChange={trackValue} placeholder="Напишите задачу, которую хотите добавить"></input>
                    <div className='header-btns'>
                        <button className='btn add-task' onClick={() => { dispatch(addTask()); document.querySelector('.header-input').value = "" }}>Добавить задачу</button>
                        <button className='btn remove-all-tasks' onClick={(e) => { dispatch(removeAllTasks()) }}>Убрать все задачи</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderMenu