import React from 'react'
import Child from './Child'
// import { useContext } from 'react'
// import MyContextData from '../../Context/myContext'


const Parent = () => {
 const  message = 'Hello form Parent component'
//  const data2 = useContext(MyContextData);

  return (
    <div>
      {/* <div>{data2}</div> */}
      <Child message={message}></Child>
    </div>
  )
}

export default Parent