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
        return "Item not found"
    }

    getByStatus(status) {
        return this.todos.filter(todo => todo.status === status)
    }

    findBy(id) {
        const found = this.todos.find(todo => todo.id === id)
        if (found) {
            return found
        }
        return "Item not found"
    }

    deleteBy(id) {
        const toDelete = this.todos.filter(todo => todo.id === id)
        this.todos = this.todos.filter(todo => todo.id !== id)
        if (toDelete.length > 0) {
            return toDelete[0]
        }
        return "Item not found"
    }
}

module.exports = TodoList
