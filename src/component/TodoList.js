import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Todo = props => (
    <tr>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
            
            <Link to={"/edit/"+props.todo._id}>Edit</Link>
        </td>
        <td>
            <Link to={'/edit/'+props.todo._id}>Print</Link>
        </td>
    </tr>
)


export default class TodoList extends Component{
    constructor(props) {
        super(props)

        this.state = {
            todos: []
        }
    }

    componentDidMount() {
        axios.get('https://qudustodo.herokuapp.com/todo/find')
        .then(response => {
            this.setState({
                todos: response.data
            })
        }).catch(err => {
            console.log(err)
        })
    }

    todoList() {
        return this.state.todos.map((currentTodo, i) => {
            return <Todo todo={currentTodo} key={i} />
        })
    }
    render() {
        return(
            <div>
                <h3>Todo List</h3>
                <table style={{marginTop: 20}} className='table table-striped'>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Responsible</th>
                        <th>Priority</th>
                        <th>Action</th>
                        <th>Print</th>
                    </tr>
                </thead>
                    <tbody>
                        { this.todoList() }
                    </tbody>
                </table>
            </div>
        )
    }
}