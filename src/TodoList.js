class TodoList {
  constructor() {
    this.nextAvailableID = 1
    this.items = []
  }

  create(description) {
    const item = {
      id: this.nextAvailableID,
      text: description,
      isComplete: false,
    }
    // add item
    this.items.push(item)
    // increment to store next available id
    this.nextAvailableID++
    return item
  }

  getAll() {
    return this.items
  }

  setComplete(id) {
    // find the item
    const item = this.getById(id) // throws error if not found
    item.isComplete = true // mark as completed
    return item
  }

  getById(id) {
    // find the item that matches id
    const item = this.items.find((item) => item.id === id)
    // if item is not found, throw error
    if (item === undefined) {
      throw Error('Item not found')
    }
    return item
  }

  getByIsCompleted(isCompleted) {
    return this.items.filter((item) => item.isComplete === isCompleted)
  }

  removeBy(id) {
    const item = this.getById(id) // throws error if not found
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].id === id) {
        this.items.splice(i, 1) // remove the target item
        break // exit the for loop
      }
    }
    // if we get here, then item with id existed and has been removed
    return item
  }
}

module.exports = TodoList
