import React from "react";
import { v4 as uuidv4 } from 'uuid';

const todos = [
    {
        id: uuidv4(),
        title: "todo1",
        desc: "this is description 1"
    },
    {
        id: uuidv4(),
        title: "todo2",
        desc: "this is description 2"
    },
    {
        id: uuidv4(),
        title: "todo3",
        desc: "this is description 3"
    },
    {
        id: uuidv4(),
        title: "todo4",
        desc: "this is description 4"
    }
]

const List = ()=> {
    return <div>
        {todos.map((todo)=> {
            const {id, title, desc} = todo;
        //  return <div key={todo.id}>
        //    <h3>{todo.title}</h3>
        //    <p>{todo.desc}</p>
        return <div key={id}>
           <h3>{title}</h3>
           <p>{desc}</p>
         </div>
        })}
    </div>
}
export default  List;