import React from 'react'

export const Input = (props) => {
  return (
    <input type="text" readOnly={props.readonly} placeholder={props.placeholder} onChange={props.onChange}/>
  )
}
 