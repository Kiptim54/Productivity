import React from 'react';

function Todos(props) {
    const {todos} = props;
    console.log(todos)

    const displayTodos = (todos) => {
        todos.map((todos, index) => {
            return <li key={index}></li>;
        });
    };
    return <div className="Todos">
        {todos.length >=1 ? displayTodos:
         <h3 style={{color:'orange', textAlign:'center',}}>No todos...</h3>}
        
        </div>;
}

export default Todos;
