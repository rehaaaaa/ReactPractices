import React from 'react'
import Child from './Child'

const Parent = () => {
 const  message = 'Hello form Parent component'

  return (
    <div>
      <Child message={message}></Child>
    </div>
  )
}

export default Parent