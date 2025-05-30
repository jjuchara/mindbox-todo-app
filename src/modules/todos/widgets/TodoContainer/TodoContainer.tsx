import { Button } from "@chakra-ui/react"
import { FooterLayout, TodoLayout } from "@/components"
import { useTodos } from "../../hooks"
import { FILTER_BUTTON_LIST } from "../../constants"
import { TodoCounter } from "../../components/TodoCounter"
import { TodoFilterButtons } from "../../components/TodoFilterButtons/TodoFilterButtons"
import { TodoInputForm } from "../../components/TodoInputForm"
import { TodoItemList } from "../../components/TodoItemList"

export function TodoContainer() {
  const {
    filteredTodos,
    addTodo,
    toggleTodo,
    deleteTodo,
    editTodo,
    clearCompleted,
    filter,
    setFilter,
  } = useTodos()


  return (
    <TodoLayout>
      <TodoInputForm onAdd={addTodo} />
      <TodoItemList todoItemList={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
      <FooterLayout>
        <TodoCounter todoLength={filteredTodos.length} />
        <TodoFilterButtons filterList={FILTER_BUTTON_LIST} currentFilter={filter} setFilter={setFilter} />
        <Button variant="ghost" onClick={clearCompleted}>Очистить завершенные</Button>
      </FooterLayout>
    </TodoLayout>
  )
}

