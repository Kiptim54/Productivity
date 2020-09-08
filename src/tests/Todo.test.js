import React from 'react';
import { render, fireEvent, waitFor } from './test-utils';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';

import Productivity from '../components/Productivity';

// beforeEach(() => window.localStorage.clear());

describe('testing the todo application', () => {
    it('should display an svg when no todos exist', () => {
        const { getByTestId, debug } = render(<Productivity />);
        expect(getByTestId('todos-empty-container')).toBeInTheDocument();
    });

    it('should render items when todos has items in it', () => {
        //ARRANGE
        const { getByTestId, getByText, queryByTestId } = render(
            <Productivity />
        );
        const inputForm = getByTestId('todo-input');
        const submitButton = getByText('Enter');

        //ACT
        userEvent.type(inputForm, 'this is the new todo');
        fireEvent.submit(submitButton);
        const localtodos = JSON.parse(
            window.localStorage.getItem('reducerTodos')
        );

        //ASSERT
        expect(queryByTestId('todos-empty-container')).toBeNull();
        expect(localtodos[0].name).toBe('this is the new todo');
    });

    it('should delete existing todos', async () => {
        //ARRANGE
        const { getByTestId, debug } = render(<Productivity />);

        const deleteTodo = getByTestId('deleteTodoIcon');
        // const localtodos = JSON.parse(
        //     window.localStorage.getItem('reducerTodos')
        // );

        // //ACT
        fireEvent.click(deleteTodo);

        //ASSERT
        // debug();
        expect(getByTestId('todos-empty-container')).toBeInTheDocument();
    });
});
