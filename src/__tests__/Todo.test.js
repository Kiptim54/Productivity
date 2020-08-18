import Todos from '../components/Todos'
import React from 'react';
import ReactDOM from 'react-dom';


test('The file should output "No todos..." if nothing is passed to the todos props',()=>{
    expect.assertions(1)
    const todos = []
    const div = document.createElement('div')
    ReactDOM.render(<Todos todos={todos}
                           deleteTodo={()=>null}
                           addCompleteTodo={()=>null}
                           pauseTodos={()=>null}
                           unpauseTodos={()=>null}
                           updateTodo={()=>null}/>,
        div)
    expect(div.innerHTML).toMatch('no pending items...')

} )

test('The file should output todos if todos array is not empty',()=>{
    expect.assertions(1)
    const TodosList = [{
        id:'7susjnsy99',
        name: 'Run this one test in the todo component',
        status: 'new',
    }]
    const div = document.createElement('div');
    ReactDOM.render(<Todos
                    addCompleteTodo={()=>null}
                    deleteTodo={()=>null}
                    todos={TodosList}/>
    , div)
    expect(div.innerHTML).toMatch('Run this one test in the todo component')

})