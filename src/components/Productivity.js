import React, { useState } from 'react';
import Todos from './Todos';

function Productivity() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const updateInput = (input) => {
        setTodo(input);
    };

    const formSubmitted = (e) => {
        e.preventDefault();
        const newtodos = [...todos, todo];
        console.log(newtodos);
        setTodos(newtodos);
        setTodo('');
    };

    return (
        <div className="Productivity">
            <form onSubmit={(e) => formSubmitted(e)}>
                <input
                    type="text"
                    placeholder="Add Item..."
                    value={todo}
                    onChange={(e) => updateInput(e.target.value)}
                    required
                />
                <button>Enter</button>
            </form>
            <Todos todos={todos} />
        </div>
    );
}

export default Productivity;
