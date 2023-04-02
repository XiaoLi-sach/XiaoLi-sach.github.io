import React from 'react'
import { useMdxComponentsContext } from '@/utils/context'

const Stacks: React.FC = () => {
  const stacks = useMdxComponentsContext().stacks
  return (
    <>
      <h2>Stacks</h2>
      <ol>
        {stacks.map((stack, index) => (
          <li key={index}>{stack}</li>
        ))}
      </ol>
    </>
  )
}

export default Stacks
