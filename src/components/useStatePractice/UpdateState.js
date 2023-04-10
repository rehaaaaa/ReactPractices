import React from 'react'
import Form from './Form'
import { useState } from 'react';

const UpdateState = () => {
  const [count, setCount]=useState(0);
const clickHandler = () => {
    setCount(count+1);
}
return (
    <div>
    <h4>You clicked {count} times</h4>
    <button type="submit" onClick={clickHandler}>Button</button>
    <Form></Form>
    </div>
  )
}

export default UpdateState