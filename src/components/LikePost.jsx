import React from 'react'
export default function Post(props) {
  let value=props.value;
  let increase=props.increase

  return (
    <div>
      <button onClick={increase}>Like Post {value}</button>
    </div>
  )
}


