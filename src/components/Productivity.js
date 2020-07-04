import React, { useState } from 'react';
import Todos from './Todos';

function Productivity() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const updateInput = (input) => {
        setTodo(input);
    };

    return (
        <div className="Productivity">
            <form onSubmit={() => console.log('submitted')}>
                <input
                    type="text"
                    placeholder="Add Item..."
                    value={todo}
                    onChange={(e) => updateInput(e.target.value)}
                />
                <button>Enter</button>
            </form>
            <Todos todos={todos} />
        </div>
    );
}

export default Productivity;
