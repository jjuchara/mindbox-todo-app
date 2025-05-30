import { useColorModeValue } from '@/components/ui/color-mode'
import { useDebounce } from '@/hooks'
import {
  Box,
  Button,
  Field,
  HStack,
  Input,
} from '@chakra-ui/react'
import { useState } from 'react'

type TodoInputFormType = {
  onAdd: (text: string) => void
}

export const TodoInputForm = ({ onAdd }: TodoInputFormType) => {
  const [text, setText] = useState("")
  const debouncedText = useDebounce(text, 300)

  const btnTextColor = useColorModeValue('gray.700', 'white')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!debouncedText.trim()) return
    onAdd(debouncedText.trim())
    setText("")
  }

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <HStack align="stretch">
        <Field.Root>
          <Input placeholder="Добавить задачу" variant="flushed" value={text} onChange={e => setText(e.target.value)} />
          <Field.ErrorText>Поле обязательное для заполнения</Field.ErrorText>
        </Field.Root>
        <Button type="submit" bg="green.muted" color={btnTextColor}>
          Создать задачу
        </Button>
      </HStack>
    </Box >
  )
}
