import React from 'react'

export const Categories = () => {
//Состояние активной категории:
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  const [categoryIndex, setCategoryIndex] = React.useState(0)


  return (
    <div className="categories">
      <ul>
        {
          categories.map((category, index) => (
              <li key={index} onClick={() => setCategoryIndex(index)} className={categoryIndex === index ? 'active' : ''}>
                {category}
              </li>
        ))}
      </ul>
    </div>
  )
}
