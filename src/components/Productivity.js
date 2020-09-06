import React, { useState, useEffect, createContext, useReducer } from 'react';
import Todos from './Todos';
import { v4 as uuidv4 } from 'uuid';
import CompleteTodos from './CompletedTodos';
import ProgressBar from 'react-bootstrap/ProgressBar';
import useLocalStorage from './useLocalStorage';
import reducer, { ACTIONS } from './reducer';

function Productivity() {
    const setLocalStorage = (item) => {
        const storedItem = JSON.parse(localStorage.getItem(item));
        if (storedItem && storedItem != null) {
            return storedItem;
        }
        localStorage.setItem(item, JSON.stringify([]));
        return [];
    };

    const [todo, setTodo] = useState('');
    const [state, dispatch] = useReducer(reducer, {
        reducerTodos: setLocalStorage('reducerTodos'),
        reducercompletedTodos: setLocalStorage('reducercompletedTodos'),
    });
    const [completeProgress, setCompleteProgress] = useState(0);
    const [pausedProgress, setPausedProgress] = useState(0);
    const { reducerTodos, reducercompletedTodos } = state;

    useEffect(() => {
        UpdateProgressBar();
    }, []);

    useEffect(() => {
        UpdateProgressBar();
    }, [reducerTodos, reducercompletedTodos]);

    const updateInput = (input) => {
        setTodo(input);
    };

    const formSubmitted = (e) => {
        e.preventDefault();
        let id = uuidv4();
        let newTodo = {
            id,
            name: todo,
            // TODO:  find a better way to represent todo status
            status: 'new',
        };
        dispatch({ type: ACTIONS.ADD, payload: { Todo: newTodo } });
        setTodo('');
    };

    function UpdateProgressBar() {
        // total items to be used to calculate percentage below
        const totalItems = reducerTodos.length + reducercompletedTodos.length;

        const pausedItemsArr = reducerTodos.filter(
            (todo) => todo.status === 'paused'
        );

        const pausedItemsLength = pausedItemsArr.length;
        const completedTodosLength = reducercompletedTodos.length;

        const pausedPercentage = (100 * pausedItemsLength) / totalItems;
        const completedPercentage = (100 * completedTodosLength) / totalItems;
        setCompleteProgress(completedPercentage);
        setPausedProgress(pausedPercentage);
    }

    function deleteTodo(id) {
        dispatch({ type: ACTIONS.DELETE, payload: { id } });
    }

    function addCompleteTodo(id) {
        // 1. move item to the completed array: completedTodos
        const completedTodo = reducerTodos.find(
            (todoItem) => todoItem.id === id
        );
        completedTodo.status = 'complete';

        dispatch({
            type: ACTIONS.ADDCOMPLETEDTODO,
            payload: { completedTodo },
        });

        // 2. delete it from the current todo list: todos
        deleteTodo(id);
    }

    function deleteCompleteTodo(id) {
        dispatch({ type: ACTIONS.DELETECOMPLETEDTODO, payload: { id } });
    }

    function redoCompletedTodo(id) {
        // find the selected todo in the completed todo list and move it to the active todo section
        const seletedTodo = reducercompletedTodos.find(
            (todo) => todo.id === id
        );
        seletedTodo.status = 'new';
        dispatch({ type: ACTIONS.ADD, payload: { Todo: seletedTodo } });
        // remove from the completed todo list
        deleteCompleteTodo(id);
    }

    function pauseTodos(id) {
        dispatch({ type: ACTIONS.PAUSE, payload: { id } });
    }

    function unpauseTodos(id) {
        dispatch({ type: ACTIONS.UNPAUSE, payload: { id } });
    }

    function updateTodo(e, id) {
        dispatch({
            type: ACTIONS.EDIT,
            payload: { id: id, value: e.target.value },
        });
    }
    return (
        <div className="Productivity row">
            <div className="col-md-12">
                <form
                    onSubmit={formSubmitted}
                    className="form-row justify-content-center"
                >
                    <input
                        type="text"
                        placeholder="Add Item..."
                        value={todo}
                        onChange={(e) => updateInput(e.target.value)}
                        required
                        className="form-control col-md-5 m-2"
                    />
                    <button className="btn col-md-2 m-2">Enter</button>
                </form>
            </div>
            <div className="col-md-12">
                <ProgressBar
                    now={100}
                    className={
                        reducercompletedTodos.length === 0 &&
                        reducerTodos.length === 0
                            ? 'progressBar hide'
                            : 'progressBar'
                    }
                >
                    <ProgressBar
                        variant="warning"
                        now={pausedProgress}
                        key={2}
                    />
                    <ProgressBar
                        variant="success"
                        now={completeProgress}
                        key={1}
                    />
                </ProgressBar>
            </div>
            <div className="col-md-12">
                <Todos
                    todos={reducerTodos}
                    deleteTodo={deleteTodo}
                    addCompleteTodo={addCompleteTodo}
                    pauseTodos={pauseTodos}
                    unpauseTodos={unpauseTodos}
                    updateTodo={updateTodo}
                />
            </div>
            <div className="col-md-12">
                <CompleteTodos
                    completedTodos={reducercompletedTodos}
                    deleteCompleteTodo={deleteCompleteTodo}
                    redoCompletedTodo={redoCompletedTodo}
                />
            </div>
        </div>
    );
}

export default Productivity;
