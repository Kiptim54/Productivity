import React, { useState, useEffect, useContext } from 'react';
import Todos from './Todos';
import { v4 as uuidv4 } from 'uuid';
import CompleteTodos from './CompletedTodos';
import UseLocalStorage from './useLocalStorage';
import ProgressBar from 'react-bootstrap/ProgressBar';
import useLocalStorage from './useLocalStorage';

function Productivity() {


    const localStorage = window.localStorage;
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompleteTodo] = useState([]);
    const [completeProgress, setCompleteProgress] = useState(0);
    const [pausedProgress, setPausedProgress] = useState(0);

    useEffect(() => {

        const todosExist = localStorage.getItem('todos');
        const completedTodosExist = localStorage.getItem('completedTodos');

        if (todosExist) {
            setTodos(JSON.parse(todosExist));
        }

        if (completedTodosExist) {
            setCompleteTodo(JSON.parse(completedTodosExist));
        }
        UpdateProgressBar();
    }, []);

    useEffect(() => {

        // update localStorage when any of the two arrays changes
        localStorage.setItem('todos', JSON.stringify(todos))
        UpdateProgressBar();
    }, [todos]);

    useEffect(() => {

        // update localStorage when any of the two arrays changes
        localStorage.setItem('completedTodos', JSON.stringify(completedTodos))
        UpdateProgressBar();

    }, [completedTodos]);




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
        const newTodos = [...todos, newTodo];
        setTodo('');
        setTodos(newTodos);
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
        const NewTodo = [...todos];
        const filteredTodo = NewTodo.filter((todoItem) => {
            return todoItem.id !== id;
        });
        setTodos(filteredTodo);
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
        const selectedTodo = todos.find((todo) => todo.id == id);
        selectedTodo.status = 'paused';
        const filterTodos = todos.filter((todo) => todo.id !== id);
        setTodos([...filterTodos, selectedTodo]);
    }

    function unpauseTodos(id) {
        const selectedTodo = todos.find((todo) => todo.id == id);
        selectedTodo.status = 'new';
        const filterTodos = todos.filter((todo) => todo.id !== id);
        setTodos([...filterTodos, selectedTodo]);
    }

    function updateTodo(e, id) {
        // 1. create shallow copy of the array
        const NewTodos = [...todos];

        // 2 Find item in list and it's index position and edit it
        const editedTodos = [];
        NewTodos.map((todo) => {
            if (todo.id === id) {
                todo.name = e.target.value;
            }
            return editedTodos.push(todo);
        });
        // 3. reset the todos
        setTodos(editedTodos);
    }
    return (
        <div className="Productivity">
            <form onSubmit={(e) => formSubmitted(e)}>
                <input
                    type="text"
                    placeholder="Add Item..."
                    value={todo}
                    onChange={(e) => updateInput(e.target.value)}
                    required
                    className="form-control"
                />
                <button className="btn">Enter</button>
            </form>

            <ProgressBar
                now={100}
                className={
                    completedTodos.length === 0 && todos.length === 0
                        ? 'progressBar hide'
                        : 'progressBar'
                }
            >
                <ProgressBar variant="warning" now={pausedProgress} key={2} />
                <ProgressBar variant="success" now={completeProgress} key={1} />
            </ProgressBar>

            <Todos
                todos={todos}
                deleteTodo={deleteTodo}
                addCompleteTodo={addCompleteTodo}
                pauseTodos={pauseTodos}
                unpauseTodos={unpauseTodos}
                updateTodo={updateTodo}
            />
            <CompleteTodos
                completedTodos={completedTodos}
                deleteCompleteTodo={deleteCompleteTodo}
                redoCompletedTodo={redoCompletedTodo}
            />
        </div>
    );
}

export default Productivity;
