const TodoList = require('../src/TodoList.js');

describe('TodoList', () => {
  let todoList;

  beforeEach(() => {
    todoList = new TodoList();
  });

  it('creates a todo item', () => {
    // set up
    const expected = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
    };
    // execute
    const result = todoList.create('turn the heating on!');
    // verify
    expect(result).toEqual(expected);
  });
});
