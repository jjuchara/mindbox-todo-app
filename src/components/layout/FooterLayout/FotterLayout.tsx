import { Box, Flex } from "@chakra-ui/react"

export const FooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box borderTopWidth="2px">
      <Flex justifyContent="space-between" alignItems="center" borderTop="1px solid gray.700" >
        {children}
      </Flex>
    </Box>
  )
}
