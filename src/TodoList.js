class TodoList {
  constructor() {
    this.todoList = [];
  }
  create(text) {
    let expected = {
      id: this.todoList.length + 1,
      text: text,
      status: 'incomplete',
    };

    this.todoList.push(expected);
    return expected;
  }

  showAll() {
    return this.todoList;
  }

  setComplete(id) {
    this.todoList.find((item) => item.id === id).status = 'complete';
    return this.todoList;
  }

  getByStatus(status) {
    let matchingItemsList = this.todoList.filter(
      (item) => item.status === status
    );
    return matchingItemsList;
  }

  findBy(id) {
    return this.todoList.find((item) => item.id === id);
  }
}

module.exports = TodoList;
