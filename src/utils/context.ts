import { createContext, useContext } from 'react'
import { ContextProps } from '@/types/context'

export const MdxContext = createContext({} as ContextProps)
export function useMdxComponentsContext() {
  return useContext(MdxContext)
}
