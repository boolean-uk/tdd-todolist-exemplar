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

    setComplete(id) {
        for(let i = 0; i < this.todos.length; i++) {
            if(this.todos[i].id !== id) {
                continue
            }
            this.todos[i].status = 'completed'
            return this.todos[i]
        }
    }

    getByStatus(status) {
        return this.todos.filter(todo => todo.status === status)
    }
}

module.exports = TodoList
