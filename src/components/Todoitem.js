import React, { Component } from 'react'

export class Todoitem extends Component {
    getStyle = () => {
        return {
            border: '2px #eee dashed',
            margin: '0 10px',
            fontSize: '15px',
            padding: '0px',
            background: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }
    
    btnStyle = () => {
        return {
            background: '#ff0000',
            color: '#fff',
            fontSize: '10px',
            border: 'none',
            padding: '3px 7px',
            borderRadius: '100%',
            cursor: 'pointer',
            float: 'right',
            marginRight: '20px'
        }
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {'  '} { title }
                    <button onClick={this.props.deleteTodo.bind(this, id)} style={this.btnStyle()}>X</button>
                </p>
            </div>
        )
    }
}

export default Todoitem
