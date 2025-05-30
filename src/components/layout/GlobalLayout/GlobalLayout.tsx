import { useColorModeValue } from '@/components/ui/color-mode'
import { Container, Flex } from '@chakra-ui/react'

export const GlobalLayout = ({ children }: { children: React.ReactNode }) => {
  const bgColor = useColorModeValue('white', 'gray.700')

  return (
    <Flex
      minHeight="100vh"
      alignItems="center"
      justifyContent="center"
      bg="gray.50"
      px={4}
    >
      <Container
        maxW="5xl"
        bg={bgColor}
        p={6}
        borderRadius="md"
        boxShadow="md"
      >
        {children}
      </Container>
    </Flex>
  )
}
