import Todos from '../components/Todos';
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';



describe("all the test cases to be run in the todo component",()=>{
    test('The file should output "No todos..." if nothing is passed to the todos props', () => {
        expect.assertions(1);
        const emptyTodos = [];
        const { getByText } = render(
            <Todos
                todos={emptyTodos}
                deleteTodo={() => null}
                addCompleteTodo={() => null}
                pauseTodos={() => null}
                unpauseTodos={() => null}
                updateTodo={() => null}
            />
        );
    
        expect(getByText('no pending items...')).toBeInTheDocument();
    });
    
    test('The file should output todos if todos array is not empty', () => {
        expect.assertions(1);
        const TodosList = [
            {
                id: '7susjnsy99',
                name: 'Run this one test in the todo component',
                status: 'new',
            },
        ];
        const { getByText, queryByText } = render(
            <Todos
                addCompleteTodo={() => null}
                deleteTodo={() => null}
                todos={TodosList}
            />
        );
        expect(queryByText('no pending items...')).not.toBeInTheDocument();
    });
})

