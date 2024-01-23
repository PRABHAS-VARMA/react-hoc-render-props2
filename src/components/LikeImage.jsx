import React from 'react'

export default function Image(props) {
  let value=props.value;
  let increase=props.increase

  return (
    <div>
      <button onClick={increase}>Like Image {value}</button>
    </div>
  )
}
