import { renderHook, act } from '@testing-library/react';
import { useLocalStorage } from './useLocalStorage';

const localStorageMock = (() => {
  let store: Record<string, string> = {};
  return {
    getItem(key: string) {
      return store[key] || null;
    },
    setItem(key: string, value: string) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
    removeItem(key: string) {
      delete store[key];
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('useLocalStorage Hook', () => {
  afterEach(() => {
    localStorage.clear();
  });

  it('should initialize with the value from localStorage if available', () => {
    localStorage.setItem('testKey', JSON.stringify('storedValue'));

    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));

    expect(result.current[0]).toBe('storedValue');
  });

  it('should initialize with the initialValue if localStorage is empty', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));

    expect(result.current[0]).toBe('initialValue');
  });

  it('should update localStorage when setStoredValue is called', () => {
    const { result } = renderHook(() => useLocalStorage('testKey', 'initialValue'));

    act(() => {
      result.current[1]('newValue');
    });

    expect(localStorage.getItem('testKey')).toBe(JSON.stringify('newValue'));
    expect(result.current[0]).toBe('newValue');
  });
});

