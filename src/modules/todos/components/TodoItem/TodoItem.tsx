import { Checkbox } from '@/components/ui/checkbox'
import { HStack, IconButton, Input, Text } from '@chakra-ui/react'
import { useState } from 'react'
import type { TodoItemType } from '../../types'
import { LuPencil, LuSave, LuTrash } from 'react-icons/lu'
import { useTodos } from '../../hooks'

type TodoItemPropsType = {
  todo: TodoItemType
  onToggle: (id: string) => void
  onEdit: (id: string, text: string) => void
  onDelete: (id: string) => void
}

export const TodoItem = ({ todo, onToggle, onEdit, onDelete }: TodoItemPropsType) => {

  const [editingId, setEditingId] = useState<string | null>(null)
  const [editText, setEditText] = useState("")

  const startEditing = (id: string, text: string) => {
    setEditingId(id)
    setEditText(text)
  }

  const finishEditing = (id: string) => {
    onEdit(id, editText.trim())
    setEditingId(null)
  }

  return (
    <HStack>
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      {editingId === todo.id ? (
        <>
          <Input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") finishEditing(todo.id)
            }}
          />
          <IconButton
            aria-label="Save"
            onClick={() => finishEditing(todo.id)}
            size="sm"
          >
            <LuSave />
          </IconButton>
        </>
      ) : (
        <>
          <Text flex="1" >
            {todo.text}
          </Text>
          <IconButton
            aria-label="Edit"
            onClick={() => startEditing(todo.id, todo.text)}
            size="sm"
          ><LuPencil /></IconButton>
          <IconButton
            aria-label="Delete"
            onClick={() => onDelete(todo.id)}
            size="sm"
          >
            <LuTrash />
          </IconButton>
        </>
      )}
    </HStack>


  )
}

