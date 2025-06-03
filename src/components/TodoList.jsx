import React from 'react'
import TodoCard from './TodoCard';

export default function TodoList() {
    let todos = [
        "Gym",
        "Groceries",
        "Clean room"
    ];

    return (
        <ul className="main">
            {todos.map((todo, todoIndex) => {
                return (
                    <TodoCard key={todoIndex}>
                        <p>{todo}</p>
                    </TodoCard>
                )
            })}
        </ul>
    )
}
