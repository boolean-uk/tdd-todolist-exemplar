class TodoList {

    constructor() {
        this.todos = []
    }

    create(task) {
        const todo = {
            text: task,
            status: "incomplete"
        }
        todo.id = this.todos.length + 1
        this.todos.push(todo)
        return todo
    }

}

module.exports = TodoList
