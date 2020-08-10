import React, { useState, useEffect, createContext, useReducer } from 'react';
import Todos from './Todos';
import { v4 as uuidv4 } from 'uuid';
import CompleteTodos from './CompletedTodos';
import ProgressBar from 'react-bootstrap/ProgressBar';
import useLocalStorage from './useLocalStorage';

const ACTIONS = {
    ADD: 'add',
    DELETE: 'delete',
    EDIT: 'edit',
    PAUSE: 'pause',
    UNPAUSE: 'unpause',
    UPDATE: 'update',
};

const reducer = (state, action) => {
    console.log(state , "this is the state and what we should return");
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.ADD: {
            console.log('in the add reducer function');
            state.reducerTodos = [...state.reducerTodos, payload.Todo];
            console.log(state)
            return state
        }

        case ACTIONS.DELETE: {
            return state.reducerTodos.filter((todo) => todo.id != payload.id);
        }

        case ACTIONS.EDIT: {
            const newTodos = [...state.reducerTodos];
            newTodos.map((todo) => {
                if (todo.id === payload.id) {
                    todo.name = payload.value;
                }
            });
            return newTodos;
        }

        case ACTIONS.PAUSE: {
            const newTodos = [...state.reducerTodos];
            newTodos.map((todo) => {
                if (todo.id === payload.id) {
                    todo.status = 'paused';
                }
            });
            return newTodos;
        }

        case ACTIONS.UNPAUSE: {
            const newTodos = [...state.reducerTodos];
            newTodos.map((todo) => {
                if (todo.id === payload.id) {
                    todo.status = 'new';
                }
            });
            return newTodos;
        }

        default:
            throw new Error('does not match any case');
    }
};

function Productivity() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useLocalStorage('todos', []);
    const [state, dispatch] = useReducer(reducer, {
        reducerTodos: [{ name: 'hehehe', id: 1, status: 'new' }],
        reducercompletedTodos: [],
    });
    const [completedTodos, setCompleteTodo] = useLocalStorage(
        'completedTodos',
        []
    );
    const [completeProgress, setCompleteProgress] = useState(0);
    const [pausedProgress, setPausedProgress] = useState(0);
    const { reducerTodos, reducercompletedTodos } = state;

    useEffect(() => {
        UpdateProgressBar();
    }, []);

    useEffect(() => {
        UpdateProgressBar();
    }, [todos, completedTodos]);

    useEffect(() => {
        console.log('updating reducer todos', reducerTodos);
    }, [state]);

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
        // setTodos(newTodos);
        // const newTodos = [...todos, newTodo];
        console.log('in the submit function');
        dispatch({ type: ACTIONS.ADD, payload: { Todo: newTodo } });
        setTodo('');
    };

    function UpdateProgressBar() {
        // total items to be used to calculate percentage below
        const totalItems = todos.length + completedTodos.length;

        const pausedItemsArr = todos.filter((todo) => todo.status === 'paused');

        const pausedItemsLength = pausedItemsArr.length;
        const completedTodosLength = completedTodos.length;

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
        const item = todos.find((todoItem) => todoItem.id === id);
        item.status = 'complete';
        const newCompleteTodo = [...completedTodos, item];
        setCompleteTodo(newCompleteTodo);

        // 2. delete it from the current todo list: todos
        deleteTodo(id);
    }

    function deleteCompleteTodo(id) {
        const completeTodosCopy = [...completedTodos];
        const filteredList = completeTodosCopy.filter((todo) => todo.id !== id);
        setCompleteTodo(filteredList);
    }

    function redoCompletedTodo(id) {
        // find the selected todo in the completed todo list and move it to the active todo section
        const seletedTodo = completedTodos.find((todo) => todo.id === id);
        seletedTodo.status = 'new';
        setTodos([...todos, seletedTodo]);

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
                        completedTodos.length === 0 && todos.length === 0
                            ? 'progressBar hide'
                            : 'progressBar hide'
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
                    completedTodos={completedTodos}
                    deleteCompleteTodo={deleteCompleteTodo}
                    redoCompletedTodo={redoCompletedTodo}
                />
            </div>
        </div>
    );
}

export default Productivity;
