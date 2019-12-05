import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} autoComplete="off" style={{display: 'flex', margin: '0 10px'}}>
                    <input type="text" name="title" placeholder="What do you want to do..." autoComplete="off" style={{ flex: '10', padding: '5px', height: '20px' }} value={this.state.title} onChange={this.onChange}/>
                    <input type="submit" value="Submit" className="btn" style={{ flex: '1', height: '35px !important', color: '#fff', background: '#000' }} />
                </form>
            </div>
        )
    }
}

export default AddTodo;