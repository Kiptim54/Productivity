import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Todos from '../components/Todos';
import Productivity from '../components/Productivity';

describe('testing the todo application', () => {
    const deleteTodo = jest.fn();
    const addCompleteTodo = jest.fn();
    const pauseTodos = jest.fn();
    const unpauseTodos = jest.fn();
    const updateTodo = jest.fn();

    it('should display an svg when no todos exist', () => {
        const { getByTestId, debug } = render(
            <Todos deleteTodo todos={[]} addCompleteTodo />
        );

        expect(getByTestId('todos-empty-container')).toBeInTheDocument();
    });

    it('should render items when todos has items in it', () => {
        const todos = [
            { id: 1, status: 'active', name: 'go for a walk' },
            { id: 2, status: 'active', name: 'finish writing tests' },
        ];
        console.log(deleteTodo);
        console.log(todos.length);
        const { queryByTestId, debug } = render(
            <Productivity>
                <Todos
                    todos={[{ id: 1, status: 'active', name: 'go for a walk' }]}
                    deleteTodo={jest.fn()}
                    addCompleteTodo={jest.fn()}
                />
            </Productivity>
        );

        debug();
        // expect(queryByTestId('todos-empty-container')).toBeNull();
    });
});
