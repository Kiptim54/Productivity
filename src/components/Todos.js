import React from 'react';
import PropTypes from 'prop-types';
import { FaPlay, FaPauseCircle } from 'react-icons/fa';
import { MdDelete, MdReplay, MdDoneAll } from 'react-icons/md';

function Todos(props) {
    const {
        todos,
        deleteTodo,
        addCompleteTodo,
        pauseTodos,
        unpauseTodos,
        updateTodo
    } = props;

    // const displayTodos = (todos) => {
    //     todos.map((todo) => {
    //         return <li key={todo.id}>{todo.name}</li>;
    //     });
    // };

    return (
        <div className="Todos">
            {todos.length >= 1 ? (
                <ul className="todosList">
                    {todos.map((todo) => {
                        return (
                            <div
                                key={todo.id}
                                className={`todoItem ${todo.status}`}
                            >
                                <input type="text" value={todo.name} onChange={(e)=>updateTodo(e, todo.id)}/>
                                {/* <li>{todo.name}</li> */}
                                <span className="control-icons">
                                    <MdDoneAll
                                        onClick={() => addCompleteTodo(todo.id)}
                                        className={todo.status === 'paused' ? "hide complete-icon" :"complete-icon"}
                                        color="#4bb543"
                                        size="25"
                                    />
                                    {todo.status === 'paused' ? (
                                        <FaPlay
                                            onClick={() =>
                                                unpauseTodos(todo.id)
                                            }
                                            className="replay-icon"
                                            size="20"
                                        />
                                    ) : (
                                        <FaPauseCircle
                                            onClick={() => pauseTodos(todo.id)}
                                            className="pause-icon"
                                            color="#F99245"
                                            size="25"
                                        />
                                    )}
                                    <MdDelete
                                        onClick={() => deleteTodo(todo.id)}
                                        className="delete-icon"
                                        color="#BD1919"
                                        size="25"
                                    />
                                </span>
                            </div>
                        );
                    })}
                </ul>
            ) : (
                <h5
                    style={{
                        color: '#eb5e28',
                        textAlign: 'center',
                        padding: '2%',
                    }}
                >
                    No active todos...
                </h5>
            )}
        </div>
    );
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    addCompleteTodo: PropTypes.func.isRequired,
};

export default Todos;
