
import React, {useState, useEffect } from 'react'
import axios from 'axios'

const TodoList = () => {
    const [ task, setTask ] = useState([])

    const handleFetch = () => {
        axios.get('https://qudustodo.herokuapp.com/todo/find').then(res => {
            setTask(res.data)
        })
    }

    useEffect(() => {
        handleFetch()
    }, [])
    return (
        <div>
             <h3>Todo List</h3>
                <table style={{marginTop: 20}} className='table table-striped'>
                    <tbody>
                    {task.map((activeTodo, i) => (
                        <>
                        <p>{activeTodo.newTask}</p>
                        <p>{activeTodo.description}</p>
                        </>
                    ))}
                    </tbody>
                </table>
        </div>
    )
}

export default TodoList
