import React from 'react'
import Card from './Card'

const Cards = ({anywhereData}) => {
    return (
        <div className="flex gap-5">
        {anywhereData?.map((card) => (
            <Card key={card.img} {...card} />
        ))}
    </div>
    )
}

export default Cards
