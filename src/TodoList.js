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
}

module.exports = TodoList;
