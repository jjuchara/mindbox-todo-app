import { useEffect, useState } from "react"

export function useDebounce<ValueType>(value: ValueType, delay: number = 300): ValueType {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

