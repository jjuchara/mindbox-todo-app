import { Flex, Text } from "@chakra-ui/react"

export type TodoCounterType = {
  todoLength: number
}

export const TodoCounter = ({ todoLength }: TodoCounterType) => {

  return (
    <Flex>
      <Text><b>{todoLength}</b> задач</Text>
    </Flex>

  )
}
