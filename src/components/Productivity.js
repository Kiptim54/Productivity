import React, { useState, useEffect } from 'react';
import Todos from './Todos';
import { v4 as uuidv4 } from 'uuid';
import CompleteTodos from './CompletedTodos';
import UseLocalStorage from './UserLocalStorage';

function Productivity() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [completedTodos, setCompleteTodo] = useState([]);

    // useEffect(()=>{
    //     console.log("the useEffect hook has been called")
    // })

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
    return (
        <div className="Productivity">
            <form onSubmit={(e) => formSubmitted(e)}>
                <input
                    type="text"
                    placeholder="Add Item..."
                    value={todo}
                    onChange={(e) => updateInput(e.target.value)}
                    required
                />
                <button>Enter</button>
            </form>
            <Todos
                todos={todos}
                deleteTodo={deleteTodo}
                addCompleteTodo={addCompleteTodo}
                pauseTodos={pauseTodos}
                unpauseTodos = {unpauseTodos}
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
