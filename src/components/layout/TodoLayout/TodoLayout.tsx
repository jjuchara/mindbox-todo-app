import { useColorModeValue } from "@/components/ui/color-mode"
import { Flex } from "@chakra-ui/react"

export const TodoLayout = ({ children }: { children: React.ReactNode }) => {
  const bgColor = useColorModeValue('gray.100', 'gray.600')

  return (
    <Flex gap={4} direction="column" bg={bgColor} p={4}>
      {children}
    </Flex>
  )
}
