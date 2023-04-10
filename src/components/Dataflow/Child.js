import React from 'react'
import './Child.css'

const Child = (props) => {
  const text= 'Hello from Child Component'
  const text2 = 'Hello from Child Again'
  const message = props.message

  return (
    <div>
        <div className='msg'>
        {text}
        </div>
        <div className='msg2'>
        {text2}
        </div>
        {message}
    </div>
  )
}

export default Child