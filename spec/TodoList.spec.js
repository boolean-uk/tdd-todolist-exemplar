const TodoList = require("../src/TodoList.js")

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it("creates a todo item", () => {
    // set up
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }
    // execute
    const result = todoList.create("turn the heating on!")
    // verify
    expect(result).toEqual(expected)
  })
  it("create multiple todo items", () => {
    // set up
    const first = {
      id: 1,
      text: 'do something',
      status: 'incomplete'
    }
    const second = {
      id: 2,
      text: 'do something else',
      status: 'incomplete'
    }
    // execute
    todoList.create(first.text)
    const result = todoList.create(second.text)
    // verify
    expect(result).toEqual(second)
  })
    it("returns all todo items in the list", () => {
    // set up
    const first = {
      id: 1,
      text: 'do something',
      status: 'incomplete'
    }
    const second = {
      id: 2,
      text: 'do something else',
      status: 'incomplete'
    }
    todoList.create(first.text)
    todoList.create(second.text)
    // execute
    const result = todoList.showAll()
    // verify
    expect(result).toEqual([first, second])
  })
})
