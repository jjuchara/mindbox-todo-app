import { For, VStack } from '@chakra-ui/react'
import { TodoItem } from '../TodoItem/TodoItem'
import { LuBox } from 'react-icons/lu'
import type { TodoItemType } from '../../types'

type TodoItemListType = {
  todoItemList: TodoItemType[],
  onToggle: (id: string) => void
  onDelete: (id: string) => void
  onEdit: (id: string, newText: string) => void
}

export const TodoItemList = ({ todoItemList, onToggle, onDelete, onEdit }: TodoItemListType) => {

  return (
    <For each={todoItemList} fallback={
      <VStack textAlign="center" fontWeight="medium">
        <LuBox />
        Список задач пуст
      </VStack>
    }>
      {(todo) => <TodoItem todo={todo} onToggle={onToggle} onEdit={onEdit} onDelete={onDelete}
        key={todo.id} />}
    </For>
  )
}

