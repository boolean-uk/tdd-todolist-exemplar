const TodoList = require("../src/TodoList.js")
const DateUtil = require("../src/DateUtil.js")

describe("TodoList", () => {
  let todoList

  beforeEach(() => {
    todoList = new TodoList()
  })

  it("creates a todo item for todays date when no date specified", () => {
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
      date: DateUtil.today()
    }

    const result = todoList.create("turn the heating on!")

    expect(result).toEqual(expected)
  })

  it("creates a todo item for provided date", () => {
    
    // Create a new Date object for December 24th 2021
    const date = new Date(2021, 12, 24)

    // Expect the todo returned from create to return the same date
    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
      date: date
    }

    // When we create the todo, provide our own date as the second argument
    const result = todoList.create("turn the heating on!", date)

    expect(result).toEqual(expected)
  })

  it("creates strips time portion from provided date", () => {
    // Javascript Date objects store the date as well as the time.
    // In the case of the TodoList, we don't care about the time
    // portion (it should always be set to zero), so test that when
    // we provide a date to the TodoList that contains a time it
    // is "stripped" before it is added.
    const dateWithTime = new Date(2021, 12, 24, 10, 10, 5, 10)
    const dateWithoutTime = DateUtil.stripTime(dateWithTime)

    const expected = {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete",
      date: dateWithoutTime
    }

    const result = todoList.create("turn the heating on!", dateWithTime)

    expect(result).toEqual(expected)
  })

  it("creates a second todo item with id 2", () => {
    const expectedTwo = {
      id: 2,
      text: "make lunch",
      status: "incomplete",
      date: DateUtil.today()
    }

    todoList.create("turn the heating on!")
    const resultTwo = todoList.create("make lunch")

    expect(resultTwo).toEqual(expectedTwo)
  })

  it("get all returns empty list when no todos", () => {
    expect(todoList.getAll()).toEqual([])
  })

  it("get all returns single todo", () => {
    const expected = [
      {
        id: 1,
        text: "abc",
        status: "incomplete",
        date: DateUtil.today()
      }
    ]

    todoList.create("abc")

    expect(todoList.getAll()).toEqual(expected)
  })

  it("set item completed by Id", () => {
    const expected = [
      {
        id: 1,
        text: "abc",
        status: "complete",
        date: DateUtil.today()
      }
    ]

    todoList.create("abc")
    todoList.setComplete(1)

    expect(todoList.getAll()).toEqual(expected)
  })

  it("Get only todo items that are incomplete", () => {
    todoList.create("I should be incomplete")
    todoList.create("I should be complete")

    // Mark the second todo as complete
    todoList.setComplete(2)

    // Only todo 1 should be returned
    const expected = [
      {
        id: 1,
        text: "I should be incomplete",
        status: "incomplete",
        date: DateUtil.today()
      }
    ]

    expect(todoList.getIncomplete()).toEqual(expected)
  })

  it("Get only todo items that are complete", () => {
    todoList.create("I should be incomplete")
    todoList.create("I should be complete")

    // Mark the second todo as complete
    todoList.setComplete(2)

    // Only todo 2 should be returned
    const expected = [
      {
        id: 2,
        text: "I should be complete",
        status: "complete",
        date: DateUtil.today()
      }
    ]

    expect(todoList.getComplete()).toEqual(expected)
  })

  it("Get todo item by Id", () => {
    todoList.create("Todo 1")
    todoList.create("Todo 2")

    const expected = {
      id: 2,
      text: "Todo 2",
      status: "incomplete",
      date: DateUtil.today()
    }

    expect(todoList.getById(2)).toEqual(expected)
  })

  it("Get todo item by Id when doest exist throws exception", () => {
    todoList.create("Todo 1")
    todoList.create("Todo 2")

    const expected = "Todo does not exist"

    // Test that attempting get a invalid todo using an Id that
    // does not exist causes an exception to be thrown.
    expect(function () {
      todoList.getById(1023)
    }).toThrow(expected)
  })

  it("Get todo items by date", () => {
    const christmasEve = new Date(2021, 12, 24)
    const newYearsDay = new Date(2022, 1, 1)

    todoList.create("Put out milk for santa", christmasEve)
    todoList.create("Put out carrot for reindeer", christmasEve)
    todoList.create("Clean the house", newYearsDay)

    const expected = [
      {
        id: 3,
        text: "Clean the house",
        status: "incomplete",
        date: newYearsDay
      }
    ]

    expect(todoList.getByDay(newYearsDay)).toEqual(expected)
  })

  it("Remove todo item removes it from the list", () => {
    todoList.create("Todo 1 - to be deleted")
    todoList.create("Todo 2")

    const expected = [
      {
        id: 2,
        text: "Todo 2",
        status: "incomplete",
        date: DateUtil.today()
      }
    ]

    todoList.remove(1)

    expect(todoList.getAll()).toEqual(expected)
  })
})
