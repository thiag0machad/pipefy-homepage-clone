import { createContext } from 'react'

interface BoardContextType {
  lists: any[]
  move: (fromList: number, toList: number, from: number, to: number) => void
}

export default createContext<BoardContextType>({
  lists: [],
  move() {},
})
