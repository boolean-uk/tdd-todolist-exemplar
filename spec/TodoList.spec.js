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
    todoList.create(todoOne.text);
    const result = todoList.create(todoTwo.text);
    // verify
    expect(result).toEqual(todoTwo);
  });

  it('shows all items', () => {
    // set up
    const expected = [
      (todoOne = {
        id: 1,
        text: 'turn the heating on!',
        status: 'incomplete',
      }),
      (todoTwo = {
        id: 2,
        text: 'make a cuppa',
        status: 'incomplete',
      }),
    ];
    // execute
    todoList.create(todoOne.text);
    todoList.create(todoTwo.text);
    const result = todoList.showAll();
    // verify
    expect(result).toEqual(expected);
  });
});
