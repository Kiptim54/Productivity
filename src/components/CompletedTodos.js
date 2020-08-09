import React from 'react';
import PropTypes from 'prop-types';
import { FaPlay, FaPauseCircle } from 'react-icons/fa';
import { MdDelete, MdReplay, MdDoneAll } from 'react-icons/md';

function CompleteTodos(props) {
    const { completedTodos, deleteCompleteTodo, redoCompletedTodo } = props;

    const displayTodos = () => {
      return completedTodos.map((todo) => {
        const { id, name, status } = todo;
        return (
            <div key={id} className={`todoItem ${status}`}>

                <li>{name}</li>
                <span className="control-icons">
                    <MdReplay
                        onClick={()=>redoCompletedTodo(id)}
                        className="redo-icon"
                        color="#FFFFFF"
                        size="25"
                    />
                    <MdDelete
                        onClick={() => deleteCompleteTodo(id)}
                        className="delete-icon"
                        color="#BD1919"
                        size="25"
                    />
                </span>
            </div>
        );
    }) 
    };

    return (
        <div className="CompleteTodos">
            <ul className="completedList">
                {displayTodos()}
            </ul>
        </div>
    );
}

CompleteTodos.propType = {
    CompleteTodos: PropTypes.array,
};

export default CompleteTodos;
