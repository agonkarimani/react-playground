import * as React from 'react'
import Button from './Button'

export default () => {
  return (
    <div>
      <Button isActive>&lt;</Button> 1/36 <Button>&gt;</Button>
      <Button>&lt;</Button> 12/36 <Button>&gt;</Button>
      <Button>&lt;</Button> 30/36 <Button isActive>&gt;</Button>
    </div>
  )
}
