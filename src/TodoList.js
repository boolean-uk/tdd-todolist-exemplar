class TodoList {
  create(text) {
    let expected = {
      id: 1,
      text: text,
      status: 'incomplete',
    };
    return expected;
  }
}

module.exports = TodoList;
