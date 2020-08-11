const ACTIONS = {
    ADD: 'add',
    DELETE: 'delete',
    EDIT: 'edit',
    PAUSE: 'pause',
    UNPAUSE: 'unpause',
    UPDATE: 'update',
};

const reducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case ACTIONS.ADD: {
            const reducerTodos = [...state.reducerTodos, payload.Todo];
            return { ...state, reducerTodos };
        }

        case ACTIONS.DELETE: {
            const reducerTodos = state.reducerTodos.filter(
                (todo) => todo.id != payload.id
            );
            return { ...state, reducerTodos };
        }

        case ACTIONS.EDIT: {
            const reducerTodos = [...state.reducerTodos];
            reducerTodos.map((todo) => {
                if (todo.id === payload.id) {
                    todo.name = payload.value;
                }
            });
            return { ...state, ...reducerTodos };
        }

        case ACTIONS.PAUSE: {
            const reducerTodos = [...state.reducerTodos];
            reducerTodos.map((todo) => {
                if (todo.id === payload.id) {
                    todo.status = 'paused';
                }
            });
            return { ...state, reducerTodos };
        }

        case ACTIONS.UNPAUSE: {
            const reducerTodos = [...state.reducerTodos];
            reducerTodos.map((todo) => {
                if (todo.id === payload.id) {
                    todo.status = 'new';
                }
            });
            return { ...state, ...reducerTodos };
        }

        default:
            throw new Error('does not match any case');
    }
};

export default reducer;
