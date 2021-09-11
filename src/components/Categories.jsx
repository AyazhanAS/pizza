import React, { useState } from 'react'

export default function Categories(props) {

    const [activeItem, setActiveItem] = useState(null)
    
    return (
        <div className="categories">
            <ul>
                <li className={activeItem===null?"active":""} onClick = {e=>setActiveItem(null)}>Все</li>
                {props.items && props.items.map((item, index) => (
                    <li className={activeItem===item?"active":""} onClick = {e=>setActiveItem(item)} key = {`${item}_${index}`}>{item}</li>
                ))}
               
            </ul>
        </div>
    )
}
