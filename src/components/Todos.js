import React from 'react';

function Todos(props) {
    const { todos } = props;

    const displayTodos = (todos) => {
        todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
        });
    };
    return (
        <div className="Todos">
            {todos.length >= 1 ? (
                <ul className="todosList">
                    {todos.map((todo) => (
                        <div key={todo} className="todoItem">
                            <li>{todo}</li>
                            <span className="control-icons">
                                <img src={require('../images/check.svg')} alt="finished" width="25" height="25" />
                                <img src={require('../images/pause.svg')} alt="pause" width="25" height="25" />
                                <img src={require('../images/remove.svg')} alt="remove" width="25" height="25" />
                            </span>
                        </div>
                    ))}
                </ul>
            ) : (
                <h3 style={{ color: '#eb5e28', textAlign: 'center' }}>
                    No todos...
                </h3>
            )}
        </div>
    );
}

export default Todos;
