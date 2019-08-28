import React from 'react'
import { string, number } from 'prop-types';

interface Items {
  text: string,
  value: string | number
}
const List: React.FC = () => {
  const list:Items[] = [
    {
      text: '你好',
      value: 'hello'
    },
    {
      text: '世界',
      value: 'world'
    }
  ]
  return (
    <div>

    </div>
  )
}