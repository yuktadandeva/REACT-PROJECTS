import React from 'react'

export const Button = (props) => {
  return (
    <button onClick={props.fn}>{props.val}</button>
  )
}
