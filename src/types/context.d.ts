import { Dispatch, SetStateAction } from 'react'

export type ContextProps = {
  prerequisites: string[]
  setPrerequisites: Dispatch<SetStateAction<string[]>>
  stacks: string[]
  setStacks: Dispatch<SetStateAction<string[]>>
}
