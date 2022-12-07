import React from 'react'

import { Categories } from '../components/Categories/Categories'
import { Sort } from '../components/Sort/Sort'
import { PizzaBlog } from '../components/PizzaBlog/PizzaBlog'
import { PizzaSkeleton } from '../components/PizzaBlog/PizzaSkeleton'
//https://6390aae065ff4183111b1700.mockapi.io/pizzas - сервак с массивом данных

export const Home = () => {
  const [pizzaDatas, setPizzaDatas] = React.useState([])
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    fetch('https://6390aae065ff4183111b1700.mockapi.io/pizzas')
    .then(response => response.json())
    .then((data) => {
      //Таймаут для красоты анимации
      setTimeout(() => {
        setPizzaDatas(data)
        setIsLoading(false)
      }, 1000)
    })
  }, [])

  return (
    <>
      <div className="content__top">
              <Categories/>
              <Sort/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {
                isLoading ?
                [...new Array(6)].map(( _, index) => <PizzaSkeleton key={index}/>)
                : pizzaDatas.map(pizza => <PizzaBlog key={pizza.id} {...pizza}/>)
              }
      </div>
    </>
    )
}
