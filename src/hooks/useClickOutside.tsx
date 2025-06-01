import { useEffect, type RefObject } from 'react'

interface UseClickOutsideProps {
  ref: RefObject<HTMLDivElement | null>
  callback: () => void
}

export const useClickOutside = ({ ref, callback }: UseClickOutsideProps) => {
  const handleClick = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      callback()
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClick)

    return () => {
      document.removeEventListener('mousedown', handleClick)
    }
  }, [ref, callback])
}
