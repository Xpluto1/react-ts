import React from 'react';
import {todoItemInterface} from './type';
//import './TodoListItem.css';

export const TodoItem: React.FC<todoItemInterface> = ({id, text, completed}) => (
    <div style={{textDecoration: completed ? 'line-through' : 'none'}}>{text}</div>
);

/*
//定义了一个函数组件TodoListItem,从interface可以看出，它接受一个Todo类型的属性
//Todo有两个字段，在type.ts中定义
//text用于展示文本内容，complete表示是否完成，该属性用于控制label的样式和checkbox的状态

interface TodoListItemProps{
    todo:Todo
}

export const TodoListItem: React.FC<TodoListItemProps>=({todo})=>{
    return(
        <li>
            <label className={todo.complete?"complete":undefined}>
                <input type="checkbox" checked={todo.complete}/>
                {todo.text}
            </label>
        </li>
    )
}*/