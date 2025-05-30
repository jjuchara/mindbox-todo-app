import { renderHook, act } from '@testing-library/react'
import { wait } from '@/utils/utils'
import { useDebounce } from './useDebounce'

describe('useDebounce', () => {
  it('should return the initial value immidiatly', () => {
    const { result } = renderHook(() => useDebounce('initial', 500))
    expect(result.current).toBe('initial')
  })

  it('should update the debounced value after the delay', async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'initial' }
      }
    )

    rerender({ value: 'updated' })

    expect(result.current).toBe('initial')

    await act(() => wait(500))

    expect(result.current).toBe('updated')
  })

  it('should not update the debounced value if rerendered before delay', async () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'initial' }
      }
    )

    rerender({ value: 'intermediate' })
    rerender({ value: 'updated' })

    expect(result.current).toBe('initial')

    await act(() => wait(500))

    expect(result.current).toBe('updated')
  })
})

