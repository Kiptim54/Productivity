import React from 'react';
import PropTypes from 'prop-types';
import { FaPlay, FaPauseCircle } from "react-icons/fa";

function Todos(props) {
    const { todos, deleteTodo, addCompleteTodo, pauseTodos } = props;

    // const displayTodos = (todos) => {
    //     todos.map((todo) => {
    //         return <li key={todo.id}>{todo.name}</li>;
    //     });
    // };

    return (
        <div className="Todos">
            {todos.length >= 1 ? (
                <ul className="todosList">
                    {todos.map((todo) =>{ 
                        return(
                        <div key={todo.id} className={`todoItem ${todo.status}`}>
                            <li>{todo.name}</li>
                            <span className="control-icons">
                                <img
                                    src={require('../images/check.svg')}
                                    alt="finished"
                                    width="25"
                                    height="25"
                                    onClick={() => addCompleteTodo(todo.id)}
                                />
                                {todo.status === 'paused'?
                                 <FaPlay
                                  value={{ color: 'blue', size: '50px' }}
                                  onClick={()=> pauseTodos(todo.id)}
                                 />
                                 : 
                                 <FaPauseCircle
                                 value={{ color: 'blue', size: '50px' }}
                                  onClick={()=> pauseTodos(todo.id)}
                                 />
                                 }
                                {/* <img
                                    src={src}
                                    alt="pause"
                                    width="25"
                                    height="25"
                                    onClick={()=> pauseTodos(todo.id)}
                                /> */}
                                {/* <img
                                    src={require('../images/remove.svg')}
                                    alt="remove"
                                    width="25"
                                    height="25"
                                    onClick={() => deleteTodo(todo.id)}
                                /> */}
                            </span>
                        </div>
                        )}
                    )}
                </ul>
            ) : (
                <h3 style={{ color: '#eb5e28', textAlign: 'center', padding:'2%' }}>
                    No active todos...
                </h3>
            )}
        </div>
    );
}


Todos.propTypes = {
    todos: PropTypes.array.isRequired, 
    deleteTodo: PropTypes.func.isRequired, 
    addCompleteTodo: PropTypes.func.isRequired
}

export default Todos;
