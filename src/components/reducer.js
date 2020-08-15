export const ACTIONS = {
    ADD: 'add',
    DELETE: 'delete',
    EDIT: 'edit',
    PAUSE: 'pause',
    UNPAUSE: 'unpause',
    UPDATE: 'update',
    ADDCOMPLETEDTODO: 'addCompletedTodo',
    DELETECOMPLETEDTODO: 'deletedCompletedTodo',
};

const reducer = (state, action) => {
    const localStorage = window.localStorage;
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.ADD: {
            const reducerTodos = [...state.reducerTodos, payload.Todo];
            localStorage.setItem('reducerTodos', JSON.stringify(reducerTodos));
            return { ...state, reducerTodos };
        }

        case ACTIONS.DELETE: {
            const reducerTodos = state.reducerTodos.filter(
                (todo) => todo.id != payload.id
            );
            localStorage.setItem('reducerTodos', JSON.stringify(reducerTodos));
            return { ...state, reducerTodos };
        }

        case ACTIONS.EDIT: {
            const reducerTodos = [...state.reducerTodos];
            reducerTodos.map((todo) => {
                if (todo.id === payload.id) {
                    todo.name = payload.value;
                }
            });
            localStorage.setItem('reducerTodos', JSON.stringify(reducerTodos));
            return { ...state, reducerTodos };
        }

        case ACTIONS.PAUSE: {
            const reducerTodos = [...state.reducerTodos];
            reducerTodos.map((todo) => {
                if (todo.id === payload.id) {
                    todo.status = 'paused';
                }
            });
            localStorage.setItem('reducerTodos', JSON.stringify(reducerTodos));
            return { ...state, reducerTodos };
        }

        case ACTIONS.UNPAUSE: {
            const reducerTodos = [...state.reducerTodos];
            reducerTodos.map((todo) => {
                if (todo.id === payload.id) {
                    todo.status = 'new';
                }
            });
            localStorage.setItem('reducerTodos', JSON.stringify(reducerTodos));
            return { ...state, reducerTodos };
        }

        case ACTIONS.ADDCOMPLETEDTODO: {
            const reducercompletedTodos = [
                ...state.reducercompletedTodos,
                payload.completedTodo,
            ];
            localStorage.setItem('reducercompletedTodos', JSON.stringify(reducercompletedTodos));

            return { ...state, reducercompletedTodos };
        }

        case ACTIONS.DELETECOMPLETEDTODO: {
            const reducercompletedTodosCopy = [...state.reducercompletedTodos];
            const reducercompletedTodos = reducercompletedTodosCopy.filter(
                (todo) => todo.id !== payload.id
            );
            localStorage.setItem('reducercompletedTodos', JSON.stringify(reducercompletedTodos));
            return { ...state, reducercompletedTodos };
        }

        default:
            throw new Error('does not match any case');
    }
};

export default reducer;
