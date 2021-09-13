import React from 'react'
import { Categories, SortPopup, PizzaBlock } from "../components"

export default function Home({items}) {
  return (
    <div className="container">
      <div className="content__top">
        <Categories onClicked={e => console.log(e)}
          items={[
            "МЯСНЫЕ",
            "ВЕГЕТАРИАНСКИЕ",
            "ГРИЛЬ",
            "ОСТРЫЕ",
            "ЗАКРЫТЫЕ"
          ]} />
        <SortPopup items={["ПОПУЛЯРНОСТИ", "ЦЕНЕ", "АЛФАВИТ"]} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        
        {items.map((pizza)=>(
          <PizzaBlock {...pizza} key = {pizza.id}/>
        ))}
        </div>
      </div>
    
  )
}
