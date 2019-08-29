import React from 'react'

interface Items {
  text: string,
  value: string|number
}
const List: React.FC = () => {
  const list:Items[] = [
    {
      text: 'hello',
      value: 'hello'
    },
    {
      text: 'segai',
      value: 'world'
    }
  ]
  const ListItems: JSX.Element[] = list.map(item => {
    return (
      <div key={item.value}>{item.text}</div>
    )
  })
  return (
    <div>
      {ListItems}
    </div>
  )
}
export default List