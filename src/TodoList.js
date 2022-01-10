class TodoList {

    constructor() {
        this.todos = []
    }

    create(task) {
        const todo = {
            id: this.todos.length + 1,
            text: task,
            status: "incomplete"
        }
        this.todos.push(todo)
        return todo
    }

    showAll() {
        return this.todos
    }
}

module.exports = TodoList
