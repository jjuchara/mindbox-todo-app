import { renderHook, waitFor } from '@testing-library/react'
import { useTodos } from '../hooks/useTodos'
import { act } from 'react'

describe('useTodos hook', () => {

  it('should initialize with no todos and filter set to all', () => {
    const { result } = renderHook(() => useTodos())
    expect(result.current.filteredTodos).toEqual([])
    expect(result.current.filter).toBe('all')
  })

  it('should add a new todo', () => {
    const { result } = renderHook(() => useTodos())
    act(() => {
      result.current.addTodo('New Todo')
    })
    expect(result.current.filteredTodos).toHaveLength(1)
    expect(result.current.filteredTodos[0].text).toBe('New Todo')
  })

  it('should toggle todo completion', () => {
    const { result } = renderHook(() => useTodos())
    act(() => {
      result.current.addTodo('New Todo 1')
      result.current.toggleTodo(result.current.filteredTodos[0].id)
    })
    expect(result.current.filteredTodos[0].completed).toBe(true)
  })

  it('should delete a todo', () => {
    const { result } = renderHook(() => useTodos())
    act(() => {
      result.current.addTodo('DeletedTodo')
      result.current.deleteTodo(result.current.filteredTodos[0].id)
    })
    expect(result.current.filteredTodos).toHaveLength(2)
  })

  it('should edit a todo text', () => {
    const { result } = renderHook(() => useTodos())
    act(() => {
      result.current.addTodo('New Todo')
      result.current.editTodo(result.current.filteredTodos[0].id, 'Updated Todo')
    })
    expect(result.current.filteredTodos[0].text).toBe('Updated Todo')
  })

  it('should clear completed todos', () => {
    const { result } = renderHook(() => useTodos())
    act(() => {
      result.current.addTodo('New Todo')
      result.current.toggleTodo(result.current.filteredTodos[0].id)
      result.current.clearCompleted()
    })
    expect(result.current.filteredTodos[0].completed).toBe(false)
  })

  it('should filter todos correctly based on the filter type', async () => {
    const { result } = renderHook(() => useTodos())

    act(() => {
      result.current.clearAllTodos()
      result.current.addTodo('Active Todo')
      result.current.addTodo('Completed Todo')
    })

    act(() => {
      result.current.toggleTodo(result.current.filteredTodos[1].id)
    })

    act(() => {
      result.current.setFilter('active')
    })

    await waitFor(() => {
      expect(result.current.filteredTodos).toHaveLength(1)
      expect(result.current.filteredTodos[0].text).toBe('Active Todo')
    })

    act(() => {
      result.current.setFilter('completed')
    })

    await waitFor(() => {
      expect(result.current.filteredTodos).toHaveLength(1)
      expect(result.current.filteredTodos[0].text).toBe('Completed Todo')
    })

    act(() => {
      result.current.setFilter('all')
    })

    await waitFor(() => {
      expect(result.current.filteredTodos).toHaveLength(2)
    })
  })
})

