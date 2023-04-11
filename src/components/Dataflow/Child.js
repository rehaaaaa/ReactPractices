import React from 'react'
import './Child.css'
import MyContext from '../../Context/Context'
import { useContext } from 'react'

const Child = (props) => {
  const text= 'Hello from Child Component'
  const text2 = 'Hello from Child Again'
  const message = props.message
  const data = useContext(MyContext);
  return (
    <div>
        <div className='msg'>
        {text}
        <h3>This line: ''{data}'' comes through useContext </h3>
        </div>
        <div className='msg2'>
        {text2}
        </div>
        {message}
    </div>
  )
}

export default Child