//需要用到的数据结构
export interface todoItemInterface {
    id: number,
    text: String,
    completed: boolean
}
export interface todoListInterface {
    todoList: todoItemInterface[],
    toggleTodo: (id: number)=> void
}