import React from 'react'

function SandwichCard({sandwich}) {
    return(
        <div>
            name: {sandwich.name}
            price: {sandwich.price}
        </div>
    )
}

export default SandwichCard;