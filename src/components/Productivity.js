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
        setTodos(newtodos);
        setTodo('');
    };

    function deleteTodo(index) {
        const NewTodo = [...todos];
        const filteredTodo = NewTodo.filter((todoItem, i) => {return i !== index })
        setTodos(filteredTodo)
    }

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
            <Todos todos={todos} deleteTodo={deleteTodo} />
        </div>
    );
}

export default Productivity;
