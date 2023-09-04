import { useEffect } from 'react'

let mounted = false
export default function useDidMount(callback: () => void): void {
  useEffect(() => {
    if (callback && !mounted) {
      mounted = true
      callback()
    }
  })
}
