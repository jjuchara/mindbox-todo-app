import { Center, Heading, type ConditionalValue, } from "@chakra-ui/react"
import type { ReactNode } from "react"

type TCenterHeading = {
  size: ConditionalValue<"sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl" | undefined>
  children: ReactNode
  as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

export const CenterHeading = ({ size, children, as }: TCenterHeading) => {
  return (
    <Center>
      <Heading as={as} size={size}>{children}</Heading>
    </Center>

  )
}
