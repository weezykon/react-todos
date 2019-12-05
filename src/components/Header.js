import React from 'react'
import { Link } from 'react-router-dom';

const header = () => {
    return {
        border: 'none',
        padding: '10px',
        textAlign: 'center',
        margin: '0'
    }
}

export default function Header() {
    return (
        <header>
            <h1 style={header()}>Todolist</h1>
            <Link  to="/">Home</Link> | <Link  to="/about">About</Link>
        </header>
    )
}
