import React from 'react';
import PropTypes from 'prop-types';
import { FaPlay, FaPauseCircle } from 'react-icons/fa';
import { MdDelete, MdDoneAll } from 'react-icons/md';
import doneImage from '../done.svg';
function Todos(props) {
    const {
        todos,
        deleteTodo,
        addCompleteTodo,
        pauseTodos,
        unpauseTodos,
        updateTodo,
    } = props;
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
                                <input
                                    type="text"
                                    value={todo.name}
                                    onChange={(e) => updateTodo(e, todo.id)}
                                />
                                {/* <li>{todo.name}</li> */}
                                <span className="control-icons">
                                    <MdDoneAll
                                        onClick={() => addCompleteTodo(todo.id)}
                                        className={
                                            todo.status === 'paused'
                                                ? 'hide complete-icon'
                                                : 'complete-icon'
                                        }
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
                                        data-testid="deleteTodoIcon"
                                    />
                                </span>
                            </div>
                        );
                    })}
                </ul>
            ) : (
                <div className="container">
                    <img
                        src={doneImage}
                        alt="done"
                        className="img-fluid m-auto"
                        width="300px"
                        style={{ display: 'block' }}
                    />

                    <h4
                        style={{
                            color: '#eb5e28',
                            textAlign: 'center',
                            padding: '2%',
                        }}
                        data-testid="todos-empty-container"
                    >
                        no pending items...
                    </h4>
                </div>
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
