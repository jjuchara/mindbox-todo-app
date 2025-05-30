import { useLocalStorage } from "@/hooks"
import { useState } from "react"
import type { FilterType, TodoItemType } from "../types"

export function useTodos() {
  const [todos, setTodos] = useLocalStorage<TodoItemType[]>("todos", [])
  const [filter, setFilter] = useState<FilterType>("all")

  const addTodo = (text: string) => {
    setTodos(prev => [...prev, { id: crypto.randomUUID(), text, completed: false }])
  }

  const toggleTodo = (id: string) => {
    setTodos(prev =>
      prev.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo)
    )
  }

  const deleteTodo = (id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  const editTodo = (id: string, newText: string) => {
    setTodos(prev =>
      prev.map(todo => todo.id === id ? { ...todo, text: newText } : todo)
    )
  }

  const clearCompleted = () => {
    setTodos(prev =>
      prev.map(todo => todo.completed ? { ...todo, completed: !todo.completed } : todo)
    )
  }

  const clearAllTodos = () => {
    setTodos([])
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  return {
    filteredTodos,
    filter,
    setFilter,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    clearAllTodos
  }
}

