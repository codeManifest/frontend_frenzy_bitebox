import React from 'react'

export default function Button(props) {
    const {btntext,className} = props
  return (
    <button className={`py-2 px-3 rounded-md ${className}`} >{btntext}</button>
  )
}
