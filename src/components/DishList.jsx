import React from 'react';
import {DishItem} from './DishItem'

function DishList(props) {
    return(
            <ol class="list-group list-group-numbered">
                { props.dishes.map(dish => {
                    return <DishItem dish={dish} key={dish.id}/>    
                }) }  
            </ol>
    )
}



export {DishList};