import React from 'react';

function Todos(props) {
    const { todos } = props;

    const displayTodos = (todos) => {
        console.log('this is a list of all the todos', todos);
        props.todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });
    };
    return (
        <div className="Todos">
            {todos.length >= 1 ? (
                <ul class="todosList">
                    {props.todos.map((todo) => (
                        <li key={todo}>{todo}</li>
                    ))}
                </ul>
            ) : (
                <h3 style={{ color: 'orange', textAlign: 'center' }}>
                    No todos...
                </h3>
            )}
        </div>
    );
}

export default Todos;
