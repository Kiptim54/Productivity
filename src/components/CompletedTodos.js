import React from 'react';
import PropTypes from 'prop-types';

function CompleteTodos(props) {
    const { completedTodos, deleteCompleteTodo, redoCompletedTodo } = props;

    const displayTodos = () => {
        completedTodos.map((todo) => {
            const { id, name, status } = todo;
            return (
                <div key={id} className={`todoItem ${status}`}>
                    <li>{name} This is where the name should be</li>
                    <span className="control-icons">
                        <img
                            src={require('../images/pause.svg')}
                            alt="pause"
                            width="25"
                            height="25"
                        />
                        <img
                            src={require('../images/remove.svg')}
                            alt="remove"
                            width="25"
                            height="25"
                            onClick={() => deleteTodo(id)}
                        />
                    </span>
                </div>
            );
        });
    };

    return (
        <div className="CompleteTodos">
            <ul className="completedList">
                {completedTodos.map((todo) => {
                    const { id, name, status } = todo;
                    return (
                        <div key={id} className={`todoItem ${status}`}>
                            <li>{name}</li>
                            <span className="control-icons">
                                <img
                                    src={require('../images/redo.svg')}
                                    alt="redo"
                                    width="25"
                                    height="25"
                                    onClick={()=>redoCompletedTodo(id)}
                                />
                                <img
                                    src={require('../images/remove.svg')}
                                    alt="remove"
                                    width="25"
                                    height="25"
                                    onClick={() => deleteCompleteTodo(id)}
                                />
                            </span>
                        </div>
                    );
                })}
            </ul>
        </div>
    );
}

CompleteTodos.propType = {
    CompleteTodos: PropTypes.array,
};

export default CompleteTodos;
