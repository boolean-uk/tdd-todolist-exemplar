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

  it('create multiple todo items', () => {
    // set up
    const todoOne = {
      id: 1,
      text: 'turn the heating on!',
      status: 'incomplete',
    };
    const todoTwo = {
      id: 2,
      text: 'make a cuppa',
      status: 'incomplete',
    };
    // execute
    todoList.create(todoOne.text, todoOne.id);
    const result = todoList.create(todoTwo.text, todoTwo.id);
    expect(result).toEqual(todoTwo);
  });
});
