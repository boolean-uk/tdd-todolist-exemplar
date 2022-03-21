TodoList Domain Model

REQUIREMENTS:
- Create a todo item that has an ID, text description, and starts off incomplete
- Get all todo items
- Set a todo completed by its ID
- Get only todo items that are incomplete
- Get only todo items that are complete
- Search and return a todo item by its ID, or return a message saying it doesn’t exist
- Remove a todo item by its ID

object TodoItem
properties
  - id: int
  - text: string
  - isCompleted: boolean

class TodoList
properties
  - nextAvailableID: int
  - items: array of TodoItem
methods
  - create(description: string) -> return new TodoItem with incremented id
  - getAll() -> return array of TodoItem
  - setComplete(id: int) -> returns TodoItem or throw error (not found)
  - getByIsCompleted(isCompleted: boolean) -> return array of TodoItems
  - getById(id: int) -> return TodoItem or throw error (not found)
  - removeBy(id: int) -> return removed TodoItem or throw error (not found)