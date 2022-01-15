const DateUtil = require("./DateUtil.js")

const Status = {
  complete: "complete",
  incomplete: "incomplete"
}

const InvalidTodo = "Todo does not exist"

class TodoList {

  // Declare our todos array as private - this means we can only access
  // it directly from within our TodoList class so other code cannot modify 
  // the array directly - for example, adding a todo without an id. The only 
  // way this array can be modified is via the methods we expose on this class.
  //
  // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields
  #todos

  constructor() {
    this.#todos = []
  }

  create(description, date = DateUtil.today()) {
    const todo = {
      id: this.#nextId(),
      text: description,
      status: Status.incomplete,
      date: DateUtil.stripTime(date),
    }

    this.#todos.push(todo)

    return todo
  }

  // Declare this method as private - it can only be used by this class.
  // Other code doesn't need to know about nextIds directly - it's an implementation
  // detail of this class. We want to keep our "public interface" (the methods other 
  // code can use from our class) as small as possible
  #nextId() {
    return this.#todos.length + 1
  }

  setComplete(id) {
    try {
      this.getById(id).status = Status.complete;
    } catch (e) {}
  }

  getAll() {
    return this.#todos
  }

  getById(id) {
    const todo = this.#todos.find((todo) => todo.id == id)
    if (todo) {
      return todo
    }

    // Throw an exception here, rather than return a string. Exceptions
    // can be used to communicate errors from javascript functions.
    // 
    // See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
    throw InvalidTodo
  }

  getByDay(date) {
    // Find todo items for a specific day by comparing getTime() - getTime
    // on the date object returns a timestamp - a number representing the
    // number of milliseconds since 1st Jan 1970 
    //
    // (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime)
    // 
    // Because we are stripping the time portion from the provided date
    // argument as well the date set on the todo when we create it, we know
    // that comparing the timestamp will match days on the same date.
    //
    // We could also compare the individual parts of date (date.getMonth() == date.getMonth(), etc)
    // but I prefer this method because it feels "wrong" to have time 
    // information in the date when we are not going to use is. Again, this
    // is a personal preference type thing.
    return this.#todos.filter(
      (todo) => todo.date.getTime() == DateUtil.stripTime(date).getTime()
    )
  }

  getIncomplete() {
    return this.#getWithStatus(Status.incomplete);
  }

  getComplete() {
    return this.#getWithStatus(Status.complete);
  }

  #getWithStatus(status) {
    return this.#todos.filter((todo) => todo.status == status);
  }

  remove(id) {
    const index = this.#todos.findIndex((todo) => todo.id == id);
    if (index < 0) {
      return;
    }

    this.#todos.splice(index, 1);
  }
}

module.exports = TodoList;
