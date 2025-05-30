import { useEffect, useState } from "react"

export function useLocalStorage<InitialValue>(key: string, initialValue: InitialValue) {
  const [storedValue, setStoredValue] = useState<InitialValue>(() => {
    try {
      const item = localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error("Ошибка чтения из localStorage", error)
      return initialValue
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(storedValue))
    } catch (error) {
      console.error("Ошибка записи в localStorage", error)
    }
  }, [key, storedValue])

  return [storedValue, setStoredValue] as const
}

